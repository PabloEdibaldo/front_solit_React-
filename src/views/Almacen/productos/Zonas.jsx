import Table from '../../../components/Table';
import ModalCustom from '../../../components/Modal/Index';
import InputsData from '../components/CreateEdit/';
import { useState } from 'react';
const Zonas = ({ datas, resivedData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [idEliminar, setIdEliminar] = useState(null);
    const [isEliminar, setIsEliminar] = useState(false);
    const handleModalClose = () => setIsModalOpen(false);

    const columns = [
        { Header: 'id', accessor: 'id' },
        { Header: 'Zona', accessor: 'zona' },
        { Header: 'Fraccionamiento', accessor: 'fraccionamiento' },
        { Header: 'Colonia', accessor: 'colona' },
        { Header: 'Junta auxiliar', accessor: 'juntaAuxiliar' },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div className="btn-group" role="group">
                    <button
                        className="btn btn-transparent btn-sm"
                        onClick={() => handleEdit(row.original)}
                        title="Editar"
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-transparent btn-sm"
                        onClick={() => { setIdEliminar(row.original.id), setIsEliminar(true) }}
                        title="Eliminar"
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            )
        }];
    const formFields = [
        { label: "Zona", type: "text", name: "zona", isRequired: true, isDisabled: false },
        { label: "Fraccionamiento", type: "text", name: "fraccionamiento", isRequired: true, isDisabled: false },
        { label: "Colonia", type: "text", name: "colona", isRequired: true, isDisabled: false },
        { label: "Junta Auxiliar", type: "text", name: "juntaAuxiliar", isRequired: true, isDisabled: false },
    ];
    const handleEdit = (product) => {
        setProductToEdit(product);
        setIsEditMode(true);
        setIsModalOpen(true);
    };
    const hadleDataReceived = (data) => {
        if (isEditMode) {
            resivedData(data, "Actualizar", productToEdit.id);
        } else {
            resivedData(data, "Crear", null);
        }
        setIsModalOpen(false);
    };
    const handleOkOrNot = (response) => {
        if (response) {
            handleModalClose();
        }
    };
    const handleModalOpen = () => {
        setProductToEdit(null);
        setIsEditMode(false);
        setIsModalOpen(true);
    };
    const handleDelete = () => {
        resivedData(null, "Eliminar", idEliminar);
    };

    return (
        <>
        <button onClick={handleModalOpen} className="btn btn-primary mb-2">Crear Zonas</button>
            <div className="">
                {isEliminar ? (<div class="alert alert-danger d-flex justify-content-between" role="alert">
                    ¿Estas seguro de eliminar este registro ?
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-success" onClick={() => { handleDelete(), setIsEliminar(false) }}>Aceptar</button>
                        <button type="button" class="btn btn-outline-danger" onClick={() => { setIsEliminar(false) }}>Cancelar</button>
                    </div>
                </div>) : (null)}
                <Table columns={columns} data={datas}/>
            </div>
            <>
                <ModalCustom
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    title={isEditMode ? "Editar Zona" : "Crear Zonas"}
                    content={
                        <InputsData
                            fields={formFields}
                            onDataReceived={hadleDataReceived}
                            dataToEdit={productToEdit || {}}
                            okOrNot={handleOkOrNot}
                        />
                    }
                />
            </>
        </>
    )
}
export default Zonas;
//     //variables//
//     const [material, setMaterial] = useState('');
//     const [cantidad, setCantidad] = useState(0);
//     const [modelo, setModelo] = useState('');
//     const [isActivo, setIsActivo] = useState(true);
//     const [mostrarZona, setMostrarZona] = useState(false);
//     const [usuario, setUsuario] = useState(null);
//     //arreglos//
//     const [productos, setProductos] = useState([]);
//     const [miLista, setMiLista] = useState([]);
//     const [swtches, setSwtches] = useState([]);
//     const [categoriasExistentes, setCategoriasExistentes] = useState([]);
//     //objetos//
//     const [productosPorCategoria, setProductosPorCategoria] = useState({});
//     const [checkedItems, setCheckedItems] = useState({});
//     //modales//
//     const { isOpen: isOpenModalPedido, onOpen: onOpenModalPedido, onOpenChange: onOpenChangeModalPedido } = useDisclosure();
//     const { isOpen: isOpenModalResumen, onOpen: onOpenModalResumen, onOpenChange: onOpenChangeModalResumen } = useDisclosure();
//     useEffect(() => {
//         if (datas.length) {
//             const filteredProductos = datas.filter(producto => producto.stock > producto.stock_minimo);
//             setProductos(filteredProductos.map(producto => ({
//                 "nombreProducto": producto.nombre_producto,
//                 "categoria": producto.categoria,
//                 "modelo": producto.modelo,
//                 "img": producto.imgProducto,
//                 "idInterno": producto.codigoInterno
//             })))
//         }
//     }, [datas])

