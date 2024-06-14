import { Link } from "react-router-dom";
const Admin = () => {
    return (
        <>
            <li className="nav-header">Menu Administrativo</li>
            <li className='active'>
                <Link to="/inicio">
                    <a>
                        <i className="fa fa-th-large" /> <span>Inicio</span>
                    </a>
                </Link>
            </li>
            <li className="has-sub">
                <a href="javascript:;">
                    <b className="caret" />
                    <i className="fa fa-hdd" />
                    <span>Almacen Solit</span>
                </a>
                <ul className="sub-menu">
                    <li>
                        <Link to="/ProductsTab">
                            <a>Productos</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/usuarios">
                            <a>Usuarios</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/material">
                            <a>Material</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/zonas">
                            <a>Zonas</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/historial">
                            <a>Historial</a>
                        </Link>
                    </li>

                </ul>
            </li>
            <li className="has-sub">
                <a href="javascript:;">
                    <b className="caret" />
                    <i className="fa fa-tv" />
                    <span>Gestion de red</span>
                </a>
                <ul className="sub-menu">
                    <li>
                        <Link to="/GestionRed/Routers">
                            <a>
                                Routers
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gestionRed/redIpv4">
                            <a>
                                Redes IPv4
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gestionRed/monitoreo">
                            <a>
                                Monitoreo
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gestionRed/cajasNap">
                            <a>
                                Cajas Nap
                            </a>
                        </Link>
                    </li>
                    <li>
                        <a>
                            Trafico
                        </a>
                    </li>
                    <li>
                        <a>
                            Ips Visitadas
                        </a>
                    </li>
                    <li>
                        <a>Monitor BlackList</a>
                    </li>
                </ul>
            </li>
            <li className="has-sub">
                <a href="javascript:;">
                    <b className="caret" />
                    <i class="fas fa-users" />
                    <span>Usuario</span>
                </a>
                <ul className="sub-menu">

                    <li>
                        <Link to="/clientes/clientesCreados">
                            <a>
                                Clientes
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/clientes/map">
                            <a>
                                maps
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/clientes/factura">
                            <a>
                                Factura
                            </a>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="has-sub">
                <a href="javascript:;">
                    <b className="caret" />
                    <i class="fa fa-wrench"></i>
                    <span>Colaboradores</span>
                </a>
                <ul className="sub-menu">
                    <li>
                        <Link to="/peticionmaterial/tecnicos">
                            <a>
                                Peticiones de material
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/peticionmaterial/calendario">
                            <a>
                                Calendario
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/hojasDeServicio">
                            <a>
                                Hoja de servicio
                            </a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="has-sub">
                <a href="javascript:;">
                    <b className="caret" />
                    <i class="fa fa-star"></i>
                    <span>Servicios</span>
                </a>
                <ul className="sub-menu">
                    <li>
                        <Link to="/servicios/InternetPaquetes">
                            <a>
                                Paquetes de Internet
                            </a>
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/smartOlt">
                    <a>
                        <i className="fa fa-reply-all" /> <span>SmartOlt</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link to="/mensajes">
                    <a>
                        <i className="fa fa-comments" /> <span>Mensajes</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link to="/historialCrud">
                    <a>
                        <i className="fa fa-align-justify" /> <span>Historial</span>
                    </a>
                </Link>
            </li>

            {/* begin sidebar minify button */}
            <li>
                <a
                    href="javascript:;"
                    className="sidebar-minify-btn"
                    data-click="sidebar-minify"
                >
                    <i className="fa fa-angle-double-left" />
                </a>
            </li>
            {/* end sidebar minify button */}

        </>
    )
}
export default Admin