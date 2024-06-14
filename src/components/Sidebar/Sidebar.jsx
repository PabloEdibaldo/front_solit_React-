import { useEffect, useState } from "react";
import Admin from "./Admin";
import Colaboradores from "./Colaboradores";
const Sidelbar = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        setUsuario(user);
    }, []);

    return (
        <>
            <div data-scrollbar="true" data-height="100%">
                {/* begin sidebar user */}
                <ul className="nav">
                    <li className="nav-profile">
                        <a href="javascript:;" data-toggle="nav-profile">
                            <div className="cover with-shadow" />
                            <div className="image">
                                <img src="..\assets\img\user\user-13.jpeg" alt="" />
                            </div>
                            <div className="info">
                                <b className="caret pull-right" />
                                Rol / Puesto: {usuario?.tipo_rol}
                                <small>HOLA {usuario?.nombre_completo}</small>
                            </div>
                        </a>
                    </li>
                    <li>
                        <ul className="nav nav-profile">
                            <li>
                                <a href="javascript:;">
                                    <i className="fa fa-cog" /> Ajustes
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i className="fa fa-pencil-alt" /> Editar
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i className="fa fa-question-circle" /> Ayuda
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* end sidebar user */}

                {usuario?.tipo_rol === 'admin' ? (
                    <ul className="nav">
                        <Admin />
                    </ul>
                ) : (
                    <ul className="nav">
                        <Colaboradores />
                    </ul>
                )}

                {/* end sidebar nav */}
            </div>
        </>
    )
}
export default Sidelbar;