import React from 'react'
import useApiRequest from "../../../../hooks/useApiRequest";
import config from "../../../../api/apiConfig";
import StockPorCategoria from './StockPorCategoria';
import ProductosConStockMinimo from './ProductosConStockMinimo';
import ProductosPorZona from './ProductosPorZona';
import IngresosRecientes from './IngresosRecientes';
import StockMinimoPorZona from './StockMinimoPorZona';
import { useState } from 'react';
function RepoteProductos() {
    const [activeTab, setActiveTab] = useState('productosStockMinimo');
    const productos = useApiRequest(config.endpoints.productos.url, "GET", null, null, null);

    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'productosStockMinimo' ? 'active' : ''}`} onClick={() => setActiveTab('productosStockMinimo')} >Productos menores al stock minimo</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'productosPorCategoria' ? 'active' : ''}`} onClick={() => setActiveTab('productosPorCategoria')} >Filtro por categorias</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'productosStocMinimoPorZona' ? 'active' : ''}`} onClick={() => setActiveTab('productosStocMinimoPorZona')} >Productos por zona</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'ingresoReciente' ? 'active' : ''}`} onClick={() => setActiveTab('ingresoReciente')} >Ingresos recientes</a>
                </li>  
            </ul>
            <div className='container'>
                <div class="alert alert-success text-center" role="alert">
                <h5 class="fw-bold">REPORTES</h5>
                </div>
            </div>

            {activeTab === 'productosStockMinimo' && (
                <div className="tab-pane fade show active">
                    <ProductosConStockMinimo data={productos.data} />
                </div>
            )}
            {activeTab === 'productosPorCategoria' && (
                <div className="tab-pane fade show active">
                    <StockPorCategoria data={productos.data} />
                </div>
            )}
            {activeTab === 'productosStocMinimoPorZona' && (
                <div className="tab-pane fade show active">
                    <StockMinimoPorZona data={productos.data} />
                </div>
            )}
            {activeTab === 'ingresoReciente' && (
                <div className="tab-pane fade show active">
                    <IngresosRecientes data={productos.data} />
                </div>
            )}
        </>

    )
}

export default RepoteProductos