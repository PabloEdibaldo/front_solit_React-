import React from 'react'
import Table from '../../../../components/Table/';
function ProductosConStockMinimo({ data }) {
    const productosConStockMinimo = data.filter(item => item.stock <= item.stock_minimo);
    const columns = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Nombre del producto', accessor: 'nombre_producto' },
        { Header: 'Codigo Interno', accessor: 'codigoInterno' },
        { Header: 'Categoria', accessor: 'categoria' },
        { Header: 'Empresa', accessor: 'empresa' },
        { Header: 'Fecha de ingreso', accessor: 'fecha_ingreso' },
        { Header: 'Marca', accessor: 'marca' },
        { Header: 'Modelo', accessor: 'modelo' },
        { Header: 'Observaciones', accessor: 'observaciones' },
        { Header: 'Stock', accessor: 'stock' },
        { Header: 'Stock_minimo', accessor: 'stock_minimo' },
        { Header: 'Unidad_medida', accessor: 'unidad_medida' },
        { Header: 'Zona', accessor: 'zona' },
    ];

    return (
        <div>
            <div className='text-center'> 
            <h5>Productos menores al stock mínimo.</h5>
            </div>
            
            
            <Table
                columns={columns}
                data={productosConStockMinimo}
            />
            
        </div>
    )
}
export default ProductosConStockMinimo