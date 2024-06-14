import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/default/app.min.css';
import foto from '../../assets/img/LogoEmpresa.png'
import Fondo from '../../assets/img/login-bg-17.jpeg'
function Login({ onLoginSuccess }) {
    const [form, setForm] = useState({
        correo_electronico: "",
        password: "",
    });


    const [error, setError] = useState(null);
    const [mensaje, setMensaje] = useState("");

    const MostrarMensaje = () =>{
        
        return(
            <>
            <div class="alert alert-danger text-center" role="alert">
                {mensaje.statusText}
            </div>
            </>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://172.16.15.37:8000/api/sistemaSolit/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });         
            
            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('accessToken', data.access);
                sessionStorage.setItem('refreshToken', data.refresch);
                sessionStorage.setItem('user', JSON.stringify(data.user));
                onLoginSuccess(true);
            } else {
                setMensaje(response);
                setError(true);
            }
        } catch (error) {
            
        }
    };
    
    return (
        <>
            <div className="login-cover">
                <div
                    className="login-cover-image"
                    style={{ backgroundImage: Fondo }}
                    data-id="login-cover-image"
                />
                <div className="login-cover-bg" />
            </div>

            <div className="login login-v2" data-pageload-addclass="animated fadeIn">
                <div className="login-header">
                    <div className="brand">
                        <img src={foto} className='img-fluid' alt="" />
                        <div className='text-center'>
                            <b>SISTEMA SOLIT</b>
                        </div>

                    </div>
                </div>
                {error ? (
                    <MostrarMensaje/>
                ) : null}
                <div className="login-content">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group m-b-20">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Correo.."
                                required
                                value={form.correo_electronico}
                                onChange={(e) =>
                                    setForm({ ...form, correo_electronico: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group m-b-20">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Contraseña.."
                                required
                                value={form.password}
                                onChange={(e) =>
                                    setForm({ ...form, password: e.target.value })
                                }
                            />
                        </div>
                        <div className="login-buttons">
                            <button type="submit" className="btn btn-success btn-block btn-lg">
                                Enviar
                            </button>
                        </div>
                    </form>
                    <div className="m-t-20 ">
                        ¿No tienes un usuario?
                    </div>
                    <div className="m-t-20">
                        Haz Click <a href="javascript:;">Aqui</a> para registrarte.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;