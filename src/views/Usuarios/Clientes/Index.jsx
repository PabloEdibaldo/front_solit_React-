import React, { useState, useEffect } from 'react';
import 'datatables.net-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import TableComponent from '../../../components/Table';
import useApiRequest from '../../../hooks/useApiRequest';

import apiUser from "../../../api/apiUser.json";
import { Link } from 'react-router-dom';
import apiConfigGestionRed from '../../../api/apiConfigGestionRed.json'

function Index() {
  const [method, setMethod] = useState("GET");
  const [valuesD, setValuesD] = useState(null);
  const [reloadCounter, setReloadCounter] = useState(0);
  const [id, setId] = useState(null);
  const [dataActual,setDataActual] = useState([])


  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Cliente", accessor: "nameClient" },
    { Header: "Router", accessor: "nameRouter" },
    { Header: "Día de creación", accessor: "creationDay" },
    { Header: "Paquete", accessor: "namePackage" },
    { Header: "IP", accessor: "ip" },
    { Header: "Caja NAP", accessor: "boxName" },
    { Header: "Puerto", accessor: "port" },
    { Header: "Contraseña", accessor: "password" },
    { Header: "Tipo ONU", accessor: "type_service" },

    {
      Header: 'Acciones',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="btn-group" role="group">
          <Link
            to={`/clientes/InfoUser/${row.original.id}`}
            className="btn btn-transparent btn-sm"
            title="Editar"
          >
            <i className="fas fa-edit"></i>
          </Link>
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
  

  const { data, loading, error } = useApiRequest(`${apiUser.apiBaseURL}${apiUser.endpoints.obtenerClientes.get}`, method, valuesD, id, reloadCounter);
 //console.log(data)
  const cajaNap = useApiRequest(`${apiConfigGestionRed.apiBaseURL}${apiConfigGestionRed.endpoints.CajaNap.get}`, "GET", null, null, null);

  useEffect(() => {
    if (data && cajaNap.data) {
      const updatedData = data.map(item => {
        const box = cajaNap.data.find(box => box.id === item.box);
        return {
          ...item,
          boxName: box ? box.name : 'No asignado'
        };
      });
      setDataActual(updatedData);
    }
  }, [data, cajaNap.data]);

  return (
    <>
      <div className="panel panel-inverse ">
        <div className="panel-heading" >
          <h4 className="panel-title" >Gestión de Routers</h4>
          <div className="panel-heading-btn">
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-redo"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
          </div>
        </div>
        <div className="panel-body">
          <div className="mb-2">
            {/* <button className="btn btn-primary" onClick={handleModalOpen}>Nuevo Router <i className="far fa-lg fa-fw m-r-6 fa-plus-square"></i></button> */}
          </div>
          {loading ? (
            <div className="text-center">
              <i className="fas fa-spinner fa-pulse fa-3x"></i>
            </div>
          ) : (
            <TableComponent columns={columns} data={dataActual}
              buttonAct={
                <>
              
                  <Link to="/clientes/nuevoCliente"><button type="button" class="btn btn-primary">Nuevo cliente</button></Link>
                </>
              }
            />
          )}
        </div>
      </div>


    </>
  )
}

export default Index