import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import TableComponent from '../../../components/Table';
import useApiRequest from '../../../hooks/useApiRequest';
import apiConfig from '../../../api/apiConfigGestionRed.json';
import InputsData from '../../Almacen/components/CreateEdit';

function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [routerToEdit, setRouterToEdit] = useState({});
    const [id, setId] = useState(null);
    const [method, setMethod] = useState("GET");
    const [reloadCounter, setReloadCounter] = useState(0);
    const [CIDR, setCIDR] = React.useState([]);
    const [isModalResumenOpen, setIsModalResumenOpen] = useState(false);

    // Estados para alertas
    const [showUpdateAlert, setShowUpdateAlert] = useState(false);
    const [showCreateAlert, setShowCreateAlert] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    const { data, loading, error } = useApiRequest(`${apiConfig.apiBaseURL}${apiConfig.endpoints.redIpv4.get}`, method, routerToEdit, id, reloadCounter);
    const { data: routerData, loading: routerLoading, error: routerError } = useApiRequest(`${apiConfig.apiBaseURL}${apiConfig.endpoints.router.get}`, "GET", null, null);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
    };

    const handleModalCloseCalculo = () => {
        setIsModalResumenOpen(false);
    };

    useEffect(() => {
        if (method !== "GET" && method !== "DELETE") {
            setMethod("GET");
            setReloadCounter(prev => prev + 1);
        }
    }, [method]);

    const handleOkOrNot = (response) => {
        if (response) {
            handleModalClose();
        }
    };

    const handleEdit = (router) => {
        setRouterToEdit(router);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        setId(id);
        setMethod("DELETE");
        setShowDeleteAlert(true); // Mostrar la alerta de eliminación
        setTimeout(() => {
            setShowDeleteAlert(false); // Ocultar la alerta después de 3 segundos
            setReloadCounter(prev => prev + 1);
            setMethod("GET");
        }, 3000);
    };

    const handleDataReceived = (data, method, id) => {
        if (method === "Actualizar Caja") {
            setRouterToEdit(data);
            setMethod("PUT");
            setId(id);
            setShowUpdateAlert(true); // Mostrar la alerta de actualización
            setTimeout(() => {
                setShowUpdateAlert(false); // Ocultar la alerta después de 3 segundos
            }, 3000);
        } else if (method === "Crear Caja") {
            setRouterToEdit(data);
            setMethod("POST");
            setShowCreateAlert(true); // Mostrar la alerta de creación
            setTimeout(() => {
                setShowCreateAlert(false); // Ocultar la alerta después de 3 segundos
            }, 3000);
        }
        setTimeout(() => {
            setReloadCounter(prev => prev + 1);
            setMethod("GET");
        }, 1000);
    };

    const hadleDataReceived = (data) => {
        if (isEditMode) {
            handleDataReceived(data, "Actualizar Caja", routerToEdit.id);
        } else {
            handleDataReceived(data, "Crear Caja", null);
        }
    };

    const handleModalOpen = () => {
        setRouterToEdit({});
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const RouterOptions = routerData.map(option => ({ value: option.name, label: option.name }));

    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "nombre", accessor: "name" },
        { Header: "Nombre router", accessor: "name_router" },
        { Header: "Ip", accessor: "red_ip" },
        { Header: "CIDR", accessor: "cidr" },
        { Header: "Tipo uso", accessor: "use_type" },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div className="btn-group" role="group">
                    <button
                        className="btn  btn-sm"
                        onClick={() => handleDelete(row.original.id)}
                        title="Eliminar"
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                    <button
                        className="btn  btn-sm"
                        onClick={() => handleEdit(row.original)}
                        title="Editar"
                    >
                        <i className="fa fa-edit"></i>
                    </button>
                    <button
                        className="btn  btn-sm"
                        onClick={() => cunsotarCIDR(row.original.red_ip, row.original.cidr)}
                        title="Detalles de red"
                    >
                        <i className="fas  fa-sitemap"></i>
                    </button>
                </div>
            )
        }
    ];

    const cunsotarCIDR = async (red_ip, cidr) => {
        setIsModalResumenOpen(true);
        fetch(`http://172.16.15.37:8081/api/redIpv4/calculateCIDR?ip=${red_ip}&cidr=${cidr}`)
            .then(response => response.json())
            .then(data => setCIDR(data))
            .catch(error => console.error("Error fetching Caja Nap Puertos:", error));
    };

    const namesRouters = routerData.map(routerData => ({
        value: routerData.name,
        label: routerData.name,
    }));

    const formFields = [
        //Labels//
        { label: "Nombre", type: "text", name: "name", isRequired: true },
        { label: "Router", type: "select", name: "name_router", isRequired: true, options: namesRouters },
        { label: "Ip", type: "text", name: "red_ip", isRequired: true },
        { label: "CIDR", type: "number", name: "cidr", isRequired: true },
        { label: "Tipo de uso", type: "text", name: "use_type", isRequired: true },
    ];

    return (
        <>
            <div className="panel panel-inverse">
                <div className="panel-heading">
                    <h4 className="panel-title">Redes Ipv4</h4>
                    <div className="panel-heading-btn">
                        <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
                        <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-redo"></i></a>
                        <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
                        <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
                    </div>
                </div>
                <div className="panel-body">
                    {showUpdateAlert && (
                        <div className="alert alert-primary" role="alert">
                            El router se ha actualizado correctamente.
                        </div>
                    )}
                    {showCreateAlert && (
                        <div className="alert alert-success" role="alert">
                            El router se ha creado correctamente.
                        </div>
                    )}
                    {showDeleteAlert && (
                        <div className="alert alert-danger" role="alert">
                            El router se ha eliminado correctamente.
                        </div>
                    )}
                    <div className="mb-2">
                    </div>
                    {loading ? (
                        <div className="text-center">
                            <i className="fas fa-spinner fa-pulse fa-3x"></i>
                        </div>
                    ) : (
                        <TableComponent columns={columns} data={data} buttonAct={
                            <button className="btn btn-primary" onClick={handleModalOpen}>Nueva red Ipv4<i className="far fa-lg fa-fw m-r-6 fa-plus-square"></i></button>
                        } />
                    )}
                </div>
            </div>

            {/* Modal para crear y actualizar red ipv4 */}
            <div className={`modal fade ${isModalOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isModalOpen ? 'block' : 'none' }} aria-modal="true" role="dialog">
                <div className="modal-dialog" style={{ maxWidth: '30%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{isEditMode ? "Actualizar Red Ipv4" : "Crear Red Ipv4"}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
                        </div>
                        <div className="modal-body">
                            <InputsData
                                fields={formFields}
                                onDataReceived={hadleDataReceived}
                                dataToEdit={routerToEdit}
                                okOrNot={handleOkOrNot}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para mostrar cálculos */}
            <div className={`modal fade ${isModalResumenOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isModalResumenOpen ? 'block' : 'none' }} aria-modal="true" role="dialog">
                <div className="modal-dialog" style={{ maxWidth: '30%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Resumen del Pedido</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalCloseCalculo}></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <h4>Información del Sistema</h4>
                                <div className='card'>
                                    <div className='card-body'>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Property</th>
                                                    <th scope="col">Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(CIDR).map(([key, value]) => (
                                                    <tr key={`${key}-${value}`}>
                                                        <th scope="row">{key}</th>
                                                        <td>{value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleModalCloseCalculo}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
