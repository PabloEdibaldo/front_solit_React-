import { useEffect, useState } from "react";
import Products from './Products';
import PrductosIndivi from './ProductosIndividuales';
import Merma from './ProductosMerma';
import Carrete from './ProductosCarretes';
import Zonas from "./Zonas";
import useApiRequest from "../../../hooks/useApiRequest";
import config from "../../../api/apiConfig";
import AsignarProducto from "./AsignarProducto";
import PdfSyscom from "../Pdf/Index";
import ApiConfigProcuct from '../../../api/apiConfig.json'
import ProductosPrestados from "./ProductoPrestados/Index";
import Material from "../material/Material"
function ProductsTab() {
  const [activeTab, setActiveTab] = useState('productos');

  // Métodos
  const [methodProducto, setMethodProduct] = useState("GET");
  const [methodZona, setMethodZona] = useState("GET");
  const [methodProductoIndividual, setMethodProductoIndividual] = useState(null);
  const [methodProductoMerma, setMethodProductoMerma] = useState("GET");
  const [methodCarrete, setMethodCarrete] = useState("GET");
  const [methodPdf, setMethodPdf] = useState(null);
  const [methodDevolucion, setMethodDevolucion] = useState(null);
  const [methodCodigos, setMethodCodigos] = useState(null);
  // IDs
  const [id, setId] = useState(null);
  const [idZona, setIdZona] = useState(null);
  const [idProductoIndi, setIdProductoIndi] = useState(null);
  const [idMerma, setIdMerma] = useState(null);
  const [idCarrete, setIdCarrete] = useState(null);
  // Actualizar API
  const [reloadCounter, setReloadCounter] = useState(0);
  const [recargaIndi, setCargaIndi] = useState(0);
  const [recargaMerma, setRecargaMerma] = useState(0);
  const [recargaCarrete, setRecargaCarrete] = useState(0);
  // Variables
  const [valuesProducto, setValuesProducto] = useState(null);
  const [valuesZona, setValuesZona] = useState(null);
  const [valuesProductoIndi, setValuesProductoIndi] = useState(null);
  const [valuesMerma, setValuesMerma] = useState(null);
  const [valuesCarrete, setValuesCarrete] = useState(null);
  const [valuesPdf, setValuesPdf] = useState(null);
  const [valuesDevolucion, setValuesDevolucion] = useState(null);
  const [valuesCodigos, setValuesCodigos] = useState(null);
  // Data
  const [productosMerma, setProductosMerma] = useState(null);
  const [productosCarretes, setProductosCarretes] = useState(null);
  // // API Usuarios
  const { data: usuarioData, loading: usuarioLoading, error: usuarioError } = useApiRequest(config.endpoints.usuarios.url, "GET", null, null, null);
  // API Productos
  const { data: response, loading: cargaProduct, error: e } = useApiRequest(config.endpoints.productos.url, methodProducto, valuesProducto, id, reloadCounter);
  // API Productos Individuales
  const { data: responseIndi, loading: cargaIndi, error: indiError } = useApiRequest(config.endpoints.productos_individuales.url, "GET", null, null, recargaIndi);
  // // API Producto Merma
  const { data: responseMerma, loading: cargaMerma, error: mermaError } = useApiRequest(config.endpoints.merma.url, methodProductoMerma, valuesMerma, idMerma, recargaMerma);
  // // API Carretes
  const { data: responseCarrete, loading: cargaCarrete, error: carreteError } = useApiRequest(config.endpoints.carretes.url, methodCarrete, valuesCarrete, idCarrete, recargaCarrete);
  // // API PDF
  const pdf = useApiRequest(config.endpoints.pdf.post, methodPdf, valuesPdf, null, null, true);
  // // API Zonas
  const { data: zona, loading: zonaLoading, error: zonaError } = useApiRequest(config.endpoints.zonasTrabajo.url, methodZona, valuesZona, idZona, null);
  // Api devolucion //
  const devolucion =  useApiRequest(config.endpoints.devolucion.url,methodDevolucion,valuesDevolucion,null,null);
  // zonas trabajo//
  const zonasProducto = useApiRequest(`${ApiConfigProcuct.apiBaseURL}${ApiConfigProcuct.endpoints.zonaAlmacen.get}`, "GET", null, null, null);
  //api codigos //
  const codigos = useApiRequest(config.endpoints.productoPorCodigoDeBarras.url,methodCodigos,valuesCodigos, null,null);

  const hadleDataReceived = (dato, method, id) => {    
    if (method === "Actualizar Producto") {
      setValuesProducto(dato);
      setId(id);
      setMethodProduct("PUT");
    } else if (method === "Crear Producto") {
      setValuesProducto(dato);
      setMethodProduct("POST");
    } else if (method === "Eliminar Producto") {
      setId(id);
      setMethodProduct("DELETE");
    } else if (method === "Entrada"){
      setMethodDevolucion("POST");
      setValuesDevolucion(dato);
    } else if (method === "Codigos"){
      setMethodCodigos("POST");
      setValuesCodigos(dato);
    }
    setTimeout(() => {
      setReloadCounter(prev => prev + 1);
      setMethodProduct("GET");
    }, 1500);
  };

  const hadlePdf = (data) => {
    setMethodPdf("POST1");
    setValuesPdf(data);
    setTimeout(() => {
      setReloadCounter(prev => prev + 1);
      setMethodProduct("GET");
    }, 1000);
  };

  const hadleDataReceivedProductoIndividual = (dato, method, id) => {
    if (method === "Actualizar Producto" || method === "Producto Merma") {
      setValuesProductoIndi(dato);
      setIdProductoIndi(id);
      setMethodProductoIndividual("PUT");
    }
    setTimeout(() => {
      setCargaIndi(prev => prev + 1);
    }, 1000);
  };

  const hadleDataReceivedProductoMerma = (dato, method, id) => {
     if (method === "Actualizar") {
       setValuesMerma(dato);
       setIdMerma(id);
       setMethodProductoMerma("PUT");
     }
    setTimeout(() => {
      setMethodProductoMerma("GET");
    }, 1000);
  };

  const hadleDataReceivedCarrete = (dato, method, id) => {
    if (method === "Actualizar") {
      setValuesCarrete(dato);
      setIdCarrete(id);
      setMethodCarrete("PUT");
    }
    setTimeout(() => {
      setMethodCarrete("GET");
    }, 1000);
  };

  const hadleRecarga = (data) => {
    if (data === "producto") {
      setReloadCounter(prev => prev + 1);
    } else if (data === "productoIndividual") {
      setCargaIndi(prev => prev + 1);
    } else if (data === "productoMerma") {
      setRecargaMerma(prev => prev + 1);
    } else if (data === "productoCarrete") {
      setRecargaCarrete(prev => prev + 1);
    }
  };

  const hadleResivedZonas = (data, method, id) => {
     if (method === "Actualizar") {
       setValuesZona(data);
       setIdZona(id);
       setMethodZona("PUT");
     } else if (method === "Crear") {
       setValuesZona(data);
       setMethodZona("POST");
     } else if (method === "Eliminar") {
       setIdZona(id);
       setMethodZona("DELETE");
     }
     setTimeout(() => {
       setMethodZona("GET");
     }, 1000);
  }

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'productos' ? 'active' : ''}`} onClick={() => setActiveTab('productos')} >Productos</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'productosIndividuales' ? 'active' : ''}`} onClick={() => setActiveTab('productosIndividuales')} >Productos Individuales</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'merma' ? 'active' : ''}`} onClick={() => setActiveTab('merma')} >Merma</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'carretes' ? 'active' : ''}`} onClick={() => setActiveTab('carretes')} >Carretes</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'zonas' ? 'active' : ''}`} onClick={() => setActiveTab('zonas')} >Zonas</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'asignar' ? 'active' : ''}`} onClick={() => setActiveTab('asignar')} >Asignar Productos</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'subirPdf' ? 'active' : ''}`} onClick={() => setActiveTab('subirPdf')} >PDF subidos</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'productosPrestados' ? 'active' : ''}`} onClick={() => setActiveTab('productosPrestados')} >Entrada de productos</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeTab === 'AutorizarProductos' ? 'active' : ''}`} onClick={() => setActiveTab('AutorizarProductos')} >Autorizar Productos</a>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {activeTab === 'productos' && (
          <div className="tab-pane fade show active">
              <Products
                data={response}
                resivedData={hadleDataReceived}
                pdf={hadlePdf}
                zonasProducto={zonasProducto}
                response={pdf}
                user={usuarioData}
              />
          </div>
        )}
        {activeTab === 'productosIndividuales' && (
          <div className="tab-pane fade show active">
              <PrductosIndivi
                datos={responseIndi}
                loading={cargaIndi}
                resivedData={hadleDataReceivedProductoIndividual}
                recarga={hadleRecarga}
              />
          </div>
        )}
        {activeTab === 'merma' && (
          <div className="tab-pane fade show active">
              <Merma
                data={responseMerma}
                loading={cargaMerma}
                resivedData={hadleDataReceivedProductoMerma}
                recarga={hadleRecarga}
              />
          </div>
        )}
        {activeTab === 'carretes' && (
          <div className="tab-pane fade show active">
              <Carrete
                datos={responseCarrete}
                loading={cargaCarrete}
                resivedData={hadleDataReceivedCarrete}
                recarga={hadleRecarga}
              />
          </div>
        )}
        {activeTab === 'zonas' && (
          <div className="tab-pane fade show active">
            <Zonas
              datas={zona}             
              resivedData={hadleResivedZonas}
            />
          </div>
        )}
        {activeTab === 'asignar' && (
          <div className="tab-pane fade show active">
            <AsignarProducto
              dataUser={usuarioData}
            />
          </div>
        )}
        {activeTab === 'subirPdf' && (
          <div className="tab-pane fade show active">
            <PdfSyscom
              
            />
          </div>
        )}
        {activeTab === 'productosPrestados' && (
          <div className="tab-pane fade show active">
           <ProductosPrestados
            productos={response}
           />
          </div>
        )}
        {activeTab === 'AutorizarProductos' && (
          <div className="tab-pane fade show active">
           <Material            
           />
          </div>
        )}
      </div>
    </div>
  );
}
export default ProductsTab;