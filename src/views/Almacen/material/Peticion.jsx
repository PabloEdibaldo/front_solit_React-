import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import useApiRequest from "../../../hooks/useApiRequest";
import ModalCustom from '../../../components/Modal/Index';
import config from '../../../api/apiConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer, toast } from 'react-toastify';

function Peticion({ dataUser }) {
    const [material, setMaterial] = useState({});
    const [cantidad, setCantidad] = useState(0);
    const [productos, setProductos] = useState([]);
    const [miLista, setMiLista] = useState([]);
    const [swtches, setSwtches] = useState([]);
    const [nombreCliente, setNombreCliente] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenSolicitar, setIsModalOpenSolicitar] = useState(false);
    const [categoriasExistentes, setCategoriasExistentes] = useState([]);
    const [productosPorCategoria, setProductosPorCategoria] = useState({});
    const [checkedItems, setCheckedItems] = useState({});
    const [isModalPedidoOpen, setIsModalPedidoOpen] = useState(false);
    const [recargarVista, setrecargarVista] = useState(0);
    const [idZona, setIdZona] = useState(null);
    const [method, setMethod] = useState(null);
    const [valuesD, setValuesD] = useState(null);
    const [recarga, setRecarga] = useState(0);
    const datas = useApiRequest(config.endpoints.productos.url, "GET", null, null, recargarVista);
    const dataZona = useApiRequest(config.endpoints.zonasTrabajo.url, "GET", null, null, null);
    const reparto = useApiRequest(config.endpoints.reparto.url, method, valuesD, null, recarga,);
    const ZoneOptions = dataZona.data.map(zona => ({ value: zona.id, label: zona.zona }));
    const [isActivo, setIsActivo] = useState(false);
    const [materialOrIntala, setMaterialOrIntala] = useState("");

    useEffect(() => {
        console.log(datas.data);
        if (datas.data.length) {
            const filteredProductos = datas.data.filter(producto => producto.stock > producto.stock_minimo);
            setProductos(filteredProductos.map(producto => ({
                id: producto.id,
                nombreProducto: producto.nombre_producto,
                categoria: producto.categoria,
                modelo: producto.modelo,
                idInterno: producto.codigoInterno,
                descripcion: producto.observaciones,
                area: producto.zona,
                prestamo: producto.productoParaPrestar
            })));
            setTimeout(() => {
                setIsActivo(true);
            }, 3000);
        }
    }, [datas.data]);

    const handleFirts = () => {
        if (productos.length) {
            const separarCategoria = [];
            const categoriaYProducto = [];
            productos.forEach(producto => {
                if (!productosPorCategoria[producto.categoria]) {
                    productosPorCategoria[producto.categoria] = [];
                }
                if (producto.categoria !== null) {
                    productosPorCategoria[producto.categoria].push(producto);
                }
            });
            for (const categoria in productosPorCategoria) {
                if (categoria !== 'null' && productosPorCategoria.hasOwnProperty(categoria)) {
                    separarCategoria.push(`${categoria}`);
                    categoriaYProducto.push(productosPorCategoria[categoria]);
                }
            }
            setSwtches(separarCategoria);
        }
    };

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
        if (checked) {
            handleSelected(name);
        } else {
            handleNoSelected(name);
        }
    };

    const hadleChangeCliente = (event) => { setNombreCliente(event.target.value) }
    const hadleChangeUso = (event) => { setDescripcion(event.target.value) }

    const handleSelected = (element) => {
        const dataRecuperada = categoriasExistentes;
        productos.forEach(item => {
            if (item.categoria === element) {
                dataRecuperada.push(item);
            }
        });
        setCategoriasExistentes(dataRecuperada);
    };

    const handleNoSelected = (element) => {
        const nuevaListaCategorias = categoriasExistentes.filter(item => item.categoria !== element);
        setCategoriasExistentes(nuevaListaCategorias);
    };

    const handleCantidadChange = (event) => {
        setCantidad(parseInt(event.target.value));
    };

    const hadleResetear = () => {
        setIdZona(null);
        setMiLista([]);
        setDescripcion(null);
        setNombreCliente(null);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success(`Se agrego ${material.nombre} a tu lista de pedidos`);
        const objeto = {
            id_producto: material.id_producto,
            id: Date.now(),
            nombre: material.nombre,
            unidades: cantidad,
            modelo: material.modelo,
            idInterno: material.idInterno,
            prestamo: material.prestamo,
            categoria: material.categoria,
            observaciones: material.observaciones
        };
        setMiLista([...miLista, objeto]);
        setMaterial({});
        handleModalClose(false);
        setCantidad(0);
    };

    const handleEnviarPedido = () => {
        const datosJson = {
            producto_cantidad: { productos: miLista },
            nombre_solicitante: dataUser.nombre_completo,
            idSolicitante: dataUser.id,
            nombreCliente: nombreCliente,
            TipoUsio: descripcion,
            id_zona: idZona
        };

        setValuesD(datosJson);
        setMethod("POST");
        setRecarga(recarga + 1);
        hadleResetear();
        toast.success('Pedido realizado correctamente');
        setTimeout(() => {
            setMethod("GET");
        }, 1500);
    };

    const handleModalClose = () => {
        setIsModalPedidoOpen(false);
        setIsModalOpen(false);
        setIsModalOpenSolicitar(false);
    };

    const hadleRecarga = () => {
        setrecargarVista(recargarVista + 1);
        setIsActivo(false);
    }

    return (
        <div>
            <ToastContainer />
            {isActivo ? (
                <>
                    <div className="mb-3 d-flex gap-3">
                        <button type="button" class="btn btn-success" onClick={() => setIsModalOpen(true)}>
                            Finalizar Pedido..
                        </button>
                        <button class="btn btn-danger" onClick={() => hadleResetear()}>
                            Resetear Pedido..
                        </button>
                        <button class="btn btn-secondary" onClick={handleFirts}>
                            Iniciar pedido..
                        </button>
                        <button class="btn btn-info" onClick={() => { hadleRecarga() }}>
                            Recargar..
                        </button>
                    </div>

                    <div className="card">
                        <div className="row">
                            {swtches.map((element, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name={element}
                                            id={`flexCheck${index}`}
                                            checked={checkedItems[element] || false}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={`flexCheck${index}`}>
                                            {element}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div class="mt-5 mb-3">
                        <div class="row">
                            {categoriasExistentes.map((item, index) => (
                                <div class="col-md-2" key={index}>
                                    <div class="card p-3 mb-2 h-100">
                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex flex-row align-items-center">
                                                <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                                                <div class="ms-2 c-details">
                                                    <h6 class="mb-0">Modelo: {item.modelo || "Modelo desconocido"}</h6>
                                                    <span>Id: {item.idInterno || "Material sin codigo"}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-5 card-content">
                                            <h5 class="heading">Nombre: {item.nombreProducto}</h5>
                                            <strong>Categoria:</strong> {item.categoria}<br />
                                            <strong>Descripcion:</strong> <span class="description">{item.descripcion}</span><br />
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex justify-content-end">
                                                <button
                                                    type="button" class="btn btn-success"
                                                    onClick={() => {
                                                        setIsModalOpenSolicitar(true);
                                                        setMaterial({
                                                            idInterno: item.idInterno,
                                                            nombre: item.nombreProducto,
                                                            modelo: item.modelo,
                                                            id_producto: item.id,
                                                            prestamo: item.prestamo,
                                                            area: item.area,
                                                            observaciones: item.descripcion,
                                                            categoria: item.categoria
                                                        });
                                                    }}
                                                >
                                                    Solicitar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (<div className='text-center'>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>)}

            <ModalCustom
                isOpen={isModalOpenSolicitar}
                onClose={handleModalClose}
                title="Solicitar Producto"
                content={
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="materialCantidad" className="form-label">Id:</label>
                                <input type="number" className="form-control" id="materialCantidad" disabled value={material.id_producto} min="0" max="10" onChange={handleCantidadChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="materialNombre" className="form-label">Nombre:</label>
                                <input type="text" className="form-control" id="materialNombre" value={material.nombre} disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="materialModelo" className="form-label">Modelo:</label>
                                <input type="text" className="form-control" id="materialModelo" value={material.modelo} disabled />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="materialCantidad" className="form-label">Cantidad:</label>
                                <input type="number" className="form-control" id="materialCantidad" value={cantidad} min="0" max="10" onChange={handleCantidadChange} />
                            </div>
                            <div className="mb-3">
                                <input type="hidden" className="form-control" id="materialCantidad" value={material.prestamo} />
                                <input type="hidden" className="form-control" id="materialCantidad" value={material.area} />
                                <input type="hidden" className="form-control" id="materialCantidad" value={material.observaciones} />
                                <input type="hidden" className="form-control" id="materialCantidad" value={material.categoria} />
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <button type="submit" class="btn btn-success" disabled={!cantidad} >
                                    Aceptar
                                </button>
                            </div>
                        </form>
                    </>
                }
            />
            <ModalCustom
                title="Resumen del pedido"
                isOpen={isModalOpen}
                onClose={handleModalClose}
                content={
                    <>
                        {miLista.length !== 0 ? (
                            <>
                                <div className="">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" onClick={() => { setMaterialOrIntala("materialZona") }} id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Material para zona
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" onClick={() => { setMaterialOrIntala("instalaciones") }} id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Instalaciones / Soportes
                                        </label>
                                    </div>
                                    {materialOrIntala === 'materialZona' && (
                                        <>
                                            <label htmlFor="zonaSelect" className="form-label">Seleccionar zona</label>
                                            <Select
                                                className='mb-2'
                                                name="type_service"
                                                options={ZoneOptions}
                                                onChange={(selectedOption) => { setIdZona(selectedOption.value) }}
                                            />
                                        </>)}
                                    {materialOrIntala === 'instalaciones' && (
                                        <>
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="inputGroup-sizing-default">Nombre del cliente</span>
                                                <input type="text" class="form-control" aria-label="Sizing example input" onChange={hadleChangeCliente} value={nombreCliente} aria-describedby="inputGroup-sizing-default" required />
                                            </div>
                                            <div class="input-group mb-2">
                                                <span class="input-group-text" id="inputGroup-sizing-default">Descripcion / Uso</span>
                                                <input type="text" class="form-control" aria-label="Sizing example input" onChange={hadleChangeUso} value={descripcion} aria-describedby="inputGroup-sizing-default" required />
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div>
                                    <ul className="list-group">
                                        {miLista.map((item, index) => (
                                            <li key={index} className="list-group-item">
                                                <strong>Nombre:</strong> {item.nombre}<br />
                                                <strong>Modelo:</strong> {item.modelo}<br />
                                                <strong>Cantidad:</strong> {item.unidades}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <p className="text-muted text-center">¡No se ha seleccionado ningún material!</p>
                        )}
                    </>
                }
                footer={
                    <>
                        <button type="button" class="btn btn-danger" onClick={handleModalClose}>Cerrar</button>
                        <button type="button" class="btn btn-success" disabled={false} onClick={() => { handleEnviarPedido(); handleModalClose(); }}>Aceptar</button>
                    </>
                }
            />
        </div>
    );
}
export default Peticion;