
import { useState, useEffect } from "react";
import useApiRequest from "../../../hooks/useApiRequest";
import apiConfig from "../../../api/apiConfig.json";
import Tables from "../../../components/Table";
import Modal from "../../../components/Modal";
import Create from "../components/CreateEdit";
import EditIcon from '@mui/icons-material/Edit';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
//import { encontrarData, encontrarEditar, encontrarDataMayor, sustituirData, encontrarProducto } from "./logica";
import { useDisclosure, Button, Card, Tab, Tabs, CardBody, Spinner } from "@nextui-org/react";
//import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const Alertas = () => {
    // Modales //
    const { isOpen: isOpenModalUsuario, onOpen: onOpenModalUsuario, onOpenChange: onOpenChangeModalUsuario } = useDisclosure();
    const { isOpen: isOpenModalEditar, onOpen: onOpenModalEditar, onOpenChange: onOpenChangeModalEditar } = useDisclosure();
    const { isOpen: isOpenModalProducto, onOpen: onOpenModalProducto, onOpenChange: onOpenChangeModalProducto } = useDisclosure();
    // Id //
    const [id, setId] = useState(null);
    const [idAlerta, setIdAlerta] = useState(null);
    // Endpoints //
    const [endpointAlerta, setEndPointAlerta] = useState(apiConfig.endpoints.almacenAlerta.get);
    // Metodos //
    const [method, setMethod] = useState("GET");
    const [methodUsuarios, setMethodUsuarios] = useState("GET");
    // Variables //
    const [valuesD, setValuesD] = useState(null);
    const [selected, setSelected] = useState("login");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [reloadCounter, setReloadCounter] = useState(0);
    const [editAlerta, setAlerta] = useState("");
    // Arreglos //
    const [result, setResult] = useState([]);
    const [usuarioUnitario, setUsuarioUnitario] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [dato, setDato] = useState([]);
    const [datoProducto, setDatoProducto] = useState([]);
    const [productoIndividual, setProductoIndividual] = useState([]);
    const [products, setProducts] = useState([]);
    // LLamadas Api //
    const { data: alerta, loading: alertaLoading, error: alertaError } = useApiRequest(`${apiConfig.apiBaseURL}${endpointAlerta}`, method, valuesD, id, reloadCounter);
    

    useEffect(() => {

        if (endpointAlerta === "almacenAlerta/" && method === "GET") {
            setProducts(alerta);
        }
    }, [alerta]);

    const hadleOkOrNot = (response) => {
        if (response) {
            onOpenChange();
        }
    }

    const hadleDataReceived = (data) => {
        if (editCarrete === 'Actualizar Carrete') {
            setEndPointCarretes(apiConfig.endpoints.carretes.get)
            setId(idCarretes);
            setMethod("PUT");
            setValuesD(data);
            setProducts(sustituirData(products, idCarretes, data));
        }
    }

    const formFields = [
        { label: "Metraje Inicial", type: "number", name: "metraje_inicial", isRequired: true, isDisabled: false },
        { label: "Metraje Usado", type: "number", name: "metraje_usado", isRequired: true },
        { label: "Identificador de Producto", type: "text", name: "id_producto_individual", isRequired: true, isDisabled: true },
        { label: "Selecciona un usuario", type: "select", name: "id_usuario", isRequired: true, options: usuarioUnitario }
    ];

    const columns = [
        { name: "ID", uid: "id", sortable: true },
        { name: "Nombre del producto", uid: "nombre_producto", sortable: true },
        { name: "Stock actual", uid: "stock_actual", sortable: true },
    ];

    const initialVisibleColumns = [
        "id",
        "nombre_producto",
        "stock_actual"
    ];

    return (
        <>
            {alertaLoading ? (
                <div className="flex items-center justify-center">
                    <Spinner color="secondary" size="lg" label="Cargando...." />
                </div>
            ) : (
                <>
                    <Tables
                        columns={columns}
                        users={products}
                        initialVisibleColumns={initialVisibleColumns}
                        filterField={"metraje_inicial"}
                    >
                    </Tables>
                </>
            )}
        </>
    )
}
export default Alertas;

