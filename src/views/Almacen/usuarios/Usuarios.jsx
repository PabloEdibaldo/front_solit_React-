import Table from '../../../components/Table';
import ModalCustom from '../../../components/Modal/Index';
import InputsData from '../components/CreateEdit/';
import { useState, useEffect, useMemo } from "react";
function Usuarios({ data, dataUsuario, usuariosLoading, resivedData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [idEliminar, setIdEliminar] = useState(null);
    const [isEliminar, setIsEliminar] = useState(false);
    const handleModalClose = () => setIsModalOpen(false);
    const columns = [
        { Header: "Nombre", accessor: "nombre_completo" },
        { Header: "E-mail", accessor: "correo_electronico" },
        { Header: "Celular", accessor: "numero_celular" },
        { Header: "Rol/Puesto", accessor: "tipo_rol" },
        { Header: "Fecha nacimiento", accessor: "fecha_nacimiento" },
        { Header: "Estatus", accessor: "estatus" },
        { Header: "Ubicacion", accessor: "ubicacion" },
        { Header: "Equipo de trabajo", accessor: "equipo_trabajo" },
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
        { label: "Nombre", type: "text", name: "nombre_completo", isRequired: true, isDisabled: false },
        { label: "E-mail", type: "text", name: "correo_electronico", isRequired: true, isDisabled: false },
        { label: "Celular", type: "number", name: "numero_celular", isRequired: true, isDisabled: false },
        {
            label: "Rol / Puesto", type: "select", name: "tipo_rol", isRequired: true, options: [
                { value: "", label: "Selecciona una opcion" },
                { value: "admin", label: "Administrador" },
                { value: "fucion", label: "Fucionador" },
                { value: "tecnico", label: "Tecnico" }
            ]
        },
        { label: "Fecha nacimiento", type: "date", name: "fecha_nacimiento", isRequired: true, isDisabled: false },
        {
            label: "Estatus", type: "select", name: "estatus", isRequired: true, isDisabled: false, options: [
                { value: false, label: "Selecciona una opcion" },
                { value: true, label: "Activo" },
                { value: false, label: "Inactivo" }
            ]
        },
        { label: "Ubicacion", type: "text", name: "ubicacion", isRequired: true, isDisabled: false },
        { label: "Equipo trabajo", type: "text", name: "equipo_trabajo", isRequired: true, isDisabled: false },
        { label: "Clave", type: "password", name: "password", isRequired: true, isDisabled: false },
        // { label: "Imagen del usuario", type: "file", name: "fotoPerfil", isRequired: false, isDisabled: false },
    ];
    const handleEdit = (product) => {
        setProductToEdit(product);
        setIsEditMode(true);
        setIsModalOpen(true);
    };
    const hadleDataReceived = (data) => {
        if (isEditMode) {
            resivedData(data, "Actualizar Usuario", productToEdit.id);
        } else {
            resivedData(data, "Crear Usuario", null);
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
                    <button type="button" class="btn btn-outline-success" onClick={() => { handleDelete(), setIsEliminar(false) }}>Aceptar</button>
                    <button type="button" class="btn btn-outline-danger" onClick={() => { setIsEliminar(false) }}>Cancelar</button>
                </div>
            </div>) : (null)}
            <button className="btn btn-primary mb-2" onClick={handleModalOpen}>Crear Usuario <i className="far fa-plus"></i></button>
            <Table columns={columns} data={dataUsuario} />
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
export default Usuarios;