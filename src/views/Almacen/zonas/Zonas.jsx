import { useState, useEffect } from "react";
import Table from '../../../components/Table'
import useApiRequest from "../../../hooks/useApiRequest";
import config from "../../../api/apiConfig";
import ModalCustom from '../../../components/Modal/Index';
import InputsData from '../../Almacen/components/CreateEdit';
const Zona = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenProductos, setIsModalOpenProductos] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [routerToEdit, setRouterToEdit] = useState({});
  const [id, setId] = useState(null);
  const [method, setMethod] = useState("GET");
  const [reloadCounter, setReloadCounter] = useState(0);

  const [productos,setProductos] = useState([])

  const [alert, setAlert] = useState({ type: '', message: '', visible: false });

  const zonas = useApiRequest(config.endpoints.zonasTrabajo.url, method, routerToEdit, id, reloadCounter);

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nombre de la zona", accessor: "zona" },
    { Header: "Fraccionamiento", accessor: "fraccionamiento" },
    { Header: "Colonia", accessor: "colona" },
    { Header: "Junta auxiliar", accessor: "juntaAuxiliar" },

    {
      Header: 'Acciones',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="btn-group" role="group">
          <button
            className="btn btn-light btn-sm"
            onClick={() => handleDelete(row.original.id)}
            title="Eliminar"
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            className="btn btn-light btn-sm"
            onClick={() => handleEdit(row.original)}
            title="Editar"
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="btn btn-light btn-sm"
            onClick={() => mostrarModalProductos(row.original.productos)}
            title="Editar"
          >
            <i class="fas fa-eye"></i>
          </button>
        </div>
      )
    }
  ];
  const mostrarModalProductos = (productos) => {
    setProductos(productos)
    setIsModalOpenProductos(true);

  }

  //<i class="fas fa-lg fa-fw m-r-10 fa-eye"></i>
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
  };
  const handleModalCloseProducto = () => {
    setIsModalOpenProductos(false);
   
  
  };


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
    setAlert({ type: 'danger', message: 'La zona se ha eliminado correctamente.', visible: true });

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
      setAlert({ type: 'primary', message: 'La zona se ha actualizado correctamente.', visible: true });
    } else if (method === "Crear Caja") {
      setRouterToEdit(data);
      setMethod("POST");
      setAlert({ type: 'success', message: 'La zona  se ha creado correctamente.', visible: true });
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

  const formFields = [
    { label: "Zona", type: "text", name: "zona", isRequired: true },
    { label: "Fraccionamiento", type: "text", name: "fraccionamiento", isRequired: true },
    { label: "Colonia", type: "text", name: "colona", isRequired: true },
    { label: "Junta Auxiliar", type: "text", name: "juntaAuxiliar", isRequired: true },

  ];


  return (
    <>
      <div className="panel panel-inverse">
        <div className="panel-heading">
          <h4 className="panel-title">Tabla zonas</h4>
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
            <button className="btn btn-primary" onClick={handleModalOpen}>Nueva zona <i className="far fa-lg fa-fw m-r-6 fa-plus-square"></i></button>
          </div>
          {zonas.loading ? (
            <div className="text-center">
              <i className="fas fa-spinner fa-pulse fa-3x"></i>
            </div>
          ) : (
            <Table columns={columns} data={zonas.data} />
          )}
        </div>
      </div>
      <ModalCustom
        title={isEditMode ? "Actualizar zona" : "Crear zona"}
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
        title={"Produtctos utilizados"}
        isOpen={isModalOpenProductos}
        onClose={handleModalCloseProducto}
        content={
         <>
         <div className="container">
              <table className="table table-striped">
                <thead>
                  <tr>
                  
                   
                    <th scope="col">nombre</th>
                    <th scope="col">Unidades</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((log, index) => (
                    <tr key={index}>
                      
                      <td>{log.nombre}</td>
                      <td>{log.unidades}</td>
                      
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
         </>
        }
      />




    </>
  )
}
export default Zona;

/**
 *  <div className="">
        
      </div>
*/