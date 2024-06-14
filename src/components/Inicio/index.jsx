import TableComponent from "../Table";
const Inicio = ({ user }) => {
  return (
    <>
      <div className="text-center">
        <h4>Bienvenido {user?.nombre_completo}</h4>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-teal">
            <div className="stats-icon stats-icon-lg">
              <i className="fa fa-globe fa-fw" />
            </div>
            <div className="stats-content">
              <div className="stats-title">Clientes Online</div>
              <div className="stats-number"> cliente </div>
              <div className="stats-progress progress">
                <div className="progress-bar" style={{ width: "70.1%" }} />
              </div>
              <div className="stats-desc">Better than last week (70.1%)</div>
              <div className="stats-link">
                <a href="javascript:;">
                  Ver clientes <i className="fa fa-arrow-alt-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-blue">
            <div className="stats-icon stats-icon-lg">
              <i className="fa fa-dollar-sign fa-fw" />
            </div>
            <div className="stats-content">
              <div className="stats-title">Transacciones hoy</div>
              <div className="stats-number">180,200</div>
              <div className="stats-progress progress">
                <div className="progress-bar" style={{ width: "40.5%" }} />
              </div>
              <div className="stats-desc">Better than last week (40.5%)</div>
            </div>
            <div className="stats-link">
                <a href="javascript:;">
                  Ver transacciones <i className="fa fa-arrow-alt-circle-right" />
                </a>
              </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-indigo">
            <div className="stats-icon stats-icon-lg">
              <i className="fa fa-archive fa-fw" />
            </div>
            <div className="stats-content">
              <div className="stats-title">Facturas no pagadas</div>
              <div className="stats-number">38,900</div>
              <div className="stats-progress progress">
                <div className="progress-bar" style={{ width: "76.3%" }} />
              </div>
              <div className="stats-desc">Better than last week (76.3%)</div>
            </div>
            <div className="stats-link">
                <a href="javascript:;">
                  Ver facturas <i className="fa fa-arrow-alt-circle-right" />
                </a>
              </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-dark">
            <div className="stats-icon stats-icon-lg">
              <i className="fa fa-comment-alt fa-fw" />
            </div>
            <div className="stats-content">
              <div className="stats-title">Ticket soporte</div>
              <div className="stats-number">3,988</div>
              <div className="stats-progress progress">
                <div className="progress-bar" style={{ width: "54.9%" }} />
              </div>
              <div className="stats-desc">Better than last week (54.9%)</div>
            </div>
            <div className="stats-link">
                <a href="javascript:;">
                  Ver tickets <i className="fa fa-arrow-alt-circle-right" />
                </a>
              </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* begin col-8 */}
        <div className="col-xl-8">
          <div className="widget-chart with-sidebar inverse-mode">
            <div className="widget-chart-content bg-dark">
              <h4 className="chart-title">
                Trafico de clientes
                <small>Ultimos 7 dias</small>
              </h4>
              <div
                id="visitors-line-chart"
                className="widget-chart-full-width nvd3-inverse-mode"
                style={{ height: 260 }}
              />
            </div>
            <div className="widget-chart-sidebar bg-dark-darker">
              <div className="chart-number">
                1,225,729
                <small>Total visitors</small>
              </div>
              <div className="flex-grow-1 d-flex align-items-center">
                <div
                  id="visitors-donut-chart"
                  className="nvd3-inverse-mode"
                  style={{ height: 180 }}
                />
              </div>
              <ul className="chart-legend f-s-11">
                <li>
                  <i className="fa fa-circle fa-fw text-blue f-s-9 m-r-5 t-minus-1" />{" "}
                  34.0% <span>New Visitors</span>
                </li>
                <li>
                  <i className="fa fa-circle fa-fw text-teal f-s-9 m-r-5 t-minus-1" />{" "}
                  56.0% <span>Return Visitors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end col-8 */}
        {/* begin col-4 */}
        <div className="col-xl-4">
          <div className="panel panel-inverse" data-sortable-id="index-1">
            <div className="panel-heading">
              <h4 className="panel-title">Resumen del sistema</h4>
            </div>
            <div
              id="visitors-map"
              className="bg-dark-darker"
              style={{ height: 179 }}
            />
            <div className="list-group">
              <a
                href="javascript:;"
                className="list-group-item list-group-item-action list-group-item-inverse d-flex justify-content-between align-items-center text-ellipsis"
              >
                1. United State
                <span className="badge bg-teal f-s-10">20.95%</span>
              </a>
              <a
                href="javascript:;"
                className="list-group-item list-group-item-action list-group-item-inverse d-flex justify-content-between align-items-center text-ellipsis"
              >
                2. India
                <span className="badge bg-blue f-s-10">16.12%</span>
              </a>
              <a
                href="javascript:;"
                className="list-group-item list-group-item-action list-group-item-inverse d-flex justify-content-between align-items-center text-ellipsis"
              >
                3. Mongolia
                <span className="badge bg-silver-darker f-s-10">14.99%</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6">

          <div className="panel panel-inverse" data-sortable-id="table-basic-1">

            <div className="panel-heading">
              <h4 className="panel-title">Ultimos pagos registrados</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>

            <div className="panel-body">
              {/* begin table-responsive */}
              <div className="table-responsive">
                <table className="table m-b-0">
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Cobrador</th>
                      <th>Operador</th>
                      <th>Tiempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nicky Almera</td>
                      <td>nicky@hotmail.com</td>
                      <td>jfhsj</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Edmund Wong</td>
                      <td>edmund@yahoo.com</td>
                      <td>hddñl</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Harvinder Singh</td>
                      <td>harvinder@gmail.com</td>
                      <td>ahah</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end table-responsive */}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          {/* begin card */}
          <div className="card border-0 bg-dark-darker text-white mb-3">
            {/* begin card-body */}
            <div
              className="card-body"
              style={{
                background: "no-repeat bottom right",
                backgroundImage: "url(../assets/img/svg/img-4.svg)",
                backgroundSize: "auto 60%"
              }}
            >
              {/* begin title */}
              <div className="mb-3 text-grey">
                <b>Datos del servidor</b>
                <span className="text-grey ml-2">
                  <i
                    className="fa fa-info-circle"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-title="Sales by social source"
                    data-placement="top"
                    data-content="Total online store sales that came from a social referrer source."
                  />
                </span>
              </div>

            </div>
            {/* end card-body */}
            {/* begin widget-list */}
            <div className="widget-list widget-list-rounded inverse-mode">
              {/* begin widget-list-item */}
              <a href="#" className="widget-list-item rounded-0 p-t-3">
                <div className="widget-list-media icon">
                  <i className="fas fa-microchip bg-indigo text-white" />
                </div>
                <div className="widget-list-content">
                  <div className="widget-list-title">CPU Cores</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  $
                  <span data-animation="number" data-value="34840.17">
                    0.00
                  </span>
                </div>
              </a>
              {/* end widget-list-item */}
              {/* begin widget-list-item */}
              <a href="#" className="widget-list-item">
                <div className="widget-list-media icon">
                  <i className="fa fa-server bg-blue text-white" />
                </div>
                <div className="widget-list-content">
                  <div className="widget-list-title">Carga promedio</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  $
                  <span data-animation="number" data-value="12502.67">
                    0.00
                  </span>
                </div>
              </a>
              {/* end widget-list-item */}
              {/* begin widget-list-item */}
              <a href="#" className="widget-list-item">
                <div className="widget-list-media icon">
                  <i className="fa fa-newspaper bg-aqua text-white" />
                </div>
                <div className="widget-list-content">
                  <div className="widget-list-title">Mem</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  $
                  <span data-animation="number" data-value="4799.20">
                    0.00
                  </span>
                </div>
              </a>
              {/* end widget-list-item */}
              {/* begin widget-list-item */}
              <a href="#" className="widget-list-item">
                <div className="widget-list-media icon">
                  <i className="fa fa-hdd bg-red text-white" />
                </div>
                <div className="widget-list-content">
                  <div className="widget-list-title">Disco</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  $
                  <span data-animation="number" data-value="3405.85">
                    0.00
                  </span>
                </div>
              </a>
              {/* end widget-list-item */}
              {/* begin widget-list-item */}
              <a href="#" className="widget-list-item p-b-3">
                <div className="widget-list-media icon">
                  <i className="fa fa-file bg-pink text-white" />
                </div>
                <div className="widget-list-content">
                  <div className="widget-list-title">Ultima copia de seguridad</div>
                </div>
                <div className="widget-list-action text-nowrap text-grey">
                  $
                  <span data-animation="number" data-value={0.0}>
                    0.00
                  </span>
                </div>
              </a>
              {/* end widget-list-item */}
            </div>
            {/* end widget-list */}
          </div>
          {/* end card */}
        </div>

        <div className="col-xl-12">

          <div className="panel panel-inverse" data-sortable-id="table-basic-1">

            <div className="panel-heading">
              <h4 className="panel-title">Resumen Facturacion</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>

            <div className="panel-body">
              {/* begin table-responsive */}
              <div className="table-responsive">
                <table className="table m-b-0">
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Cobrador</th>
                      <th>Operador</th>
                      <th>Tiempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nicky Almera</td>
                      <td>nicky@hotmail.com</td>
                      <td>jfhsj</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Edmund Wong</td>
                      <td>edmund@yahoo.com</td>
                      <td>hddñl</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Harvinder Singh</td>
                      <td>harvinder@gmail.com</td>
                      <td>ahah</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end table-responsive */}
            </div>
          </div>
        </div>
        <div className="col-xl-12">

          <div className="panel panel-inverse" data-sortable-id="table-basic-1">

            <div className="panel-heading">
              <h4 className="panel-title">Emisores</h4>
              <div className="panel-heading-btn">
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-default"
                  data-click="panel-expand"
                >
                  <i className="fa fa-expand" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-success"
                  data-click="panel-reload"
                >
                  <i className="fa fa-redo" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-warning"
                  data-click="panel-collapse"
                >
                  <i className="fa fa-minus" />
                </a>
                <a
                  href="javascript:;"
                  className="btn btn-xs btn-icon btn-circle btn-danger"
                  data-click="panel-remove"
                >
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>

            <div className="panel-body">
              {/* begin table-responsive */}
              <div className="table-responsive">
                <table className="table m-b-0">
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Cobrador</th>
                      <th>Operador</th>
                      <th>Tiempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nicky Almera</td>
                      <td>nicky@hotmail.com</td>
                      <td>jfhsj</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Edmund Wong</td>
                      <td>edmund@yahoo.com</td>
                      <td>hddñl</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Harvinder Singh</td>
                      <td>harvinder@gmail.com</td>
                      <td>ahah</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end table-responsive */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Inicio;