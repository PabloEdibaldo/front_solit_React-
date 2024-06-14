import Table from '../../../components/Table'
import ModalCustom from '../../../components/Modal/Index';
import InputsData from '../components/CreateEdit/';
import { useState } from 'react';

function ProductosMerma({ data, loading, resivedData, recarga }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [idEliminar, setIdEliminar] = useState(null);
    const [isEliminar, setIsEliminar] = useState(false);
    const handleModalClose = () => setIsModalOpen(false);
    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Descripcion de falla", accessor: "falla_descripcion" },
        { Header: "Entrada", accessor: "fecha_entrada" },
        { Header: "Estatus", accessor: "status" },
        { Header: "Identificador producto individual", accessor: "id_producto_individual" },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div className="btn-group" role="group">
                    <button
                        className="btn btn-transparent btn-sm"
                        onClick={() => handleEdit(row.original)}
                        title="Editar"
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-transparent btn-sm"
                        onClick={() => { setIdEliminar(row.original.id), setIsEliminar(true) }}
                        title="Eliminar"
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            )
        }
    ];

    const formFields = [
        { label: "Falla", type: "text", name: "falla_descripcion", isRequired: true, isDisabled: false },
        { label: "Fecha entrada", type: "text", name: "fecha_entrada", isRequired: true, isDisabled: true },
        { label: "Id de producto individual", type: "text", name: "id_producto_individual", isRequired: true, isDisabled: true },
        { label: "Estatus", type: "text", name: "status", isRequired: true, isDisabled: true }
    ];

    const handleEdit = (product) => {
        setProductToEdit(product);
        setIsEditMode(true);
        setIsModalOpen(true);
    };
    const hadleDataReceived = (data) => {
        if (isEditMode) {
            resivedData(data, "Actualizar", productToEdit.id);
        } 
        setIsModalOpen(false);
    };
    const handleOkOrNot = (response) => {
        if (response) {
            handleModalClose();
        }
    };
    const handleModalOpen = () => {
        setProductToEdit(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };
    const handleDelete = () => {
        resivedData(null, "Eliminar", idEliminar);
    };

    return (
        <>
        {isEliminar ? (<div class="alert alert-danger d-flex justify-content-between" role="alert">
                    ¿Estas seguro de eliminar este registro ?
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-success" onClick={()=>{handleDelete(),setIsEliminar(false)}}>Aceptar</button>
                        <button type="button" class="btn btn-outline-danger" onClick={()=>{setIsEliminar(false)}}>Cancelar</button>
                    </div>
                </div>) : (null)}
            <div className="">
                <Table columns={columns} data={data} />
            </div>
            <>
                <ModalCustom
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    title={isEditMode ? "Editar Usuario" : "Crear Usuario"}
                    content={
                        <InputsData
                            fields={formFields}
                            onDataReceived={hadleDataReceived}
                            dataToEdit={productToEdit || {}}
                            okOrNot={handleOkOrNot}
                        />
                    }
                />
            </>
        </>
    )
}
export default ProductosMerma;