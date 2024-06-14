import React from 'react';
import TableComponent from '../../../../components/Table';

const IngresosRecientes = ({ data }) => {
  const recentProducts = data.filter(item => {
    const today = new Date();
    const fechaIngreso = new Date(item.fecha_ingreso);
    const diffTime = Math.abs(today - fechaIngreso);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30; 
  });
  const columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Observaciones', accessor: 'observaciones' },
    { Header: 'Fecha ingreso', accessor: 'fecha_ingreso' },
  ];
  
  return (
    <div>
      <div className='text-center'>
      <h5>Ingresos Recientes</h5>
      </div>
       
      <TableComponent
        data={recentProducts}
        columns={columns}
      />
    </div>
  );
};
export default IngresosRecientes;