//     const hadleFirts = () => {
//         if (productos.length) {
//             const separarCategoria = [];
//             const categoriaYProducto = [];
//             productos.forEach(producto => {
//                 if (!productosPorCategoria[producto.categoria]) {//Si no existe, crear un nuevo array para esa categoría
//                     productosPorCategoria[producto.categoria] = [];
//                 }
//                 if (producto.categoria !== null) {
//                     productosPorCategoria[producto.categoria].push(producto);
//                 }
//             })
//             for (const categoria in productosPorCategoria) {
//                 if (categoria !== 'null') {//no muestra los productos que no tenga categoria//
//                     if (productosPorCategoria.hasOwnProperty(categoria)) {
//                         separarCategoria.push(`${categoria}`);
//                         categoriaYProducto.push(productosPorCategoria[categoria]);
//                     }
//                 }
//             }
//             setSwtches(separarCategoria);
//         }
//     }
//     const handleChange = (event) => {
//         const { name, checked } = event.target;
//         setCheckedItems({ ...checkedItems, [name]: checked }); // Actualiza el estado de los elementos seleccionados
//         if (checked) {
//             handleSelected(name);
//         } else {
//             handleNoSelected(name);
//         }
//     };
//     const handleSelected = (element) => {
//         const dataRecuperada = categoriasExistentes;
//         productos.forEach(item => {
//             if (item.categoria === element) {
//                 dataRecuperada.push(item);
//             }
//         });
//         setCategoriasExistentes(dataRecuperada);
//     };
//     const handleNoSelected = (element) => {
//         const nuevaListaCategorias = categoriasExistentes.filter(item => item.categoria !== element);
//         setCategoriasExistentes(nuevaListaCategorias);
//     };
//     const handleMaterialChange = (event) => {
//         setMaterial(event.target.value);
//     };
//     const handleCantidadChange = (event) => {
//         setCantidad(parseInt(event.target.value));
//     };
//     const handleModeloChange = (event) => {
//         setModelo((event.target.value));
//     };
//     const handleChangeUsuario = (event) =>{
//        setUsuario(event.target.value);        
//     }; 
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const arreglo = miLista;
//         const objeto = { id: Date.now(), nombre: material.nombre, unidades: cantidad, modelo: material.modelo, idInterno: material.idInterno };
//         arreglo.push(objeto);
//         setMiLista(arreglo);
//     };
//     const hadleEnviarPedido = () => {
//         const UtilUser = user.filter(item => item.id === parseInt(usuario));
//         console.log(UtilUser);
//         const datosJson = {
//             producto_cantidad: { productos: miLista },
//             nombre_solicitante: UtilUser[0].nombre_completo,
//             id_usuario: UtilUser[0].id,
//         };
//         //resivedData(datosJson, "Crear Peticion", null);
//         setMiLista([]);
//         setMostrarZona(false);
//     }
//     return (
//         <div>
//             <div className="flex mb-3 gap-3">
//                 <Button color="success" onPress={onOpenChangeModalResumen}>
//                     Finalizar
//                 </Button>
//                 <Button color="danger" onClick={() => { setMiLista([]) }}>
//                     Resetear
//                 </Button>
//                 {isActivo ? (
//                     <Button color="secondary" onClick={() => { hadleFirts(), setIsActivo(false) }}>
//                         Iniciar Asignacion
//                     </Button>
//                 ) : null}
//             </div>
//             <Card className="bg-[#b4c4d8]">
//                 <div className="grid gap-1 cols-2">
//                     {swtches.map((element, index) => (
//                         <div key={index}>
//                             <Checkbox name={element} checked={checkedItems[element] || false} onChange={handleChange} >{element}</Checkbox>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="p-3 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//                     <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//                         {categoriasExistentes.map((item, index) => (
//                             <div key={index} className="w-full">
//                                 <Card className="h-full">
//                                     <CardHeader className="justify-between bg-[#A1A1AA]">
//                                         <div className="flex gap-3">
//                                             <div className="flex flex-col gap-1 items-start justify-center">
//                                                 <h4 className="text-small font-semibold leading-none text-default-800">Id: {item.idInterno ? item.idInterno : "Material sin codigo"}</h4>
//                                                 <h4 className="text-small font-semibold leading-none text-default-800">Nombre: {item.nombreProducto}</h4>
//                                                 <h4 className="text-small font-semibold leading-none text-default-800">Categoria: {item.categoria}</h4>
//                                                 <h4 className="text-small font-semibold leading-none text-default-800">Modelo: {item.modelo ? item.modelo : "Modelo desconocido"}</h4>
//                                             </div>
//                                         </div>
//                                     </CardHeader>
//                                     <CardBody className="px-8 py-0 text-small text-default-300 bg-[#0284C7]">
//                                         <Image
//                                             width={200}
//                                             height={250}
//                                             src={item.img ? item.img : Foto}
//                                             alt="NextUI hero Image"
//                                             className="m-3"
//                                         />
//                                     </CardBody>
//                                     <CardFooter className="bg-[#0284C7]">
//                                         <div className="flex justify-end">
//                                             <Button color="success" onPress={onOpenChangeModalPedido} onClick={() => { setMaterial({ nombre: item.nombreProducto, modelo: item.modelo, idInterno: item.idInterno }) }}>Solicitar</Button>
//                                         </div>
//                                     </CardFooter>
//                                 </Card>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <Modal
//                     title=""
//                     content={
//                         <>
//                             <Card>
//                                 <form onSubmit={handleSubmit}>
//                                     <CardBody className="flex">                                       
//                                             <Input type="text" value={material.nombre} disabled onChange={handleMaterialChange} variant="underlined" label="Nombre del producto:" />                                                                         
//                                             <Input type="text" value={material.modelo} disabled onChange={handleModeloChange} variant="underlined" label="Modelo:" />                                    
//                                             <Input type="number" min="0" onChange={handleCantidadChange} variant="underlined" label="Cantidad:" />
//                                     </CardBody>
//                                     <CardFooter className="flex justify-center ...">
//                                         <div >
//                                             <Button color="success" onPress={onOpenChangeModalPedido} type="submit" onClick={() => { setCantidad(0), setMaterial("") }}>
//                                                 Aceptar
//                                             </Button>
//                                         </div>
//                                     </CardFooter>
//                                 </form>
//                             </Card>
//                         </>
//                     }
//                     onClose={onOpenChangeModalPedido}
//                     isOpen={isOpenModalPedido}
//                     size={"lg"}
//                 />
//                 <Modal
//                     title="Resumen del pedido"
//                     content={
//                         <>
//                             <div className="mb-4">
//                                 {miLista.length !== 0 ? (
//                                     <>
//                                     <Checkbox onClick={()=>{setMostrarZona(!mostrarZona)}}>Mostrar zona</Checkbox>
//                                         <div className="flex justify-between ... mb-2 gap-2">
//                                             <Select
//                                                 items={user}
//                                                 label="Asignar Usuario:"
//                                                 variant="bordered"
//                                                 isMultiline={false}
//                                                 selectionMode="single"
//                                                 labelPlacement="outside"
//                                                 classNames={{
//                                                     base: "max-w-xs",
//                                                     trigger: "min-h-12 py-2",
//                                                 }}
//                                                 onChange={handleChangeUsuario}
//                                             >
//                                                 {(user) => (
//                                                     <SelectItem  key={user.id} value={user.nombre_completo} textValue={user.nombre_completo}>
//                                                         <div className="flex gap-2 items-center">
//                                                             <Avatar className="flex-shrink-0" size="sm" src={user.fotoPerfil} />
//                                                             <div className="flex flex-col">
//                                                                 <span className="text-small">{user.nombre_completo}</span>
//                                                                 <span className="text-tiny text-default-400">{user.correo_electronico}</span>
//                                                             </div>
//                                                         </div>
//                                                     </SelectItem>
//                                                 )}
//                                             </Select>
//                                             {mostrarZona ?(
//                                                 <Select
//                                                 label="Seleccionar Zona:"
//                                                 variant="bordered"
//                                                 isMultiline={false}
//                                                 selectionMode="single"
//                                                 labelPlacement="outside"
//                                                 classNames={{
//                                                     base: "max-w-xs",
//                                                     trigger: "min-h-12 py-2",
//                                                 }}
//                                             >
//                                                  {zona.map((zona) => (
//                                                     <SelectItem key={zona.id} value={zona.id}>
//                                                         {zona.zona}
//                                                     </SelectItem>
//                                                 ))} 
//                                             </Select>
//                                             ):null}
//                                             </div>
//                                         <Table aria-label="Lista de productos">
//                                             <TableHeader>
//                                                 <TableColumn>Nombre</TableColumn>
//                                                 <TableColumn>Modelo</TableColumn>
//                                                 <TableColumn>Cantidad</TableColumn>
//                                             </TableHeader>
//                                             <TableBody>
//                                                 {miLista.map((producto, index) => (
//                                                     <TableRow key={index}>
//                                                         <TableCell>{producto.nombre}</TableCell>
//                                                         <TableCell>{producto.modelo}</TableCell>
//                                                         <TableCell>{producto.unidades}</TableCell>
//                                                     </TableRow>
//                                                 ))}
//                                             </TableBody>
//                                         </Table>
//                                     </>
//                                 ) : (<p className="text-small font-semibold leading-none text-default-800">
//                                     ¡ No se a seleccionado ningun material !
//                                 </p>)}
//                             </div>
//                         </>
//                     }
//                     onClose={onOpenChangeModalResumen}
//                     isOpen={isOpenModalResumen}
//                     size={"lg"}
//                     buttonActions={
//                         <Button color="success" onPress={onOpenChangeModalResumen} onClick={() => { hadleEnviarPedido(), setIsActivo(true); }}>
//                             Realizar Pedido
//                         </Button>
//                     }
//                 />
//             </Card>
//         </div>
//     )
// }
// export default ProductoAsignado;