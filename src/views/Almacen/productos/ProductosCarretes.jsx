import { useState } from 'react';
import Table from '../../../components/Table';
import ModalCustom from '../../../components/Modal/Index';
import InputsData from '../components/CreateEdit';
const ProductosCarretes = ({ datos, loanding, resivedData, user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [idEliminar, setIdEliminar] = useState(null);
    const [isEliminar, setIsEliminar] = useState(false);
    const handleModalClose = () => setIsModalOpen(false);

    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Metraje Inicial (Metros)", accessor: "metraje_inicial" },
        { Header: "Metraje Usado (Metros)", accessor: "metraje_usado" },
        { Header: "Descripcion", accessor: "descripcion" },
        { Header: "Luegar donde se uso", accessor: "luegarDeUso" },
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
                </div>
            )
        }
    ];

    const formFields = [
        { label: "Metraje Inicial", type: "number", name: "metraje_inicial", isRequired: true, isDisabled: false },
        { label: "Metraje Usado", type: "number", name: "metraje_usado", isRequired: true },
        { label: "Descripcion", type: "text", name: "descripcion", isRequired: false, isDisabled: false },
        { label: "Lugar de uso", type: "text", name: "luegarDeUso", isRequired: false, isDisabled: false },
        // { label: "Selecciona un usuario", type: "select", name: "id_usuario", isRequired: true, options: usuarios }
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
            <div className="">
                <Table columns={columns} data={datos} />
            </div>
            <>
                <ModalCustom
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    title={isEditMode ? "Editar Carrete":""}
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
export default ProductosCarretes;