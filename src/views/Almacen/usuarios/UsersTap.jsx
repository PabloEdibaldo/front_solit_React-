import { useEffect, useState } from "react";
import Usuarios from './Usuarios';
import useApiRequest from "../../../hooks/useApiRequest";
import apiConfig from "../../../api/apiConfig";
import Contratos from "./Contratos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UsersTab() {
  // Id //
  const [id, setId] = useState(null);
  // Values //   
  const [method, setMethod] = useState("GET");
  const [valuesD, setValuesD] = useState(null);
  const [reloadCounter, setReloadCounter] = useState(0);
  const [archivo, setArchivo] = useState(null)
  // LLamadas Api //
  const [activeTab, setActiveTab] = useState('usuarios');
  const  data = useApiRequest(apiConfig.endpoints.usuarios.url, method, valuesD, id, reloadCounter);

  const { data: contratoData, loading: contratoLoading, error: contratoError } = useApiRequest(apiConfig.endpoints.almacenMaterialInstacion, "GET");

  //   const { data: productosData, loading: productosLoading, error: productosError } = useApiRequest(`${apiConfig.apiBaseURL}${endpointProductos}`, methodProductos);
  const hadleDataReceived = (data, method, id) => {
    if (method === "Actualizar Usuario") {
      setValuesD(data);
      setId(id);
      setMethod("PUT");
      toast.success('Producto editado correctamente');
    } else if (method === "Crear Usuario") {
      setValuesD(data);
      setMethod("POST");
      toast.success('Producto creado correctamente');
    } else if (method === "Eliminar") {
      setId(id);
      setMethod("DELETE");
      toast.success('Producto eliminado correctamente');
    }
    setTimeout(() => {
      setMethod("GET");
      setValuesD(null);
      setId(null);
      setReloadCounter(prev => prev + 1);
    }, 1500);
  }

  return (
    <>
    <ToastContainer />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'usuarios' ? 'active' : ''}`} onClick={() => setActiveTab('usuarios')} >Usuarios</a>
        </li>
        {/* <li className="nav-item">
          <a className={`nav-link ${activeTab === 'contratos' ? 'active' : ''}`} onClick={() => setActiveTab('contratos')} >Contratos</a>
        </li> */}
      </ul>
      <div className="tab-content mt-3">
        {activeTab === 'usuarios' && (
          <div className="tab-pane fade show active">
            <div className="text-center mb-2">
            </div>
              <Usuarios
                //data={productosData}
                dataUsuario={data.data}
                usuariosLoading={data.loading}
                resivedData={hadleDataReceived}
              />
          </div>
        )}
        {activeTab === 'contratos' && (
          <div className="tab-pane fade show active">
            <div className="text-center mb-2">
            </div>
            <div class="card">
              <Contratos
                data={contratoData}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default UsersTab;