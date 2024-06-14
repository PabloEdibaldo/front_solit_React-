import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TableComponent from '../../../../components/Table';

function StockMinimoPorZona({ data }) {
    const productosAgrupadosPorZona = agruparProductosPorZona(data);
    console.log(productosAgrupadosPorZona);
    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Nombre", accessor: "nombre_producto" },
        { Header: "Código", accessor: "codigoInterno" },
        { Header: "Marca", accessor: "marca" },
        { Header: "Modelo", accessor: "modelo" },
        { Header: "Stock", accessor: "stock" },
        { Header: "Stock Mínimo", accessor: "stock_minimo" },
        { Header: "Observaciones", accessor: "observaciones" },
    ];

    return (
        <div className="accordion" id="accordionExample">
            {Object.keys(productosAgrupadosPorZona).map((zona, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading-${index}`}>
                        <button
                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index}`}
                            aria-expanded={index === 0 ? 'true' : 'false'}
                            aria-controls={`collapse-${index}`}
                        >
                            <h6>{zona}</h6>
                        </button>
                    </h2>
                    <div
                        id={`collapse-${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        aria-labelledby={`heading-${index}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>Productos en {zona}:</strong>
                            <TableComponent columns={columns} data={productosAgrupadosPorZona[zona]} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const agruparProductosPorZona = (data) => {
    return data.reduce((acc, producto) => {
        const zona = producto.zona || "Sin Zona";
        if (!acc[zona]) {
            acc[zona] = [];
        }
        acc[zona].push(producto);
        return acc;
    }, {});
};
export default StockMinimoPorZona;