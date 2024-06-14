import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect, useState } from 'react';
import useApiRequest from "../../hooks/useApiRequest";
import config from "../../api/apiSmartOLT";
import { Link } from 'react-router-dom';
import Configured from './Configured';
const SmartOlt = () => {
    const [reloadCounter, setReloadCounter] = useState(0);
    const [reloadCounter2, setReloadCounter2] = useState(0);
    const [reloadCounter3, setReloadCounter3] = useState(0);
    const [reloadCounter4, setReloadCounter4] = useState(0);
    const { data, loading, error } = useApiRequest(config.endpoints.OnuGetAllOnusDetails.get, "GET", null, null, reloadCounter);
    //const { data: dataZones, loading: loadingZona, error: errorZona } = useApiRequest(`${apiConfig.apiBaseURL}${apiConfig.endpoints.getZones.get}`, "GET", null, null, reloadCounter2);
    // const { data: dataVLAN, loading: loadingVLAN, error: errorVLAN } = useApiRequest(`${apiConfig.apiBaseURL}${apiConfig.endpoints.GetVlans.get}`, "GET", null, null, reloadCounter3);

    const [online, setOnline] = useState(0);
    const [totalAuthorized, setTotalAuthorized] = useState(0);
    const [totalOffline, setTotalOffline] = useState(0);
    const [totalLos, setTotalLos] = useState(0);
    const [totalPowerFail, setTotalPowerFail] = useState(0);
    const [lowSignals, setLowSignals] = useState(0);
    const [isActivo, setIsActivo] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const [activeTab, setActiveTab] = useState('inicio');
    useEffect(() => {
        console.log(data);
        if (data && data.onus) {
            const statusOnline = [];
            const statusOffline = [];
            const statusPowerFail = [];
            const statusLost = [];
            const statusLowSignals = [];
            data.onus.forEach(element => {
                if (element.status === "Online") {
                    statusOnline.push(element);
                } else if (element.status === "Offline") {
                    statusOffline.push(element);
                } else if (element.status === "LOS") {
                    statusLost.push(element);
                } else if (element.status === "Power fail") {
                    statusPowerFail.push(element);
                } else {
                    console.log(element);
                }
                if (element.signal === "Low") {
                    console.log(element);
                    statusLowSignals.push(element);
                }
            });
            setOnline(statusOnline.length);
            setTotalAuthorized(data.onus.length);
            setTotalOffline(statusOffline.length);
            setTotalPowerFail(statusPowerFail.length);
            setTotalLos(statusLost.length);
            setLowSignals(statusLowSignals.length);
            setIsActivo(true);
        }
    }, [data]);

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
                <div class="container-fluid">                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                                <a class="nav-link" onClick={() => { setActiveTab('inicio') }}>SOLIT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => { setActiveTab('configured') }}>Unconfigured</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => { setActiveTab('configured') }}>Configured</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Graphs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Diagnostics</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reports
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="#">Authorizations</a></li>
                                    <li><a class="dropdown-item" href="#">Export</a></li>
                                    <li><a class="dropdown-item" href="#">Import</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Save config</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Settings</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="#">Zones</a></li>
                                    <li><a class="dropdown-item" href="#">ODBs</a></li>
                                    <li><a class="dropdown-item" href="#">ONU types</a></li>
                                    <li><a class="dropdown-item" href="#">Speed profiles</a></li>
                                    <li><a class="dropdown-item" href="#">OLTs</a></li>
                                    <li><a class="dropdown-item" href="#">VPN Y TR069</a></li>
                                    <li><a class="dropdown-item" href="#">General</a></li>
                                    <li><a class="dropdown-item" href="#">Billing</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {activeTab === 'inicio' && (
                <div className="container">
                    <div className="row">

                        <div className="col-xl-3 col-md-6">
                            <div className="widget widget-stats bg-blue">
                                <div className="stats-icon">
                                    <i className="fa fa-magic" />
                                </div>
                                <div className="stats-info">
                                    <h4>Waiting authorizations</h4>
                                    <p>0</p>
                                </div>
                                <div className="stats-link">
                                    <a href="javascript:;">
                                        View Detail <i className="fa fa-arrow-alt-circle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <div className="widget widget-stats bg-green">
                                <div className="stats-icon">
                                    <i className="fa fa-server" />
                                </div>
                                <div className="stats-info">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <h4>Online</h4>
                                            <p>{online}</p>
                                        </div>
                                        <div className='col-6'>
                                            <h4>Total authorized</h4>
                                            <p>{totalAuthorized}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="stats-link">
                                    <a href="javascript:;">
                                        View Detail <i className="fa fa-arrow-alt-circle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <div className="widget widget-stats bg-gray">
                                <div className="stats-icon">
                                    <i className="fa fa-times" />
                                </div>
                                <div className="stats-info">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <h4>Total offline</h4>
                                            <p>{totalOffline}</p>
                                        </div>
                                        <div className='col-6'>
                                            <h4>PwrFail</h4>
                                            <p>{totalPowerFail}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="stats-link">
                                    <a href="javascript:;">
                                        View Detail <i className="fa fa-arrow-alt-circle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <div className="widget widget-stats bg-orange">
                                <div className="stats-icon">
                                    <i className="fa fa-question-circle" />
                                </div>
                                <div className="stats-info">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <h4>Low signals</h4>
                                            <p>{lowSignals}</p>
                                        </div>
                                        <div className='col-6'>
                                            <h4>Warning</h4>
                                            <p></p>
                                        </div>
                                    </div>

                                </div>
                                <div className="stats-link">
                                    <a href="javascript:;">
                                        View Detail <i className="fa fa-arrow-alt-circle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'configured' && (
                <div className="tab-pane fade show active">
                    <div className="text-center mb-2">
                    </div>
                    <div className="card">
                        <Configured
                            data={data}
                        />
                    </div>
                </div>
            )}

        </>
    )
}
export default SmartOlt;