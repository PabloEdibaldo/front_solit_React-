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

const DataTableComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [routerToEdit, setRouterToEdit] = useState({});
  const [id, setId] = useState(null);
  const [method, setMethod] = useState("GET");
  const [reloadCounter, setReloadCounter] = useState(0);

  // Estados para alertas
  const [alert, setAlert] = useState({ type: '', message: '', visible: false });

  const { data, loading, error } = useApiRequest(`${apiConfig.apiBaseURL}${apiConfig.endpoints.CajaNap.get}`, method, routerToEdit, id, reloadCounter);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
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
    setAlert({ type: 'danger', message: 'La caja nap se ha eliminado correctamente.', visible: true });

    setTimeout(() => {
      setAlert({ ...alert, visible: false });
      setReloadCounter(prev => prev + 1);
      setMethod("GET");
    }, 3000);
  };

  const handleDataReceived = (data, method, id) => {
    if (method === "Actualizar Caja") {
      setRouterToEdit(data);
      setMethod("PUT");
      setId(id);
      setAlert({ type: 'primary', message: 'La caja nap se ha actualizado correctamente.', visible: true });
    } else if (method === "Crear Caja") {
      setRouterToEdit(data);
      setMethod("POST");
      setAlert({ type: 'success', message: 'La caja nap se ha creado correctamente.', visible: true });
    }

    setTimeout(() => {
      setAlert({ ...alert, visible: false });
      setReloadCounter(prev => prev + 1);
      setMethod("GET");
    }, 3000);
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

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nombre caja nap", accessor: "name" },
    { Header: "Cordenadas", accessor: "coordinates" },
    { Header: "Direccion", accessor: "location" },
    { Header: "Detalles", accessor: "details" },
    { Header: "Puertos", accessor: "ports" },
    {
      Header: 'Acciones',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="btn-group" role="group">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(row.original.id)}
            title="Eliminar"
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            className="btn btn-success btn-sm"
            onClick={() => handleEdit(row.original)}
            title="Editar"
          >
            <i className="fa fa-edit"></i>
          </button>
        </div>
      )
    }
  ];

  const formFields = [
    { label: "Nombre", type: "text", name: "name", isRequired: true },
    { label: "Coordenadas", type: "text", name: "coordinates", isRequired: true },
    { label: "Ubicacion", type: "text", name: "location", isRequired: true },
    { label: "Detalles", type: "text", name: "details", isRequired: true },
    { label: "Puertos", type: "number", name: "ports", isRequired: true },
  ];

  return (
    <>
      <div className="panel panel-inverse">
        <div className="panel-heading">
          <h4 className="panel-title">CAJAS NAP</h4>
          <div className="panel-heading-btn">
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-redo"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
            <a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
          </div>
        </div>
        <div className="panel-body">
          {alert.visible && (
            <div className={`alert alert-${alert.type}`} role="alert">
              {alert.message}
            </div>
          )}
          <div className="mb-2">
            <button className="btn btn-primary" onClick={handleModalOpen}>Nuevo Router <i className="far fa-lg fa-fw m-r-6 fa-plus-square"></i></button>
          </div>
          {loading ? (
            <div className="text-center">
              <i className="fas fa-spinner fa-pulse fa-3x"></i>
            </div>
          ) : (
            <TableComponent columns={columns} data={data} />
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
    </>
  );
};

export default DataTableComponent;
