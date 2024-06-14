import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from '../../assets/img/LogoEmpresa.png';
import { useState, useEffect } from 'react';
const NavBar = () => {
    const [usuario, setUsuario] = useState("");
    const [token, setToken] = useState("");
    const [refresh, setRefresh] = useState("");

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        const refreshToken = sessionStorage.getItem("refreshToken");
        const token = sessionStorage.getItem('accessToken');
        setUsuario(user);
        setRefresh(refreshToken);
        setToken(token);
    }, [])

    const cerrarSesion = async () => {
        try {
            const response = await fetch('http://172.16.15.37:8000/api/sistemaSolit/logout/', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    refresh: refresh,
                }),
            });
            if (!response.ok) {
                throw new Error('Error en el cierre de sesión');
            }
            
        } catch (error) {
            console.error('Error cerrando sesión:', error);
        }
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("refreshToken");
        sessionStorage.removeItem("accessToken");
        window.location.href = '/';
    }
    return (
        <>
            <div className="navbar-header">
                <div className="navbar-brand">
                    <img src={logo} alt="" />
                </div>
                <button
                    type="button"
                    className="navbar-toggle"
                    data-click="sidebar-toggled"
                >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
            </div>
            {/* end navbar-header */}

            {/* begin header-nav */}
            <ul className="navbar-nav navbar-right">
                {usuario?.fotoPerfil ? (<img src={"http://172.16.15.37:8001" + usuario.fotoPerfil} alt="" className='img-fluid rounded-circle' style={{ height: "40px", width: "40px" }} />
                ) : (<i class="fas fa-user-circle fa-3x"></i>)}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {usuario?.nombre_completo}
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onClick={() => { cerrarSesion() }}>Cerrar Sesion</a></li>
                        <li><a class="dropdown-item" href="#">Configuracion</a></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default NavBar;
