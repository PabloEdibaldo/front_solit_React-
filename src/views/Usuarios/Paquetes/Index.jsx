import TableComponent from "../../../components/Table";
import useApiRequest from "../../../hooks/useApiRequest";
import config from "../../../api/apiUserInter";
import { useEffect, useState } from "react";
import ModalCustom from '../../../components/Modal/Index';
import InputsData from '../../Almacen/components/CreateEdit/';
const Paquetes = () => {
    const[values, setValues] = useState(null);
    const[id, setId] = useState(null);
    const[method, setMethod] = useState(null);
    const[recarga, setRecarga] = useState(0);
    const { data, loading, error } = useApiRequest(config.endpoints.internet.get, "GET", null, null, recarga);
    const { data:paquete, loading:paqueteLoanding, error:e } = useApiRequest(config.endpoints.internet.post, method, values, id);
    useEffect(() => {
        console.log(data);
    }, [])


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const columns = [
        { Header: 'id', accessor: 'id' },
        { Header: 'Nombre del paquete', accessor: 'name' },
        { Header: 'Precio', accessor: 'price' },
        { Header: 'Bajada', accessor: 'lowSpeed' },
        { Header: 'Subida', accessor: 'uploadSpeed' },
        { Header: 'Descripcion', accessor: 'description' },
        { Header: 'Mora', accessor: 'mora' },
        { Header: 'Link', accessor: 'link' },
        { Header: 'Activos', accessor: 'n' },
        { Header: 'Suspendidos', accessor: 'z' },
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
                        onClick={() => handleDelete(row.original.id)}
                        title="Eliminar"
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            )
        }
    ];

    const hadleDataReceived = (data) => {
        if (isEditMode) {
            setMethod("PUT");
            setValues(data);
            setId(productToEdit.id)
        } else {
            setMethod("POST");
            setValues(data);
            setId(null);
        }
        
        setIsModalOpen(false);
      };

    const handleModalOpen = () => {
        setProductToEdit(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleOkOrNot = (response) => {
        if (response) {
          handleModalClose();
        }
      };
      const handleEdit = (product) => {
        setProductToEdit(product);
        setIsEditMode(true);
        setIsModalOpen(true);
      };  

    const formFields = [
        { label: "Nombre del paquete", type: "text", name: "name", isRequired: true },
        { label: "Precio", type: "text", name: "price", isRequired: true },
        { label: "Bajada", type: "text", name: "lowSpeed", isRequired: true },
        { label: "Subida", type: "text", name: "uploadSpeed", isRequired: false, isDisabled: false },
        { label: "Descripcion", type: "text", name: "description", isRequired: true },
      ];

    const handleModalClose = () => setIsModalOpen(false);

    return (
        <>
            <TableComponent
                columns={columns}
                data={data}
                buttonAct={
                    <>
                        <button className="btn btn-primary" onClick={handleModalOpen}>Nuevo paquete <i className="far fa-lg fa-fw m-r-6 fa-plus-square"></i></button>
                    </>
                }
            />
            <ModalCustom
                isOpen={isModalOpen}
                onClose={handleModalClose}
                title={isEditMode ? "Editar" : "Crear"}
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
    )
}
export default Paquetes;