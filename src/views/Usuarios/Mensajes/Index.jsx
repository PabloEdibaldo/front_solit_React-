import { useEffect, useState } from "react";
import config from "../../../api/apiUserInter";
import useApiRequest from "../../../hooks/useApiRequest";
const Mensaje = () => {
    ///http://172.16.15.37:8080/api/messages/
    const data = useApiRequest(config.endpoints.mensajesDeWhatsapp.put, "GET", null, null, null, null);
    const [isActivado, setIsActivado] = useState(true);
    const [mensaje1, setMensaje1] = useState({
        title: "¡Bienvenido a SOLIT!",
        saludo: "Hola ",
        cuerpo: "Nos emociona tenerte como parte de nuestra comunidad! Esperamos que disfrutes de tu conexión a Internet con nosotros. Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte.",
        despedida: "Saludos cordiales",
        pie: "SOLIT"
    });
    const [mensaje2, setMensaje2] = useState({
        title:"SOLIT le recuerda su pago",
        despedida:"Gracias por su atencion",
        pie:"SOLIT",
    });
    const [mensaje3, setMensaje3] = useState({
        title:"Gracias por su pago",
        cuerpo:"Gracias por seguir confiando en nosotros",
        despedida:"Saludos cordiales",
        pie:"SOLIT"
    });
    const [mensaje4, setMensaje4] = useState({
        title:"Aviso de corte de servicio",
        cuerpo:"Lamentamos informarle que su servicio será cortado debido a la falta de pago. Para evitar la interrupción, por favor realice el pago lo antes posible.",
        despedida: "Gracias por su atención",
        pie:"SOLIT"
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setMensaje1(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <>
            <button>
                hola mundo
            </button>
            <div className="text-center">
                <h1>
                    ¡Mensajes de whatsapp!
                </h1>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a href="#nav-pills-tab-1" data-toggle="tab" className="nav-link active">
                        <span className="d-sm-block d-none">Mensaje 1</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#nav-pills-tab-2" data-toggle="tab" className="nav-link">

                        <span className="d-sm-block d-none">Mensaje 2</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#nav-pills-tab-3" data-toggle="tab" className="nav-link">
                        <span className="d-sm-none">Pills 3</span>
                        <span className="d-sm-block d-none">Mensaje 3</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#nav-pills-tab-4" data-toggle="tab" className="nav-link">
                        <span className="d-sm-none">Pills 4</span>
                        <span className="d-sm-block d-none">Mensaje 4</span>
                    </a>
                </li>
            </ul>
            <div className="tab-content p-15 rounded bg-white mb-4">
                <div className="tab-pane fade active show" id="nav-pills-tab-1">
                    <div className="text-center mb-2">
                        <button type="button" className="btn btn-success" onClick={()=>{setIsActivado(false)}}>
                            Editar mensaje
                        </button>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Titulo:</label>
                        <input type="text" class="form-control" id="title" onChange={handleInputChange} disabled={isActivado}  value={mensaje1.title} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Saludo:</label>
                        <input type="text" class="form-control" id="saludo" onChange={handleInputChange} disabled={isActivado}   value={mensaje1.saludo} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Cuerpo:</label>
                        <input type="text" class="form-control" disabled={isActivado}  value={mensaje1.cuerpo} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Despedida:</label>
                        <input type="text" class="form-control" disabled={isActivado}  value={mensaje1.despedida} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Pie:</label>
                        <input type="text" class="form-control" disabled={isActivado}  value={mensaje1.pie} placeholder="Example input placeholder" />
                    </div>
                    <div className="text-center">
                        Vista mensaje
                    </div>
                    <div>
                        <p>{mensaje1.title}</p>
                        <p>{mensaje1.saludo +"{usuario}"}</p>
                        <p>{mensaje1.cuerpo}</p>
                    </div>

                </div>

                <div className="tab-pane fade" id="nav-pills-tab-2">
                <div className="text-center mb-2">
                        <button type="button" className="btn btn-success" onClick={()=>{setIsActivado(false)}}>
                            Editar mensaje
                        </button>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Titulo:</label>
                        <input type="text" class="form-control" disabled={isActivado} id="formGroupExampleInput" value={mensaje2.title} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Pie:</label>
                        <input type="text" class="form-control" disabled={isActivado}  id="formGroupExampleInput" value={mensaje2.pie} placeholder="Example input placeholder" />
                    </div>
                </div>


                <div className="tab-pane fade" id="nav-pills-tab-3">
                <div className="text-center mb-2">
                        <button type="button" className="btn btn-success" onClick={()=>{setIsActivado(false)}}>
                            Editar mensaje
                        </button>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Titulo:</label>
                        <input type="text" class="form-control"   disabled={isActivado} id="formGroupExampleInput" value={mensaje3.title} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Cuerpo:</label>
                        <input type="text" class="form-control" disabled={isActivado} id="formGroupExampleInput" value={mensaje3.cuerpo} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Despedida:</label>
                        <input type="text" class="form-control" disabled={isActivado} id="formGroupExampleInput" value={mensaje3.despedida} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Pie:</label>
                        <input type="text" class="form-control" disabled={isActivado}  id="formGroupExampleInput" value={mensaje3.pie} placeholder="Example input placeholder" />
                    </div>
                </div>


                <div className="tab-pane fade" id="nav-pills-tab-4">
                <div className="text-center mb-2">
                        <button type="button" className="btn btn-success" onClick={()=>{setIsActivado(false)}}>
                            Editar mensaje
                        </button>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Titulo:</label>
                        <input type="text" class="form-control"   disabled={isActivado} id="formGroupExampleInput" value={mensaje4.title} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Cuerpo:</label>
                        <input type="text" class="form-control" disabled={isActivado} id="formGroupExampleInput" value={mensaje4.cuerpo} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Despedida:</label>
                        <input type="text" class="form-control" disabled={isActivado} id="formGroupExampleInput" value={mensaje4.despedida} placeholder="Example input placeholder" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Pie:</label>
                        <input type="text" class="form-control" disabled={isActivado} id="formGroupExampleInput" value={mensaje4.pie} placeholder="Example input placeholder" />
                    </div>
                </div>

            </div>
        </>
    )
}
export default Mensaje;