import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import apiConfigGestionRed from "../../../api/apiConfigGestionRed.json";
import apiUser from "../../../api/apiUser.json";
import useApiRequest from "../../../hooks/useApiRequest";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
function NewClient() {
    const [idCajaNap, setIdCajaNap] = useState(2);
    const [idRedIpv4, setIdRedIpv4] = useState(2);
    const [contrasenia, setContrasenia] = useState("");
    const router = useApiRequest(`${apiConfigGestionRed.apiBaseURL}${apiConfigGestionRed.endpoints.router.get}`, "GET", null, null, null);
    const internet = useApiRequest(`${apiUser.apiBaseURL}${apiUser.endpoints.Internet.get}`, "GET", null, null, null);
    const redIpv4 = useApiRequest(`${apiConfigGestionRed.apiBaseURL}${apiConfigGestionRed.endpoints.redIpv4.get}`, "GET", null, null, null);
    const cajaNap = useApiRequest(`${apiConfigGestionRed.apiBaseURL}${apiConfigGestionRed.endpoints.CajaNap.get}`, "GET", null, null, null);
    const [crearMedoCrud, setCrearMedoCrud] = useState(null);

    const [cajaNapPuertos, setCajaNapPuertos] = useState([]);
    const [ipsRedIpv4, setIpsRedIpv4] = useState([]);
    const [alert, setAlert] = useState({ type: '', message: '', visible: false });
    const [reloadCounter, setReloadCounter] = useState(0);

    useEffect(() => {
        if (idCajaNap) {
            fetch(`${apiConfigGestionRed.apiBaseURL}${apiConfigGestionRed.endpoints.CajaNap.puertos}${idCajaNap}/`)
                .then(response => response.json())
                .then(data => setCajaNapPuertos(data))
                .catch(error => console.error("Error fetching Caja Nap Puertos:", error));
        }
    }, [idCajaNap]);

    useEffect(() => {
        if (idRedIpv4) {
            fetch(`http://172.16.15.37:8081/api/redIpv4/ips/${idRedIpv4}/`)
                .then(response => response.json())
                .then(data => setIpsRedIpv4(data))
                .catch(error => console.error("Error fetching Caja Nap Puertos:", error));
        }
    }, [idRedIpv4]);

    const onuMode = [{ id: 1, mode: "PPPoE" }, { id: 2, mode: "DHCP" }];
    const onuModeOptions = onuMode.map(option => ({ value: option.mode, label: option.mode }));
    const routerOptions = router.data.map(routers => ({ value: routers.id, label: routers.name }));
    const internetOptions = internet.data.map(paquete => ({ value: paquete.id, label: paquete.name }));
    const redIpv4Options = redIpv4.data.map(red => ({ value: red.id, label: red.name }));
    const cajaNapOptions = cajaNap.data.map(cajaNaps => ({ value: cajaNaps.id, label: cajaNaps.name }));
    const cajaNapPuertosOptions = cajaNapPuertos.map(puerto => ({ value: puerto, label: puerto + " puerto" }));
    const ipsOptions = ipsRedIpv4.map(ips => ({ value: ips, label: ips }));

    const [activeStep, setActiveStep] = useState(1);
    const [datosCliente, setDatosCliente] = useState({
        userRequest: {
            name: '',
            direction: '',
            location: '',
            phoneNumber: '',
            mobilePhoneNumber: '',
            email: ''
        },
        billingRequest: {
            type_service: '',
            payday: '',
            invoice_creation: '',
            taxes: '',
            cutoff_date: '',
            days_of_tolerance: '',
            mora: 0,
            reconnection: 0,
            taxes1: 0,
            taxes2: 0,
            taxes3: 0,
            promotion: null
        },
        servicesRequest: {
            router: "",
            idRouter: 0,
            firewall: true,
            internetPackage_id: 0,
            description: "cliente de servicio de 30M",
            price: 0,
            type_Ipv4: 1,
            mac: "",
            ppp_hs: "PPPHSType",
            password: "",
            caja_nap: 0,
            port_nap: 0,
            direction: "ServiceDirection",
            time_Installation: "2024-02-13",
            connection: "ConnectionType",
            ip_admin: ''
        }
    });
    const crearClienten = useApiRequest(`${apiUser.apiBaseURL}${apiUser.endpoints.crearCliente.post + "/"}`, crearMedoCrud, datosCliente, null, null);

    console.log(datosCliente)

    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        const intValue = ['payday', 'invoice_creation', 'cutoff_date', 'days_of_tolerance', 'idRouter', 'caja_nap', 'port_nap', 'internetPackage_id'].includes(name) ? parseInt(value) : value;

        setDatosCliente((prevState) => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [name]: intValue,
            },
        }));
    };

    const handleSelectChange = (selectedOption, section, field) => {
        setDatosCliente(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: selectedOption.value
            }
        }));

        if (field === 'internetPackage_id') {
            const selectedPackage = internet.data.find(paquete => paquete.id === selectedOption.value);
            const price = selectedPackage ? selectedPackage.price : 0;

            setDatosCliente(prevState => ({
                ...prevState,
                servicesRequest: {
                    ...prevState.servicesRequest,
                    price: price
                }
            }));
        } else if (field === 'caja_nap') {
            setIdCajaNap(selectedOption.value);
        }
        else if (field === 'idRouter') {
            setDatosCliente(prevState => ({
                ...prevState,
                servicesRequest: {
                    ...prevState.servicesRequest,
                    router: selectedOption.label,
                    idRouter: parseInt(selectedOption.value)
                }
            }));
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1].focus();
            e.preventDefault();
        }
    };

    const handleNext = () => {
        if (activeStep < 3) {
            setActiveStep(prevStep => prevStep + 1);
        }
    };

    const handlePrevious = () => {
        if (activeStep > 1) {
            setActiveStep(prevStep => prevStep - 1);
        }
    };

    const generateRandomPassword = () => {
        let password = '';
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        for (let i = 0; i < 15; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setContrasenia(password);
        setDatosCliente((prevState) => ({
            ...prevState,
            servicesRequest: {
                ...prevState.servicesRequest,
                password: password,
            },
        }));
    };

    const setCrearClienteA = () => {
        setCrearMedoCrud("POST")

        setAlert({ type: 'danger', message: 'cliente creado correctamente.', visible: true });

        setTimeout(() => {
            setAlert({ ...alert, visible: false });
            setReloadCounter(prev => prev + 1);
            setCrearMedoCrud(null)
            useNavigate("/clientes/clientesCreados");
        }, 3000);
    }

    return (
        <div>
            <ol className="breadcrumb float-xl-right">
                <li className="breadcrumb-item"><Link to="/inicio">Inicio</Link></li>
                <li className="breadcrumb-item"><Link to="/clientes/clientesCreados">Usuarios</Link></li>
                <li className="breadcrumb-item active">Nuevo Cliente</li>
            </ol>

            <h1 className="page-header">Crear nuevo cliente <small>Ingrese los campos... </small></h1>

            <form className="form-control-with-bg">
                <div id="wizard">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className={`nav-link ${activeStep === 1 ? 'active' : ''}`} href="#step-1" onClick={() => setActiveStep(1)} style={{ color: activeStep === 1 ? 'blue' : 'inherit' }}>
                                <span className="number">1 - </span>
                                <span className="info">
                                    Datos personales
                                    <small>Nombre, dirección, teléfonos</small>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeStep === 2 ? 'active' : ''}`} href="#step-2" onClick={() => setActiveStep(2)} style={{ color: activeStep === 2 ? 'blue' : 'inherit' }}>
                                <span className="number">2 - </span>
                                <span className="info">
                                    Facturación y Notificación
                                    <small>Día de pago, Corte, aviso</small>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeStep === 3 ? 'active' : ''}`} href="#step-3" onClick={() => setActiveStep(3)} style={{ color: activeStep === 3 ? 'blue' : 'inherit' }}>
                                <span className="number">3 - </span>
                                <span className="info">
                                    Servicios
                                    <small>Queues, PPPOE, Hotspot, etc.</small>
                                </span>
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="step-1" className={`tab-pane ${activeStep === 1 ? 'active' : ''}`}>
                            <fieldset>
                                <legend className="no-border f-w-700 p-b-0 m-t-0 m-b-20 f-s-16 text-inverse">Datos personales</legend>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Nombre</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="text" name="name" placeholder="Nombre Completo" className="form-control" value={datosCliente.userRequest.name} onChange={(e) => handleInputChange(e, 'userRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Dirección</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="text" name="direction" placeholder="Dirección" className="form-control" value={datosCliente.userRequest.direction} onChange={(e) => handleInputChange(e, 'userRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Coordenadas</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="text" name="location" placeholder="Coordenadas" className="form-control" value={datosCliente.userRequest.location} onChange={(e) => handleInputChange(e, 'userRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Número de Teléfono</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="text" name="phoneNumber" placeholder="Número de Teléfono" className="form-control" value={datosCliente.userRequest.phoneNumber} onChange={(e) => handleInputChange(e, 'userRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Número de Teléfono Móvil</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="text" name="mobilePhoneNumber" placeholder="Número de Teléfono Móvil" className="form-control" value={datosCliente.userRequest.mobilePhoneNumber} onChange={(e) => handleInputChange(e, 'userRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Email</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="email" name="email" placeholder="Correo Electrónico" className="form-control" value={datosCliente.userRequest.email} onChange={(e) => handleInputChange(e, 'userRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                        <div id="step-2" className={`tab-pane ${activeStep === 2 ? 'active' : ''}`}>
                            <fieldset>
                                <legend className="no-border f-w-700 p-b-0 m-t-0 m-b-20 f-s-16 text-inverse">Facturación y Notificación</legend>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Tipo de Servicio</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <Select
                                            name="type_service"
                                            options={onuModeOptions}
                                            onChange={(selectedOption) => handleSelectChange(selectedOption, 'billingRequest', 'type_service')}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Día de Pago</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="number" name="payday" className="form-control" value={datosCliente.billingRequest.payday} onChange={(e) => handleInputChange(e, 'billingRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>

                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Día de Creación de Factura</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="number" name="invoice_creation" className="form-control" value={datosCliente.billingRequest.invoice_creation} onChange={(e) => handleInputChange(e, 'billingRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Día de Corte</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="number" name="cutoff_date" className="form-control" value={datosCliente.billingRequest.cutoff_date} onChange={(e) => handleInputChange(e, 'billingRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Día de Tolerancia</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="number" name="days_of_tolerance" className="form-control" value={datosCliente.billingRequest.days_of_tolerance} onChange={(e) => handleInputChange(e, 'billingRequest')} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>

                            </fieldset>
                        </div>

                        <div id="step-3" className={`tab-pane ${activeStep === 3 ? 'active' : ''}`}>
                            <fieldset>
                                <legend className="no-border f-w-700 p-b-0 m-t-0 m-b-20 f-s-16 text-inverse">Servicios</legend>

                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Router</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <Select
                                            name="router"
                                            options={routerOptions}
                                            onChange={(selectedOption) => handleSelectChange(selectedOption, 'servicesRequest', 'idRouter')}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Paquete de Internet</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <Select
                                            name="paqueteInternet"
                                            options={internetOptions}
                                            onChange={(selectedOption) => handleSelectChange(selectedOption, 'servicesRequest', 'internetPackage_id')}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Costo del Internet</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="number" name="price" className="form-control" value={datosCliente.servicesRequest.price} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Red Ipv4</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <Select
                                            name="redIpv4"
                                            options={redIpv4Options}
                                            onChange={(selectedOption) => {
                                                handleSelectChange(selectedOption, 'servicesRequest', 'type_Ipv4');
                                                setIdRedIpv4(selectedOption.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Ipv4</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <Select
                                            name="ip_admin"
                                            options={ipsOptions}
                                            onChange={(selectedOption) => handleSelectChange(selectedOption, 'servicesRequest', 'ip_admin')}
                                            isDisabled={!ipsOptions.length}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Mac</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <input type="text" name="mac" className="form-control" value={datosCliente.servicesRequest.mac} onChange={(e) => handleInputChange(e, 'servicesRequest')} />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Contraseña</label>
                                    <div className="col-lg-9 col-xl-6 d-flex">
                                        <button type="button" className="btn btn-light" aria-label="Generate Password" onClick={generateRandomPassword}>
                                            <i className="fas fa-key" color='blue'></i>
                                        </button>
                                        <input type="text" name="password" className="form-control" value={contrasenia} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Caja Nap</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <Select
                                            name="cajaNap"
                                            options={cajaNapOptions}
                                            onChange={(selectedOption) => {
                                                handleSelectChange(selectedOption, 'servicesRequest', 'caja_nap');
                                                setIdCajaNap(selectedOption.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row m-b-10">
                                    <label className="col-lg-3 text-lg-right col-form-label">Puerto Caja Nap</label>
                                    <div className="col-lg-9 col-xl-6">
                                        <Select
                                            name="cajaNapPuerto"
                                            options={cajaNapPuertosOptions}
                                            onChange={(selectedOption) => handleSelectChange(selectedOption, 'servicesRequest', 'port_nap')}
                                            isDisabled={!cajaNapPuertosOptions.length}
                                        />
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className="wizard-footer">
                        <div className="pull-left">
                            <button type="button" className="btn btn-secondary" onClick={handlePrevious} disabled={activeStep === 1}>Anterior</button>
                        </div>
                        <div className="pull-right">
                            {activeStep < 3 && (
                                <button type="button" className="btn btn-primary" onClick={handleNext}>Siguiente</button>
                            )}
                            {activeStep === 3 && (
                                <button type="button" className="btn btn-primary" onClick={() => setCrearClienteA()}>Crear cliente</button>
                            )}
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewClient;
