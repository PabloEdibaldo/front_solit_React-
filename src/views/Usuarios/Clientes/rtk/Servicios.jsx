import React, { useState, useEffect } from 'react';
import useApiRequest from '../../../../hooks/useApiRequest';
import apiSmartOlt from '../../../../api/apiSmartOlt.json';
import TableComponent from '../../../../components/Table';
import Select from 'react-select';
import apiUser from "../../../../api/apiUser.json"

function Servicios({ idClient }) {
   
    const [OLTName, setOLTName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activo, setActivo] = useState("");

    const [objetosDownload, setObjetosDownload] = useState([]);
    const [objetosUpload, setObjetosUpload] = useState([]);

    const [olts, setOlts] = useState([]);
    const [vlans, getVlans] = useState([]);
    const [listODB, setlistODB] = useState([]);
    const [estadoCrud, setEstadoCrud] = useState(null)
    const [alert, setAlert] = useState({ type: '', message: '', visible: false });
    const [reloadCounter, setReloadCounter] = useState(0);
    const [onuHaConfigurar1, setOnuHaConfigurar1] = useState("GET")

    const GetSpeedProfilesList = useApiRequest(`${apiSmartOlt.apiBaseURL}${apiSmartOlt.endpoints.GetSpeedProfilesList.get}`, 'GET', null, null, null);
    const onuHaConfigurar = useApiRequest(`${apiSmartOlt.apiBaseURL}${apiSmartOlt.endpoints.GetAllUnconfiguredONUs.get}`,onuHaConfigurar1, null, null, null);
    const getOltList = useApiRequest(`${apiSmartOlt.apiBaseURL}${apiSmartOlt.endpoints.ListOLT.get}`, 'GET', null, null, null);
    const ListZonas = useApiRequest(`${apiSmartOlt.apiBaseURL}${apiSmartOlt.endpoints.getZones.get}`, "GET", null, null, null);
    const userConfig = useApiRequest(`${apiUser.apiBaseURL}${apiUser.endpoints.getUserConfigured.get}${idClient}`, "GET", null, null, null);


    
    const [datosCliente, setDatosCliente] = useState({
        olt_id: "",
        pon_type: "",
        board: "",
        port: "",
        sn: "",
        vlan: "",
        onu_type: "",
        zone: "",
        odb: "",
        name: "",
        onu_mode: "",
        onu_external_id: "",
        upload_speed_profile_name: "",
        download_speed_profile_name: "",
        password: "",
        modeConfigOnu: ""
    });

    const postONUConfigurado = useApiRequest(`${apiSmartOlt.apiBaseURL}${apiSmartOlt.endpoints.AuthorizeONU.post}`, estadoCrud, datosCliente, null, null)

    useEffect(() => {
        if (getOltList.data && getOltList.data.response) {
            setOlts(getOltList.data.response);
        }
    }, [getOltList.data]);

    useEffect(() => {
        if (GetSpeedProfilesList.data && GetSpeedProfilesList.data.response) {
            const objetosDownload = GetSpeedProfilesList.data.response.filter(obj => obj.direction === 'download');
            const objetosUpload = GetSpeedProfilesList.data.response.filter(obj => obj.direction === 'upload');
            setObjetosDownload(objetosDownload);
            setObjetosUpload(objetosUpload);
        } else {
            console.log('No se pudo obtener la lista de perfiles de velocidad.');
        }
    }, [GetSpeedProfilesList.data]);

    const getOltNameById = (oltId) => {
        const olt = olts.find(olt => olt.id === oltId);
        return olt ? olt.name : 'OLT no encontrada';
    };

    const transformedData = onuHaConfigurar.data.response
        ? onuHaConfigurar.data.response.map(item => ({
            ...item,
            olt_name: getOltNameById(item.olt_id),
        }))
        : [];

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosCliente(prevState => ({
            ...prevState,
            [name]: value
        }));


    };
    const autorizarOnu = () => {

        setEstadoCrud("POST");
        handleModalClose()
        setAlert({ type: 'success', message: `Se ha autorizado correctamente: ${userConfig.data.name}.`, visible: true });
        setTimeout(() => {
            setEstadoCrud(null);
            setAlert({ ...alert, visible: false });
            setReloadCounter(prev => prev + 1);
            setOnuHaConfigurar1("GET")
        }, 3000);
    };

    const handleSelectChange = (selectedOption, { name }) => {
        setDatosCliente(prevState => ({
            ...prevState,
            [name]: selectedOption.value
        }));
    };

    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'pon_type', accessor: 'pon_type' },
        { Header: 'board', accessor: 'board' },
        { Header: 'port', accessor: 'port' },
        { Header: 'sn', accessor: 'sn' },
        { Header: 'onu_type_name', accessor: 'onu_type_name' },
        { Header: 'OLT Name', accessor: 'olt_name' },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div className="btn-group" role="group">
                    <button
                        className="btn btn-transparent btn-sm"
                        onClick={() => handleDelete(row.original.id)}
                        title="Eliminar"
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button
                        className="btn btn-transparent btn-sm"
                        onClick={() => aprovicionar(row.original)}
                        title="Eliminar"
                    >
                        <i className="far fa-compass"></i>
                    </button>
                </div>
            )
        }
    ];


    const aprovicionar = (dataAprovicion) => {
        setDatosCliente(prevState => ({
            ...prevState,
            olt_id: parseInt(dataAprovicion.olt_id),
            board: parseInt(dataAprovicion.board),
            port: parseInt(dataAprovicion.port),
            sn: dataAprovicion.sn,
            onu_type: dataAprovicion.onu_type_name,

            password: userConfig.data.password,
            name: userConfig.data.name,
            modeConfigOnu: userConfig.data.modeConfigOnu,
            onu_external_id: userConfig.data.idUser,
        }));
        setOLTName(dataAprovicion.olt_name)
        fetchData(dataAprovicion.olt_id);

        setActivo("Aceptar");
        setIsModalOpen(true);
    };

    const ponType = [{ id: 1, name: "gpon" }, { id: 2, name: "epon" }];
    const onuMode = [{ id: 1, mode: "Routing" }, { id: 2, mode: "Bridging" }];

    const ponTypeOptions = ponType.map(option => ({ value: option.name, label: option.name }));

    let zonesOptions = [];
    if (ListZonas.data && ListZonas.data.response) {
        zonesOptions = ListZonas.data.response.map(option => ({ value: option.name, label: option.name }));
    }


    const onuModeOptions = onuMode.map(option => ({ value: option.mode, label: option.mode }));
    let vlansOptions = vlans.map(option => ({ value: option.vlan, label: option.vlan + " - " + option.description }));
    let ODBOptions = listODB.map(option => ({ value: option.name, label: option.name }));

    let downloadOptions = objetosDownload.map(option => ({ value: option.name, label: option.name }));
    let uploadOptions = objetosUpload.map(option => ({ value: option.name, label: option.name }));

    const fetchData = async (id_olt) => {
        fetch(`${apiSmartOlt.apiBaseURL}${apiSmartOlt.endpoints.GetVlans.get + `?id_onu=${id_olt}`}`)
            .then(response => response.json())
            .then(data => getVlans(data.response))
            .catch(error => console.error('Error:', error));
    };

    const fetchDataZona = async (nameZona) => {
        const ObjetoZona = ListZonas.data.response.filter(obj => obj.name === nameZona);
        const zonaId = ObjetoZona[0].id;

        fetch(`${apiSmartOlt.apiBaseURL}${apiSmartOlt.endpoints.GetODBsList.get + `?id_zone=${zonaId}`}`)
            .then(response => response.json())
            .then(data => setlistODB(data.response))
            .catch(error => console.error('Error:', error));
    };


    return (
        <>
            {alert.visible && (
                <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                </div>
            )}
            <TableComponent columns={columns} data={transformedData} />
            <div className={`modal fade ${isModalOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isModalOpen ? 'block' : 'none' }} aria-modal="true" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Productos pedidos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Name olt:</label>
                                <div className="col-lg-9 col-xl-6">
                                    <input type="text" className="form-control" value={OLTName} onChange={handleChange} name="olt_id" />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Board:</label>
                                <div className="col-lg-9 col-xl-6">
                                    <input type="text" className="form-control" value={datosCliente.board} onChange={handleChange} name="board" />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Port:</label>
                                <div className="col-lg-9 col-xl-6">
                                    <input type="text" className="form-control" value={datosCliente.port} onChange={handleChange} name="port" />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">SN:</label>
                                <div className="col-lg-9 col-xl-6">
                                    <input type="text" className="form-control" value={datosCliente.sn} onChange={handleChange} name="sn" />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Pon Type:</label>
                                <div className="col-lg-9 col-xl-6">
                                    <Select
                                        options={ponTypeOptions}
                                        onChange={handleSelectChange}
                                        name="pon_type"
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Seleccionar zona:</label>
                                <div className="col-lg-9 col-xl-6">
                                    <Select
                                        options={zonesOptions}
                                        onChange={(selectedOption) => {
                                            handleSelectChange(selectedOption, { name: "zone" });
                                            fetchDataZona(selectedOption.value);
                                        }}
                                        name="zone"
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Onu type:</label>
                                <div className="col-lg-9 col-xl-6">
                                    <input type="text" className="form-control" value={datosCliente.onu_type} onChange={handleChange} name="onu_type" />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Onu mode</label>
                                <div className="col-lg-9 col-xl-6">
                                    <Select
                                        options={onuModeOptions}
                                        onChange={handleSelectChange}
                                        name="onu_mode"
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Vlans</label>
                                <div className="col-lg-9 col-xl-6">
                                    <Select
                                        options={vlansOptions}
                                        onChange={handleSelectChange}
                                        name="vlan"
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">ODB</label>
                                <div className="col-lg-9 col-xl-6">
                                    <Select
                                        options={ODBOptions}
                                        onChange={handleSelectChange}
                                        name="odb"
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Download</label>
                                <div className="col-lg-9 col-xl-6">
                                    <Select
                                        options={downloadOptions}
                                        onChange={handleSelectChange}
                                        name="download_speed_profile_name"
                                    />
                                </div>
                            </div>
                            <div className="form-group row m-b-10">
                                <label className="col-lg-3 text-lg-right col-form-label">Upload</label>
                                <div className="col-lg-9 col-xl-6">
                                    <Select
                                        options={uploadOptions}
                                        onChange={handleSelectChange}
                                        name="upload_speed_profile_name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClose}>Cerrar</button>
                            {activo === "Aceptar" && (
                                <button type="button" className="btn btn-primary" onClick={autorizarOnu}>Aceptar</button>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Servicios;
