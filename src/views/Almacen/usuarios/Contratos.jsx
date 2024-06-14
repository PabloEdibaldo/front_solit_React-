// import { useState, useEffect, useMemo } from "react";
// import Tables from "../../../components/Table";
// import Modal from "../../../components/Modal";
// import { Dropdown, DropdownTrigger, DropdownMenu, useDisclosure, Button } from "@nextui-org/react";

 const Contratos = ({ data }) => {
    return(
        <>
        hola
        </>
        
    )
 }
export default Contratos;
//     const [contratos, setContratos] = useState([]);
//     const { isOpen: isOpenModalUsuario, onOpen: onOpenModalUsuario, onOpenChange: onOpenChangeModalUsuario } = useDisclosure();
//     const { isOpen: isOpenModalEditar, onOpen: onOpenModalEditar, onOpenChange: onOpenChangeModalEditar } = useDisclosure();
//     const { isOpen: isOpenModalProducto, onOpen: onOpenModalProducto, onOpenChange: onOpenChangeModalProducto } = useDisclosure();

//     useEffect(() => {
//         if(Array.isArray(data))
//             setContratos(data);
//     }, [data])

//     const initialVisibleColumns = [
//         "id",
//         "nombre_cliente",
//         "fecha_instalacion",
//         "tipo_servicio",
//         "nombre_instalador",
//         "direccion_cliente",
//         "observaciones",
//         "actions"
//     ];
    
//     const columns = [
//         { name: "ID", uid: "id", sortable: true },
//         { name: "Nombre del cliente", uid: "nombre_cliente", sortable: true },
//         { name: "Fecha Instalacion", uid: "fecha_instalacion", sortable: true },
//         { name: "Telefono cliente", uid: "tipo_servicio", sortable: true },
//         { name: "Nombre Instalador", uid: "nombre_instalador", sortable: true },
//         { name: "Direccion del cliente", uid: "direccion_cliente", sortable: true },
//         { name: "Observaciones", uid: "observaciones", sortable: true },

//         {
//             name: "Acciones",
//             uid: "actions",
//             sortable: false,
//             renderCell: (params) => (
//                 <div>
//                     <div className="relative flex items-center gap-2">
//                         <div className="tooltip">
//                             <Button
//                                 onClick={() => {
//                                     setCreateEdit('Actualizar Usuario');
//                                     setResult(encontrarEditar(usuarios, params.id));
//                                     setIdUsuarios(params.id);
//                                 }}
//                                 color="primary"
//                                 isIconOnly
//                                 onPress={onOpenModalEditar}
//                             >
//                                 <EditIcon fontSize="small" />
//                             </Button>
//                             <span className="tooltiptext">Editar</span>
//                         </div>
//                         <div className="tooltip">
//                             <Button
//                                 onClick={() => {
//                                 }}
//                                 color="success"
//                                 isIconOnly
//                                 onPress={onOpenModalProducto}
//                             >
//                                 <ConstructionIcon fontSize="small" />
//                             </Button>
//                             <span className="tooltiptext">Material</span>
//                         </div>
//                         <div className="tooltip">
//                             <Button
//                                 size="md"
//                                 variant="flat"
//                                 onClick={() => { setCreateEdit("IMG"), setIdDeleteOrEdit(params.id) }}
//                                 color="warning"
//                                 isIconOnly
//                                 onPress={onOpenChange}
//                             >
//                                 <ImageIcon />
//                             </Button>
//                             <span className="tooltiptext">Subir imagen</span>
//                         </div>
//                     </div>
//                 </div>
//             )
//         },
//     ];
//     return (
//         <div>
//             <Tables
//                 columns={columns}
//                 users={contratos}
//                 initialVisibleColumns={initialVisibleColumns}
//                 filterField={"nombre_completo"}
                
//             >
//             </Tables>
//         </div>

//     )
// }
// export default Contratos;