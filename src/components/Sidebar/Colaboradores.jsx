import { Link } from "react-router-dom";
const Colaboradores = () => {
    return (
        <>
            <li className="nav-header">Menu</li>
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
                        <Link to="/peticionmaterial/calendario">
                            <a>
                                Hoja de servicio
                            </a>
                        </Link>
                    </li>
                </ul>
            </li>
          
            <li>
                <a
                    href="javascript:;"
                    className="sidebar-minify-btn"
                    data-click="sidebar-minify"
                >
                    <i className="fa fa-angle-double-left" />
                </a>
            </li>
            
        </>
    )
}
export default Colaboradores;