
const Resumen = () => {
    return (
        <>

            <div className="row">
                <div className="col-6">
                    <h3 class="page-header">{">> Datos del cliente"} <small>...</small></h3>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <legend className="no-border f-w-700 p-b-0 m-t-0 m-b-20 f-s-16 text-inverse">
                                Estado
                            </legend>
                        </div>
                        <div className="mb-2">
                            <label>
                                Activo
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                Conectado al Router
                            </label>
                        </div>
                        <div className="mb-2">
                            <label>
                                N router
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                ID
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                Contraseña
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                N Identificacion
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                Cliente
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                Direccion Principal
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                Telefono Fijo
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                Telefono Movil
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                E-mail
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                Ubicacion
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-2">
                            <label>
                                N° Codigo de pago
                            </label>
                        </div>
                        <div className="mb-2">
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <legend className="no-border f-w-700 p-b-0 m-t-0 m-b-20 f-s-16 text-inverse">
                        <h3 class="page-header">{">> Resumen Notificaciones"} <small>...</small></h3>
                    </legend>

                    <div className="widget-list widget-list-rounded">
                        <a href="#" className="widget-list-item">
                            <div className="widget-list-media icon">
                                <i className="fa fa-link bg-blue text-inverse" />
                            </div>
                            <div className="widget-list-content">
                                <h4 className="widget-list-title">Dia de pago</h4>
                            </div>
                        </a>
                    </div>
                    <div className="widget-list widget-list-rounded">
                        <a href="#" className="widget-list-item">
                            <div className="widget-list-media icon">
                                <i className="fa fa-link bg-yellow text-inverse" />
                            </div>
                            <div className="widget-list-content">
                                <h4 className="widget-list-title">Crear y enviar factura</h4>
                            </div>
                        </a>
                    </div>
                    <div className="widget-list widget-list-rounded">
                        <a href="#" className="widget-list-item">
                            <div className="widget-list-media icon">
                                <i className="fa fa-link bg-green text-inverse" />
                            </div>
                            <div className="widget-list-content">
                                <h4 className="widget-list-title">Desactivado</h4>
                            </div>
                        </a>
                    </div>
                    <div className="widget-list widget-list-rounded">
                        <a href="#" className="widget-list-item">
                            <div className="widget-list-media icon">
                                <i className="fa fa-link bg-purple text-inverse" />
                            </div>
                            <div className="widget-list-content">
                                <h4 className="widget-list-title">Aviso SMS</h4>
                            </div>
                        </a>
                    </div>
                    <div className="widget-list widget-list-rounded">
                        <a href="#" className="widget-list-item">
                            <div className="widget-list-media icon">
                                <i className="fa fa-link bg-red text-inverse" />
                            </div>
                            <div className="widget-list-content">
                                <h4 className="widget-list-title">Desactivado</h4>
                            </div>
                        </a>
                    </div>
                    <div className="widget-list widget-list-rounded">
                        <a href="#" className="widget-list-item">
                            <div className="widget-list-media icon">
                                <i className="fa fa-link bg-info text-inverse" />
                            </div>
                            <div className="widget-list-content">
                                <h4 className="widget-list-title">Deuda Actual</h4>
                            </div>
                        </a>
                    </div>
                    <div className="widget-list widget-list-rounded">
                        <a href="#" className="widget-list-item">
                            <div className="widget-list-media icon">
                                <i className="fa fa-link bg-pink text-inverse" />
                            </div>
                            <div className="widget-list-content">
                                <h4 className="widget-list-title">Saldos</h4>
                            </div>
                        </a>
                    </div>
                    <div className="widget-list widget-list-rounded">
                        <a href="#" className="widget-list-item">
                            <div className="widget-list-media icon">
                                <i className="fa fa-link bg-blue text-inverse" />
                            </div>
                            <div className="widget-list-content">
                                <h4 className="widget-list-title">Telegram</h4>
                            </div>
                        </a>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Resumen;