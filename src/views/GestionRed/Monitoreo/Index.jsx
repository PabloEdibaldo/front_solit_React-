import TableComponent from "../../../components/Table";
const Monitoreo = () =>{
    return(
        <>
        <div className="col-xl-12">

<div className="panel panel-inverse" data-sortable-id="table-basic-1">

  <div className="panel-heading">
    <h4 className="panel-title">Monitoreo</h4>
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
        
        </>
    )
}
export default Monitoreo;