import useForm from "../../../hooks/useForm";
const MaterialFibra = () => {
    const { values, handleChange } = useForm();
    
    return (
        <>
            <div className="text-center">
                Fibra Optica
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
                <span className="input-group-text">Terminal:</span>
                <input type="text" name="" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Puerto:</span>
                <input type="text" name="" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">P-Terminal DB</span>
                <input type="text" name="" onChange={handleChange} className="form-control" />
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text">Potencia ONT DB</span>
                <input type="text" name="" onChange={handleChange} className="form-control" />
            </div>

            <div className="alert alert-secondary text-center" role="alert">
                Material Utilizado
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="input-group mb-2">
                        <span className="input-group-text">Cable cordon circular F.O</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Conector prepolido</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">ONT / ONU</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Router</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Toallas</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Cinta de aislar</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Jumper</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="input-group mb-2">
                        <span className="input-group-text">Taquete de plastico</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Armella</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Pijas</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Roseta</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Grapas</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Tensor para acometida</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text">Alcohol</span>
                        <input type="number" name="" min='0' onChange={handleChange} className="form-control" />
                    </div>
                </div>

            </div>
            <div className="alert alert-secondary text-center" role="alert">
                Evidencias
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">Terminal</label>
                <input type="file" className="form-control" id="inputGroupFile01" accept="image/*" />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">Foto posicion router</label>
                <input type="file" className="form-control" id="inputGroupFile01" accept="image/*" />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">P-Terminal-DB</label>
                <input type="file" className="form-control" id="inputGroupFile01" accept="image/*" />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">Foto navegacion</label>
                <input type="file" className="form-control" id="inputGroupFile01" accept="image/*" />
            </div>
        </>
    )
}
export default MaterialFibra;