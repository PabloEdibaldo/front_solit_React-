import React, { useEffect, useState } from 'react';
import Historial from "./Historial";
import useApiRequest from "../../../hooks/useApiRequest";
import config from '../../../api/apiConfig';
import UsoMaterial from './UsoMaterial';
function HistorialTab() {
  const [reloadCounter, setReloadCounter] = useState(0);
  const [method, setMethod] = useState(null);
  const [valuesD, setValuesD] = useState(null);
  const [id, setId] = useState(null);
  const [carga, setCarga] = useState(null);
  const { data: dataHistorico, loading: dataLoading, error: dataError } = useApiRequest(config.endpoints.historico.url, "GET", valuesD, id);
  const historial = useApiRequest(config.endpoints.usoProductos.url,"GET",null,null,carga);
  const [activeTab, setActiveTab] = useState('historial');
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "historial" ? "active" : ""}`}
            onClick={() => setActiveTab("historial")}
          >
            Historico
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "material" ? "active" : ""}`}
            onClick={() => setActiveTab("material")}
          >
            Historial Material
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {activeTab === 'historial' && (
          <div className="tab-pane fade show active">
            <div className="text-center mb-2">
            </div>
            <div className="card">
              <Historial
                data={dataHistorico}
                loandingData={dataLoading}
              //dataResived={hadleResibir}
              />
            </div>
          </div>
        )}
        {activeTab === 'material' && (
          <div className="tab-pane fade show active">
            <div className="text-center mb-2">
            </div>
            <div className="card">
              <UsoMaterial
              data={historial.data}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default HistorialTab;