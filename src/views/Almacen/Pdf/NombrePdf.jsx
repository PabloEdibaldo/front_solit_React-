import Table from '../../../components/Table';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ModalCustom from '../../../components/Modal/Index';

const NombrePdf = ({ data, envio, hadleResivir, response }) => {


    const [isModalOpenPdf, setIsModalOpenPdf] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialValue, setInitialValue] = useState([]);

    useEffect(() => {
        setInitialValue(response)
    }, [response])

    const subirPDF = () => {
        hadleResivir(selectedFile);
    }

    const handleModalOpenPdf = () => {
        setUploadStatus('');
        setIsModalOpenPdf(true);
    };
    const handleModalOpen = () => {
        setInitialValue(response);
        setIsModalOpen(true);
    }
    const handleModalClosePdf = () => setIsModalOpenPdf(false);
    const handleModalClose = () => { setInitialValue([]), setIsModalOpen(false) };

    const handleFileUpload = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const columns = [
        { Header: 'id', accessor: 'id' },
        { Header: 'Nombre del pdf', accessor: 'nombrePdf' },
        { Header: 'Fecha solicitud', accessor: 'fecha_solicitud' },
        { Header: 'Nombre de usuario', accessor: 'nameUser' },
        {
            Header: 'Visualizar productos',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div className="btn-group" role="group">
                    <button
                        className="btn btn-transparent btn-sm"
                        title="Pdf"
                        onClick={() => { envio(row.original.id), handleModalOpen() }}
                    >
                        <i className="fas fa-file-pdf" ></i>
                    </button>
                </div>
            )
        }
    ];

    return (
        <>
            <Table
                columns={columns}
                data={data}
            />
            <ModalCustom
                isOpen={isModalOpenPdf}
                onClose={handleModalClosePdf}
                title={"Subir pdf"}
                content={
                    <>
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Seleccionar una factura de Syscom (PDF)</label>
                            <input
                                class="form-control"
                                type="file"
                                onChange={handleFileUpload}
                            />
                        </div>
                        <button className="btn btn-success " onClick={() => { subirPDF(), handleModalClosePdf() }}>Subir PDF</button>
                        <button className="btn btn-danger " onClick={handleModalClosePdf}>Cancelar</button>
                    </>
                }
            />
            <ModalCustom
                isOpen={isModalOpen}
                onClose={handleModalClose}
                title={"Producto"}
                content={
                    <>
                        {initialValue.length > 0 ? (
                            <div className="">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Modelo</th>
                                            <th scope="col">Unidad</th>
                                            <th scope="col">Piezas</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {initialValue.map((element, index) => (
                                            <tr key={index}>
                                                <td>{element.nombre}</td>
                                                <td>{element.modelo}</td>
                                                <td>{element.unidad}</td>
                                                <td>{element.cantidad}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="alert alert-warning" role="alert">
                                No se encontraron datos
                            </div>
                        )}
                    </>
                }
            />
        </>
    )
}
export default NombrePdf;