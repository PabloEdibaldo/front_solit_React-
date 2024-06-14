import { Link } from "react-router-dom";
const InicioColaborador = ({ user }) => {
    return (
        <>
            <div className="text-center">
                <h4>Bienvenido {user?.nombre_completo}</h4>
            </div>

            <div className="row">
                
                <div className="col-xl-3 col-md-6">
                    <div className="widget widget-stats bg-blue">
                        <div className="stats-icon">
                            <i className="fa fa-wrench" />
                        </div>
                        <div className="stats-info">
                            <h5>Solicitar Material</h5>
                        </div>
                        <div className="stats-link">
                            <Link to="/peticionmaterial/tecnicos">
                                Ir <i className="fa fa-arrow-alt-circle-right" />
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-md-6">
                    <div className="widget widget-stats bg-info">
                        <div className="stats-icon">
                            <i className="fa fa-calendar-alt" />
                        </div>
                        <div className="stats-info">
                            <h5>Calendario</h5>
                        </div>
                        <div className="stats-link">
                        <Link to="/peticionmaterial/calendario">
                                Ir <i className="fa fa-arrow-alt-circle-right" />
                        </Link>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-md-6">
                    <div className="widget widget-stats bg-orange">
                        <div className="stats-icon">
                            <i className="fa fa-briefcase" />
                        </div>
                        <div className="stats-info">
                            <h5>Mi material</h5>
                        </div>
                        <div className="stats-link">
                            <a href="javascript:;">
                                View Detail <i className="fa fa-arrow-alt-circle-right" />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-3 col-md-6">
                    <div className="widget widget-stats bg-red">
                        <div className="stats-icon">
                            <i className="fa fa-clock" />
                        </div>
                        <div className="stats-info">
                            <h5>Hora de entrada</h5>
                        </div>
                        <div className="stats-link">
                            <a href="javascript:;">
                                View Detail <i className="fa fa-arrow-alt-circle-right" />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default InicioColaborador;