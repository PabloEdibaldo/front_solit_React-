import TableComponent from "../../../components/Table";
import ModalCustom from "../../../components/Modal/Index";
import { useState } from "react";

const UsoMaterial = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [producto, setProducto] = useState(null);
    const handleModalClose = () => { setIsModalOpen(false) }
    console.log(data);
    const columns = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Nombre del cliente', accessor: 'cliente' },
        { Header: 'Uso', accessor: 'tipoUsio' },
        { Header: 'Fecha de uso', accessor: 'fecha_uso' },
        { Header: 'Usuario', accessor: 'usuario' },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div className="btn-group" role="group">
                    <button
                        className="btn btn-transparent btn-sm"
                        onClick={() => {
                            setIsModalOpen(true);
                            setProducto(row.original);
                        }}
                        title="ver productos"
                    >
                        <i className="fas fa-eye"></i>
                    </button>
                </div>
            )
        }
    ];

    return (
        <>
            <TableComponent
                data={data}
                columns={columns}
            />
            <ModalCustom
                isOpen={isModalOpen}
                onClose={handleModalClose}
                title="Informacion"
                content={<>
                    <div class="container">
                        {producto?.productos.map((element, index) => (
                            <table class="table table-bordered" key={index}>
                                <tbody>
                                    <tr>
                                        <th scope="row">Id Producto</th>
                                        <td>{element.id_producto}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Id interno</th>
                                        <td>{element.idInterno}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Nombre</th>
                                        <td>{element.nombre}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Categoria</th>
                                        <td>{element.categoria}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Modelo</th>
                                        <td>{element.modelo}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Observaciones</th>
                                        <td>{element.observaciones}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                    </div>
                </>
                }
            />
        </>
    )
}
export default UsoMaterial;