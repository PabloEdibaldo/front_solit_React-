import Table from "../../../components/Table";
import ModalCustom from '../../../components/Modal/Index';
import { useState } from "react";
function Historial({ data, loandingData, dataresived }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalClose = () => setIsModalOpen(false);
    const [producto, setProducto] = useState([]);
    const handleEdit = () => {
        setIsModalOpen(true);
    };
    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Nombre del producto", accessor: "nombre_producto" },
        { Header: "Codigo de barras", accessor: "codigo_barras" },
        {
            Header: "Acciones",
            accessor: "actions",
            Cell: ({ row }) => (
                <div className="btn-group" role="group">
                    <button
                        className="btn btn-transparent btn-sm"
                        onClick={() => {handleEdit(),setProducto(row.original)}}
                        title="Editar"
                    >
                        <i className="fas fa-eye"></i>
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="">
                <Table
                    columns={columns}
                    data={data}
                />
            </div>
            <>
                <ModalCustom
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    title="Historial"
                    content={
                        <>
                         {producto !== 0 ? (
                            <div class="table-responsive-sm">
                                <table className="table table-bordered table-striped table-hover" >
                                <thead>
                                    <tr>
                                        <th>Fecha y Hora</th>
                                        <th>Nombre solicitante</th>
                                    </tr>
                                </thead>    
                                    <tbody>
                                        {producto.historial?.historial.map((i, index) => (
                                            <tr key={index}>
                                                <td>{i.fecha}</td>
                                                <td>{i.nombre_solicitante}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : null}
                        </>
                    }
                />
            </>
        </>
    );
}
export default Historial;

// Modales //
//     const { isOpen, onOpen, onOpenChange } = useDisclosure();
//     const { isOpen: isOpenModalEliminar, onOpen: onOpenModalEliminar, onOpenChange: onOpenChangeModalEliminar } = useDisclosure();
//     const { isOpen: isOpenModalEditar, onOpen: onOpenModalEditar, onOpenChange: onOpenChangeModalEditar } = useDisclosure();
//     const { isOpen: isOpenModalAsignar, onOpen: onOpenModalAsignar, onOpenChange: onOpenChangeModalAsignar } = useDisclosure();
//     const { isOpen: isOpenModalAgregar, onOpen: onOpenModalAgregar, onOpenChange: onOpenChangeModalAgregar } = useDisclosure();
//     //Variables//
//     const [producto, setProducto] = useState([]);

//     useEffect(() => {

//     }, []);

//     const Eliminar = () =>{
//         dataresived()
//     }
//
//     console.log(producto);
//     const initialVisibleColumns = [
//         "id",
//         "nombre_producto",
//         "acciones",
//         "actions",
//     ];
//     return (
//         <>
//             {loandingData ? (
//                 <div className="flex items-center justify-center">
//                     <Spinner color="secondary" size="lg" label="Cargando...." />
//                 </div>
//             ) : (
//                 <Tables
//                     columns={columns}
//                     users={data}
//                     initialVisibleColumns={initialVisibleColumns}
//                     filterField={"nombre_producto"}
//                 >
//                 </Tables>)}
//             <Modal
//                 title=" "
//                 content={
//                     <>
//                         {producto !== 0 ? (
//                             <div className="flex flex-col w-full">
//                                 <Table aria-label="Lista de productos">
//                                     <TableHeader>
//                                         <TableColumn>Fecha</TableColumn>
//                                         <TableColumn>Nombre solicitante</TableColumn>
//                                     </TableHeader>
//                                     <TableBody>
//                                         {producto.historial?.historial.map((i, index) => (
//                                             <TableRow key={index}>
//                                                 <TableCell>{i.fecha}</TableCell>
//                                                 <TableCell>{i.nombre_solicitante}</TableCell>
//                                             </TableRow>
//                                         ))}
//                                     </TableBody>
//                                 </Table>
//                             </div>
//                         ) : null}
//                     </>
//                 }
//                 onClose={onOpenChange}
//                 isOpen={isOpen}
//                 size={"lg"}
//             />
//             <Modal
//                 title="¿Estas seguro de eliminar este registro?"
//                 content={
//                     <>

//                     </>
//                 }
//                 onClose={onOpenChangeModalEliminar}
//                 isOpen={isOpenModalEliminar}
//                 size={"sm"}
//                 buttonActions={(
//                     <>
//                     <Button color='danger' onPress={onOpenChangeModalEliminar}>
//                         Cancelar
//                     </Button>
//                     <Button color='success'>
//                         Aceptar
//                     </Button>
//                     </>
//                 )}
//             />
//         </>
//     )
// }

// export default Historial;
