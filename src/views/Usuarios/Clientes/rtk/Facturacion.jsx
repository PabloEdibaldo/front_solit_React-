import React from 'react'
import Table from '../../../../components/Table';
import useApiRequest from "../../../../hooks/useApiRequest";
import apiUser from "../../../../api/apiUser.json";
import { useState } from 'react';
function Facturacion({idFacturacion}) {

  
    const [estadoCrud, setEstadoCrud] = useState("GET");
    const [valuesD, setValuesD] = useState([]);
    const [id, setId] = useState(null);
    const materiales = useApiRequest(`${apiUser.apiBaseURL}${apiUser.endpoints.contentBilling.get}${idFacturacion}`, estadoCrud, valuesD, id, null);
    
    const modifyData = (data) => {
        return data.map(item => ({
            ...item,
            pay: item.pay ? <button type="button" class="btn btn-primary "   style={{'--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem'}}>Si</button>  : <button type="button" class="btn btn-danger "   style={{'--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem'}}>No</button> ,
            chargeId: item.chargeId ? item.chargeId : "N/A",
            serviceCut: item.serviceCut ? <button type="button" class="btn btn-success"   style={{'--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem'}}>Cortado</button>  :<button type="button" class="btn btn-success"   style={{'--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem'}}>Activo</button> 
        }));
    };

    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Nombre cliente", accessor: "nameClient", },
        { Header: "Tipo de pago", accessor: "paymentType" },
        { Header: "Cantidad", accessor: "price" },
        { Header: "Inicio factura", accessor: "billingInit" },
        { Header: "Fin factura", accessor: "billingEnd" },
        { Header: "Paquete", accessor: "packageInternetName" },
        { Header: "Pagado", accessor: "pay" },
        { Header: "Numero de cargo", accessor: "chargeId" },
        { Header: "Status", accessor: "serviceCut" },
        { Header: "Numero ", accessor: "numberPhoneClient" },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
              <div className="btn-group" role="group">
                <button
                  className="btn btn-transparent btn-sm"
                  onClick={() => handleDelete(row.original.id)}
                  title="Eliminar"
                >
                 <i class="far  fa-file-pdf"></i>
                </button>

                <button
                  className="btn btn-transparent btn-sm"
                  onClick={() => handleDelete(row.original.id)}
                  title="Eliminar"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn-transparent btn-sm"
                  onClick={() => handleDelete(row.original.id)}
                  title="Eliminar"
                >
                  <i class="fas fa-edit"></i>
                </button>
              </div>
            )
          }
    ];
    
 

    const modifiedData = materiales.data ? modifyData(materiales.data) : [];


    return (
        <div>

            {materiales.loading ? (
                <div className="d-flex justify-content-center">
                    <i className="fas fa-spinner fa-pulse"></i>
                </div>
            ) : (
                <Table columns={columns} data={modifiedData} />
            )}

        </div>
    )
}

export default Facturacion
