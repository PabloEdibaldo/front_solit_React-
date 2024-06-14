import useForm from "../../../hooks/useForm";
const MaterialAntena = () => {
    const { values, handleChange } = useForm();
    return (
        <>
            <div className="text-center">
                Wireles / Antena
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Serie Router:</span>
                <input type="text" name="" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Contraseña:</span>
                <input type="text" name="" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">S/N antena:</span>
                <input type="text" name="" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Modelo:</span>
                <input type="text" name="" onChange={handleChange} className="form-control" />
            </div>
            <div className="text-center">
                Material Utilizado
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="input-group mb-2">
                        <span className="input-group-text">Cable UTP</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Conector RJ-45</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Antena</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Argolla</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Mastil</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Router</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="input-group mb-2">
                        <span className="input-group-text">Taquete de plastico</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Sello pasamuros</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Sujetador / Grapas</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Cinta de aislar</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Cinturon nylon</span>
                        <input type="number" min='0' name="" onChange={handleChange} className="form-control" />
                    </div>
                </div>
            </div>


            <div className="alert alert-secondary text-center" role="alert">
                Evidencias
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">Foto pocision de antena</label>
                <input type="file" className="form-control" id="inputGroupFile01" accept="image/*" />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">Captura informacion antena:</label>
                <input type="file" className="form-control" id="inputGroupFile01" accept="image/*" />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">Foto navegacion:</label>
                <input type="file" className="form-control" id="inputGroupFile01" accept="image/*" />
            </div>
        </>
    )
}
export default MaterialAntena;