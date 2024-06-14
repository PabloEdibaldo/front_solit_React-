import { useState, useEffect } from "react";
import Table from '../../../components/Table/index'


function ProductosIndividuales({ datos, loading, resivedData, recarga }) {
  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Nombre del producto", accessor: "nombre_producto_individual" },
    { Header: "Codigo de barras", accessor: "codigo_barras" },
    { Header: "Estado", accessor: "estado" },
    {
      Header: 'Acciones',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="btn-group" role="group">
          <button
            className="btn btn-transparent btn-sm"
            onClick={() => handleEdit(row.original)}
            title="Editar"
          >
            <i className="fas fa-edit"></i>
          </button>
        </div>
      )
    }
  ];

  return (
    <>
      {loading ? (
        <div class="fa-3x text-center">
          <i class="fas fa-spinner fa-pulse"></i>
        </div>

      ) : (
        <div className="">
          <Table columns={columns} data={datos}/>
        </div>
      )}
    </>
  )
}
export default ProductosIndividuales;
