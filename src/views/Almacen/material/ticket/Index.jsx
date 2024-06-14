import './Ticket.css'; // Asegúrate de crear y utilizar este archivo para los estilos
import Foto from '../../../../assets/LogoEmpresa.png'; // Asegúrate de que la ruta sea correcta
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Ticket = ({ nombre, fecha, editar }) => {
    const ticketRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => ticketRef.current,
    });

    return (
        <div className="container mt-4 text-center">
            {/* Vista para el usuario */}
            <div className="user-view no-print">
                <div className="d-flex justify-content-center mb-4">
                    <img src={Foto} alt="Logo Empresa" className="img-fluid" />
                </div>
                <div className="table-responsive mb-4">
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th scope="col">Solicita</th>
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{nombre}</td>
                                <td>{fecha}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-responsive">
                    <table className=" table table-light">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Productos</th>
                                <th scope="col">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {editar.map((product) => (
                                <tr key={product.id ? product.id : "N/A"}>
                                    <td>{product.idInterno}</td>
                                    <td>{product.nombre}</td>
                                    <td>{product.unidades}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Vista para imprimir */}

            <div ref={ticketRef} className="print-view print-only">
                <div className="ticket">
                    <div className="d-flex justify-content-center mb-4">
                        <img src={Foto} alt="Logo Empresa" className="img-fluid" />
                    </div>
                    <div className="ticket-table">
                        <table className="ticket">
                            <thead>
                                <tr>
                                    <th>Solicita</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{nombre}</td>
                                    <td>{fecha}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ticket-table">
                        <table className="ticket">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Productos</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {editar.map((product) => (
                                    <tr key={product.id ? product.id : "N/A"}>
                                        <td>{product.idInterno}</td>
                                        <td>{product.nombre}</td>
                                        <td>{product.unidades}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='text-end' >
                        <a onClick={() => { handlePrint() }} title='imprimir' class="btn btn-default btn-icon btn-circle btn-lg" >
                            <i class="fa fa-print" ></i>
                        </a>
                    </div>
        </div>
    );
};
export default Ticket;