import { useState } from "react";
import useForm from "../../../hooks/useForm";
import MaterialFibra from "./MaterialFibra";
import MaterialAntena from "./MaterialAntena";

const HojaDeServicio = ({ dataResivida }) => {
    const [mostrar, setMostrar] = useState("Fibra Optica");
    const [activo, inactivo] = useState(true);
    const { values, handleChange } = useForm();

    return (
        <div className="">
            <div className="alert alert-secondary text-center" role="alert">
                Hoja de servicio
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Nombre del cliente:</span>
                <input type="text" name="nombre_cliente" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Tipo de servicio:</span>
                <input type="text" name="tipo_servicio" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Telefono:</span>
                <input type="tel" name="telefono_cliente" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Fecha:</span>
                <input type="date" name="fecha_instalacion" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Direccion:</span>
                <input type="text" name="direccion_cliente" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Observaciones:</span>
                <input type="text" name="observaciones" onChange={handleChange} className="form-control" />
            </div>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Soporte Tecnico
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Activacion de puerto
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Cambio de domicilio
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Migracion
                    </label>
                </div>
            </div>

            <div className="alert alert-secondary text-center" role="alert">
                Tipo de instalacion
            </div>
            <div className="d-flex justify-content-between">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Fibra Optica" checked={activo} onClick={() => { setMostrar("Fibra Optica"),inactivo(!activo) }} />
                    <label className="form-check-label" for="flexRadioDefault1" >
                        Fibra Optica
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={!activo} onClick={() => { setMostrar("Wireles / Antena"),inactivo(!activo) }} />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Wireles / Antena
                    </label>
                </div>
            </div>
            {mostrar === 'Fibra Optica' ? (
                <>
                    <MaterialFibra />
                </>
            ) : null}
            {mostrar === 'Wireles / Antena' ? (
                <>
                    <MaterialAntena/>
                </>
            ) : null}
        </div>
    );
}
export default HojaDeServicio;