import useApiRequest from "../../../hooks/useApiRequest";
import config from "../../../api/apiConfig";
import NombrePdf from "./NombrePdf";

import { useState } from 'react';
const PdfSyscom = () => {
    const [activeTab, setActiveTab] = useState("nombrePdf");
    const [id, setId] = useState(null);
    const [method, setMethod] = useState("GET");
    const [methodPdf, setMethodPdf] = useState(null);
    const [valuesPdf, setValuesPdf] = useState(null);
    const [recarga, setRecarga] = useState(0);
    const [methodProducto, setMethodProducto] = useState(null);
    const [recargaProducto, setRecargaProducto] = useState(null);

    const nombre = useApiRequest(config.endpoints.nombrePdf.url, "GET", null, null, recarga);
    const productos = useApiRequest(config.endpoints.filtroPedido.url + id + "/", methodProducto, null, null, recargaProducto);
    const pdf = useApiRequest(config.endpoints.pedido.url, methodPdf, valuesPdf, null, null,true);


    const hadleResivida = (data) => {
        setValuesPdf(data);
        setMethodPdf("POST1")

        setTimeout(() => {
            setRecarga(prev => prev + 1);
        }, 2000);
    }

    const handleVerProductos = (data) =>{
        setId(data);
        setMethodProducto("GET");
        setRecargaProducto(prev => prev + 1);        
    }

    return (
        <>
            {activeTab === 'nombrePdf' && (
                <NombrePdf
                    data={nombre.data}
                    envio={handleVerProductos}
                    hadleResivir={hadleResivida}
                    response={productos.data}
                />
            )}
        </>
    )
}
export default PdfSyscom;