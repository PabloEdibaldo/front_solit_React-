import Table from '../../../../components/Table';
import config from "../../../../api/apiConfig";
import useApiRequest from "../../../../hooks/useApiRequest";
import ModalCustom from "../../../../components/Modal/Index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
const ProductosPrestados = ({ productos }) => {
    const [recarga, setRecarga] = useState(0);
    const [recargaEliminar, setRecargaEliminar] = useState(0);
    const [ProductoDevolver, setProductoDevolver] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [usuario, setUsuario] = useState([]);
    const [nombreUsuario, setNombreUsuario]=useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [method, setMethod] = useState(null);
    const [values, setValues] = useState(null);
    const [id, setId] = useState(null);
    const [idEliminar, setIdEliminar] = useState(null);
    const [methodEliminar, setMethodEliminar] = useState(null);
    const [recargaActualizar, setRecargaActualizar] = useState(0);
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user"));
        setUsuario(user);
    },[])

    const handleCerrarModal = () => {
        setIsModalOpen(false);
    }
    const data = useApiRequest(config.endpoints.productosPrestamo.url, "GET", null, null, recarga);
    const dato = useApiRequest(config.endpoints.productosPrestamo.url, methodEliminar, null, idEliminar, recargaEliminar);
    const productosActualizar = useApiRequest(config.endpoints.productos.url, method, values, id, recargaActualizar);

    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Nombre solicitante', accessor: 'nombre_solicitante' },
        { Header: 'Nombre del producto', accessor: 'nombre_producto' },
        { Header: 'Codigo Interno', accessor: 'codigoInterno' },
        { Header: 'Categoria', accessor: 'categoria' },
        { Header: 'Fecha de ingreso', accessor: 'fecha_ingreso' },
        { Header: 'Marca', accessor: 'marca' },
        { Header: 'Modelo', accessor: 'modelo' },
        { Header: 'Observaciones', accessor: 'observaciones' },
        { Header: 'Zona', accessor: 'zona' },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div className="btn-group" role="group">
                    <button
                        className="btn btn-transparent btn-sm"
                        title="Ingreso de producto"
                        onClick={() => { handleEncontrarProducto(row.original), setIdEliminar(row.original.id)}}
                    >
                        <i className="fas fa-reply"></i>
                    </button>
                </div>
            )
        }
    ];

    const handleEncontrarProducto = (data) => {
        const productoEncontrado = productos.find(item =>
            item.nombre_producto === data.nombre_producto &&
            item.marca === data.marca &&
            item.modelo === data.modelo &&
            item.observaciones === data.observaciones
        );
        if (productoEncontrado) {
            setProductoDevolver(productoEncontrado);
            setIsModalOpen(true);
        } else {
            toast.error('El producto no se encontro en almacen o fue editado');
            setProductoDevolver([]);
        }
    }

    const handleVerificar = (event) =>{
        setNombreUsuario(event.target.value);
        if(usuario.nombre_completo === event.target.value){
            setIsDisabled(false);
        }else{
            setIsDisabled(true);
        }
    }
    
    const hadlePeticiones = () =>{
        setNombreUsuario(null);
        handleActualizarProductos();
        handleEliminarRegistro();
        handleCerrarModal();

    }

    const handleActualizarProductos = () =>{
        const nuevoProducto = { ...ProductoDevolver };// Eliminar la propiedad id si existe
        if (nuevoProducto.id) {
            setId(nuevoProducto.id);
            delete nuevoProducto.id;
        }
        if (nuevoProducto.stock !== undefined) {// Incrementar el stock en 1 si existe
            nuevoProducto.stock += 1;
        }
        setValues(nuevoProducto);
        setMethod("PUT");
        setRecargaActualizar(recargaActualizar + 1);
        toast.success('El producto fue agregado correctamente');
    }

    const handleEliminarRegistro = () =>{
        setMethodEliminar("DELETE");
        setRecargaEliminar(recargaEliminar + 1);
        setTimeout(() => {
            setRecarga(prev => prev + 1);
            toast.info('Registro eliminado');
        }, 1500);
    }

    const resetear = () =>{
        setId(null);
        setIdEliminar(null);
        setMethod(null);
        setMethodEliminar(null);
        
    }

    return (
        <>
            <ToastContainer />
            <Table
                data={data.data}
                columns={columns}
            />
            <ModalCustom
                isOpen={isModalOpen}
                onClose={handleCerrarModal}
                title="Ingreso de producto"
                content={<>
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-primary text-center mb-2">Datos del producto</li>
                    </ul>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row">ID del producto</th>
                                <td>{ProductoDevolver.id}</td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre del producto</th>
                                <td>{ProductoDevolver.nombre_producto}</td>
                            </tr>
                            <tr>
                                <th scope="row">Marca</th>
                                <td>{ProductoDevolver.marca}</td>
                            </tr>
                            <tr>
                                <th scope="row">Modelo</th>
                                <td>{ProductoDevolver.modelo}</td>
                            </tr>
                            <tr>
                                <th scope="row">Observaciones</th>
                                <td>{ProductoDevolver.observaciones}</td>
                            </tr>
                            <tr>
                                <th scope="row">Stock Actual</th>
                                <td>{ProductoDevolver.stock}</td>
                            </tr>
                            <tr>
                                <th scope="row">Zona</th>
                                <td>{ProductoDevolver.zona}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Escribe tu nombre de usuario para continuar...</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={handleVerificar} value={nombreUsuario} />
                    </div>
                </>}
                footer={<>
                    <button className='btn btn-success' disabled={isDisabled}  onClick={() => { hadlePeticiones()}}>
                        Ingresar
                    </button>
                </>}
            />
        </>
    )
}
export default ProductosPrestados;

//  <ul class="list-group list-group-horizontal">
// <li class="list-group-item">ID del producto:</li>
// <li class="list-group-item">{ProductoDevolver.id}</li>
// </ul>
// <ul class="list-group list-group-horizontal">
// <li class="list-group-item">Nombre del producto:</li>
// <li class="list-group-item">{ProductoDevolver.nombre_producto}</li>
// </ul>
// <ul class="list-group list-group-horizontal-sm">
// <li class="list-group-item">Marca:</li>
// <li class="list-group-item">{ProductoDevolver.marca}</li>
// </ul>
// <ul class="list-group list-group-horizontal-md">
// <li class="list-group-item">Modelo:</li>
// <li class="list-group-item">{ProductoDevolver.modelo}</li>
// </ul>
// <ul class="list-group list-group-horizontal-lg">
// <li class="list-group-item">Observaciones:</li>
// <li class="list-group-item">{ProductoDevolver.observaciones}</li>
// </ul>
// <ul class="list-group list-group-horizontal-xl">
// <li class="list-group-item">Stock Actual</li>
// <li class="list-group-item">{ProductoDevolver.stock}</li>
// </ul>