import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import TableComponent from '../../../components/Table';
import useApiRequest from '../../../hooks/useApiRequest';
import apiConfig from '../../../api/apiConfigGestionRed.json';
import ModalCustom from '../../../components/Modal/Index';
import InputsData from '../../Almacen/components/CreateEdit';
import ChartApex from './ChartApex/Index';

const DataTableComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenInfo, setIsModalOpenInfo] = useState(false);
  const [isModalOpenInfoLogs, setIsModalOpenInfoLogs] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [routerToEdit, setRouterToEdit] = useState({});

  const [id, setId] = useState(null);
  const [method, setMethod] = useState("GET");
  const [reloadCounter, setReloadCounter] = useState(0);
  const [traficoInterface, setTraficoInterface] = useState([]);
  const [idRouterInfo, setIdRouterInfo] = useState([]);
  const [selectedInterface, setSelectedInterface] = useState('');
  const [loadingChart, setLoadingChart] = useState(false);


  const [ipRouter, setIpRouter] = useState('');
  const [userMikrotik, setUserMikrotik] = useState('');
  const [password, setPassword] = useState('');

  const [infoRouterLogs, setInfoRouterLogs] = useState([])
  



  const { data, loading, error } = useApiRequest(
    `${apiConfig.apiBaseURL}${apiConfig.endpoints.router.get}`,
    method, routerToEdit, id, reloadCounter);

  useEffect(() => {
    if (method !== "GET" && method !== "DELETE") {
      setMethod("GET");
      setReloadCounter(prev => prev + 1);
    }
  }, [method]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
  };

  const handleModalCloseOpenInfo = () => {
    setIsModalOpenInfo(false);
  };
  const handleModalCloseOpenInfoLogs = () => {
    setIsModalOpenInfoLogs(false);
  };

  const handleEdit = (router) => {
    setRouterToEdit(router);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setId(id);
    setMethod("DELETE");
    setReloadCounter(prev => prev + 1);
  };

  const handleDataReceived = (data, method, id) => {
 
    if (method === "Actualizar Caja") {
      setRouterToEdit(data);
      setMethod("PUT");
      setId(id);
    } else if (method === "Crear Caja") {
      setRouterToEdit(data);
      setMethod("POST");
    } else if (method === "Eliminar Caja") {
      setId(id);
      setMethod("DELETE");
    }
    setTimeout(() => {
      setReloadCounter(prev => prev + 1);
      setMethod("GET");
    }, 1000);
  };

  const hadleDataReceived = (data) => {
    console.log(data)
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

  const fetchData = async (id, ip, userMikrotik, password) => {


    setIsModalOpenInfo(true);
    try {
      const routersResponse = await fetch(`http://172.16.15.37:8081/api/routers/router/info?idRouter=${id}`);
      if (routersResponse.ok) {
        const routersData = await routersResponse.json();
        setIdRouterInfo(routersData);
        if (routersData.interface.length > 0) {
          const firstInterface = routersData.interface[0];
          setSelectedInterface(firstInterface);
          await fetchTrafficData(firstInterface, ip, userMikrotik, password);
        }
      } else {
        throw new Error('Error al obtener los datos de usuarios');
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoadingChart(false);
    }
  };




  const MAX_TRAFFIC_DATA_LENGTH = 20;

  const fetchTrafficData = async (interfaceName, ip, userMikrotik, password) => {
    setIpRouter(ip)
    setUserMikrotik(userMikrotik)
    setPassword(password)
    try {
      const response = await fetch(`http://172.16.15.37:8081/api/routers/MonitoringInterfaces?interfaceMonitoring=${interfaceName}&ip=${ip}&userMikrotik=${userMikrotik}&password=${password}`);
      if (response.ok) {
        const data = await response.json();
        setTraficoInterface(prevData => {
          if (prevData.length >= MAX_TRAFFIC_DATA_LENGTH) {
            return [...prevData.slice(prevData.length - MAX_TRAFFIC_DATA_LENGTH), ...data];
          } else {
            return [...prevData, ...data];
          }
        });
      } else {
        throw new Error('Error al obtener los datos de usuarios');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleInterfaceChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedInterface(selectedValue);
    setLoadingChart(true);
    try {
      await fetchTrafficData(selectedValue, ipRouter, userMikrotik, password);
    } catch (error) {
      console.error('Error fetching traffic data:', error);
    } finally {
      setLoadingChart(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedInterface) {
        console.log("hola")
        fetchTrafficData(selectedInterface, ipRouter, userMikrotik, password);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedInterface, idRouterInfo]);

  const type_servers = [{ id: "PPP", nombre: "PPP" }, { id: "DHCP", nombre: "DHCP" }];
  const RouterOptions = type_servers.map(option => ({ value: option.nombre, label: option.nombre }));
  const formFields = [

    { label: "Nombre", type: "text", name: "name", isRequired: true },
    { label: "ip Mikrotik", type: "text", name: "ipAddress", isRequired: true },
    { label: "Usuario Mikrotik", type: "text", name: "userMikrotik", isRequired: true },
    { label: "Contrasenia Mikrotik", type: "text", name: "password", isRequired: true },
    { label: "Tipo de server", type: "select", name: "typeServer", isRequired: true, options: RouterOptions },
  ];

  const handleOkOrNot = (response) => {
    if (response) {
      handleModalClose();
    }
  };
  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nombre caja nap", accessor: "name" },
    { Header: "ipAddress", accessor: "ipAddress" },
    { Header: "Clientes", accessor: "clients" },
    { Header: "Status", accessor: "status" },
    { Header: "Version", accessor: "version" },
    { Header: "Modelo", accessor: "cpu" },
    {
      Header: 'Acciones',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="btn-group" role="group">
          <button
            className="btn btn-sm"
            onClick={() => handleDelete(row.original.id)}
            title="Eliminar"
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            className="btn btn-sm"
            onClick={() => handleEdit(row.original)}
            title="Editar"
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="btn btn-sm"
            onClick={() => fetchData(
              row.original.id,
              row.original.ipAddress,
              row.original.userMikrotik,
              row.original.password
            )}
            title="Mikrotik"
          >
            <i className="fas fa-microchip"></i>
          </button>

          <button
            className="btn btn-sm"
            onClick={() => fetchDataLogs(row.original.id)}
            title="Logs"
          >
            <i class="far fa-hdd"></i>
          </button>
        </div>
      )
    }
  ];


  const fetchDataLogs = async (idRouterLogs) => {
    setIsModalOpenInfoLogs(true)
    try {
      const routersResponse = await fetch(`http://172.16.15.37:8081/api/routers/Logs?idRouter=${idRouterLogs}`);

      if (routersResponse.ok) {
        const routersData = await routersResponse.json();

        setInfoRouterLogs(routersData);

      } else {
        throw new Error('Error al obtener los datos de usuarios');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <div className="panel panel-inverse">
        <div className="panel-heading">
          <h4 className="panel-title">Gestión de Routers</h4>
          <div className="panel-heading-btn">
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-redo"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
          </div>
        </div>
        <div className="panel-body">
          <div className="mb-2">
          </div>
          {loading ? (
            <div className="text-center">
              <i className="fas fa-spinner fa-pulse fa-3x"></i>
            </div>
          ) : (
            <TableComponent columns={columns} data={data} buttonAct={
              <button className="btn btn-primary" onClick={handleModalOpen}>Nuevo Router <i className="far fa-lg fa-fw m-r-6 fa-plus-square"></i></button>
            } />
          )}
        </div>
      </div>
      <ModalCustom
        title={isEditMode ? "Actualizar Router" : "Crear Router"}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        content={
          <InputsData
            fields={formFields}
            onDataReceived={hadleDataReceived}
            dataToEdit={routerToEdit}
            okOrNot={handleOkOrNot}
          />
        }
      />
      <ModalCustom
        title={"Informacion de router"}
        isOpen={isModalOpenInfo}
        onClose={handleModalCloseOpenInfo}
        content={
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
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
                          {idRouterInfo["system"] && idRouterInfo["system"].map((item, index) => (
                            Object.entries(item).map(([key, value]) => (
                              <tr key={`${key}-${index}`}>
                                <th scope="row">{key}</th>
                                <td>{value}</td>
                              </tr>
                            ))
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4>Tráfico de las Interfaces</h4>
                  <div className='card'>
                    <div className='card-body'>


                      <div>
                        <label htmlFor="interfaceSelect">Seleccionar una interfaz</label>
                        <select
                          id="interfaceSelect"
                          className="form-select"
                          value={selectedInterface || ''}
                          onChange={handleInterfaceChange}
                          disabled={loading}
                        >
                          {idRouterInfo["interface"] && idRouterInfo["interface"].map((interfaz) => (
                            <option key={interfaz} value={interfaz}>{interfaz}</option>
                          ))}
                        </select>
                        <div className='card'>
                          <div className='card-body'>
                            <ChartApex traficData={traficoInterface} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
      <ModalCustom
        title={"Registro de Logs"}
        isOpen={isModalOpenInfoLogs}
        onClose={handleModalCloseOpenInfoLogs}
        content={
          <>
            <div className="container">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Topics</th>
                    <th scope="col">ID</th>
                    <th scope="col">Time</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {infoRouterLogs.map((log, index) => (
                    <tr key={index}>
                      <td>{log.topics}</td>
                      <td>{log[".id"]}</td>
                      <td>{log.time}</td>
                      <td>{log.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        }
      />
    </>
  );
};

export default DataTableComponent;

