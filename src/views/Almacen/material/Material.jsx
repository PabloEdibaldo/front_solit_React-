import React, { useState, useEffect, useRef } from 'react';
import Table from '../../../components/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import useApiRequest from "../../../hooks/useApiRequest";
import apiConfig from "../../../api/apiConfig";
import ModalCustom from '../../../components/Modal/Index';
import Ticket from './ticket/Index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Material = ({ }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenAlta, setIsModalOpenAlta] = useState(false);
    const [editar, setEditar] = useState([]);
    const [activo, setActivo] = useState("");
    const [nombreSolicitanteAndFecha, setNombreSolicitanteAndFecha] = useState({});
    const [valuesD, setValuesD] = useState([]);
    const [id, setId] = useState(null);
    const [estadoCrud, setEstadoCrud] = useState("GET");
    const [isActivo, setIsActivo] = useState(false);
    const [codigo, setCodigo] = useState("");
    const [negar, setNegar] = useState(null);
    const [user, setUser] = useState(null);
    const [sacarMaterialMethod, setSacarMaterialMethod] = useState(null);
    const [valuesMaterial, setMaterialValues] = useState(null);
    const materiales = useApiRequest(apiConfig.endpoints.reparto.url, estadoCrud, valuesD, id, null);
    const sacarMaterial = useApiRequest(apiConfig.endpoints.sacarMaterialporCodigo.url, sacarMaterialMethod, valuesMaterial, null, null);
    const [idEliminar, setIdEliminar] = useState(null);
    const [isEliminar, setIsEliminar] = useState(false);
    const handleSaveBarcodes = () => {
        const barcodeArray = codigo.split('\n').filter(code => code.trim() !== '');
        const objeto = {
            nombre_administrador: user.nombre_completo,
            id_reparto: id,
            codigos: barcodeArray
        }
        setSacarMaterialMethod("POST")
        setMaterialValues(objeto);
        if (sacarMaterial) {
            console.log(sacarMaterial);
        }
        toast.success("Se agregaron los codigos exitosamente");
        setIsModalOpenAlta(false);
        handleReset();
    };

    useEffect(() => {
        const usuario = JSON.parse(sessionStorage.getItem("user"));
        setUser(usuario);
    }, []);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsModalOpenAlta(false);
    };

    const handleReset = () => {
        setMaterialValues();
        setCodigo('');
    }

    const imprimirTicket = (params) => {
        setNombreSolicitanteAndFecha({ nombre: params.nombre_solicitante, fecha: params.fecha_solicitud });
        setEditar(params.producto_cantidad.productos);
    };

    const negarPeticion = () => {
        setId(idEliminar);
        setEstadoCrud("DELETE");
        setNegar(false);
        setIsActivo(true);

        setTimeout(() => {
            setEstadoCrud("GET");
            setIsActivo(false);
            setId(null);
        }, 1500)
    }

    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Aceptado Por", accessor: "nombre_administrador" },
        { Header: "Nombre del solicitante", accessor: "nombre_solicitante" },
        { Header: "Fecha", accessor: "fecha_solicitud" },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
                <>
                    <div className="btn-group" role="group">
                        <button
                            className="btn btn-light btn-sm"
                            onClick={() => {setIdEliminar(row.original.id), setIsEliminar(true)}}
                            title="Negar"
                        >
                            <i class="far  fa-thumbs-down"></i>
                        </button>
                        <button
                            className="btn btn-light btn-sm"
                            onClick={() => { setIsModalOpenAlta(true), setId(row.original.id), imprimirTicket(row.original) }}
                            title="Aceptar"
                            disabled={row.original.nombre_administrador}
                        >
                            <i className="fas fa-calendar-check"></i>
                        </button>
                    </div>
                </>
            )
        }
    ];

    return (
        <>
            <ToastContainer />
            {materiales.loading ? (
                <div className="d-flex justify-content-center">
                    <i className="fas fa-spinner fa-pulse"></i>
                </div>
            ) : (<>
                {isEliminar ? (<div class="alert alert-danger d-flex justify-content-between" role="alert">
                    ¿Estas seguro de eliminar este registro ?
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-success" onClick={() => { negarPeticion(), setIsEliminar(false) }}>Aceptar</button>
                        <button type="button" class="btn btn-outline-danger" onClick={() => { setIsEliminar(false) }}>Cancelar</button>
                    </div>
                </div>) : (null)}
                <Table columns={columns} data={materiales.data} />
            </>)}

            <ModalCustom
                isOpen={isModalOpen}
                onClose={handleModalClose}
                title={"Productos pedidos"}
                content={<>
                    {editar.length !== 0 ? (
                        <div className=''>
                            <Ticket
                                editar={editar}
                                nombre={nombreSolicitanteAndFecha.nombre}
                                fecha={nombreSolicitanteAndFecha.fecha}
                            />
                        </div>
                    ) : (
                        <p>No existe registro de material.</p>
                    )}
                </>
                }
                footer={<>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleModalClose}>Cerrar</button>
                    <button type="button" className="btn btn-success" onClick={handleModalClose}>Aceptar</button>
                </>}
            />

            <ModalCustom
                title={"Salida de productos"}
                isOpen={isModalOpenAlta}
                onClose={handleModalClose}
                content={<>
                    {editar.length !== 0 ? (
                        <div className=''>
                            <Ticket
                                editar={editar}
                                nombre={nombreSolicitanteAndFecha.nombre}
                                fecha={nombreSolicitanteAndFecha.fecha}
                            />
                        </div>
                    ) : (
                        <p>No existe registro de material.</p>
                    )}
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Salida de productos:</label>
                        <textarea class="form-control" value={codigo} placeholder="Ingresar los codigos de barras..." rows="10" cols="50" onChange={(e) => setCodigo(e.target.value)} />
                    </div>
                </>}
                footer={
                    <>
                        <button className='btn btn-success' disabled={!codigo} onClick={() => { handleSaveBarcodes() }}>
                            Agregar
                        </button>
                    </>
                }
            />
        </>
    );
};
export default Material;

// const aceptarPeticion = (datosPeticion) => {
//     const dataJson = {
//         fecha_solicitud: datosPeticion.fecha_solicitud,
//         nombre_administrador: user.user.nombre_completo,
//         producto_cantida: datosPeticion.producto_cantidad,
//         nombre_solicitante: datosPeticion.nombre_solicitante,
//         nombreCliente: datosPeticion.nombreCliente,
//         id_usuario: datosPeticion.id_usuario,
//         idSolicitante: datosPeticion.idSolicitante,
//         id_zona: datosPeticion.id_zona
//     }
//     setId(datosPeticion.id)
//     setEstadoCrud("PUT")
//     setValuesD(dataJson)
//     setNegar(true);
//     setIsActivo(true);

//     setTimeout(() => {
//         setEstadoCrud("GET");
//         setIsActivo(false);
//     }, 1500)
// }