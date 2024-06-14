import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const TableComponent = ({ columns, data = [], buttonAct, isProductTable }) => {
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [visibleColumns, setVisibleColumns] = useState(columns.map(col => col.accessor));
  const [isActivo, setIsActivo] = useState(false);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    let newData = data;

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        newData = newData.filter((item) =>
          item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
        );
      }
    });

    if (searchTerm) {
      newData = newData.filter((item) =>
        Object.values(item).some(
          (val) => val && val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredData(newData);
  }, [filters, data, searchTerm]);

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, [filteredData, page, rowsPerPage]);

  const handleFilterChange = (e, key) => {
    setFilters({
      ...filters,
      [key]: e.target.value,
    });
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1); // Reset to first page
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to first page
  };

  const handleColumnVisibilityChange = (selectedOptions) => {
    setVisibleColumns(selectedOptions.map(option => option.value));
  };

  const paginatedData = Array.isArray(filteredData) ? filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage) : [];
  const totalPages = Math.ceil(Array.isArray(filteredData) ? filteredData.length / rowsPerPage : 0);

  useEffect(() => {
    if (isProductTable) {
      const productsWithLowStock = Array.isArray(filteredData) ? filteredData.filter(item => item.stock === item.stock_minimo) : [];
      if (productsWithLowStock.length > 0) {
        //alert(`Alerta: Hay ${productsWithLowStock.length} productos con stock mínimo.`);
      }
    }
  }, [filteredData, isProductTable]);

  const getStatusColor = (status) => {
    switch (status) {
      case 0: // Available (green)
        return "#FF0000";
      case 1: // Unavailable (red)
        return "#008000";
      default: // Default color (optional)
        return "#ccc";
    }
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, page - halfVisiblePages);
    let endPage = Math.min(totalPages, page + halfVisiblePages);

    if (page - halfVisiblePages <= 0) {
      endPage = Math.min(totalPages, maxVisiblePages);
    }

    if (page + halfVisiblePages >= totalPages) {
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${i === page ? 'active' : ''}`}>
          <a className="page-link" href="#" onClick={() => handleChangePage(i)}>
            {i}
          </a>
        </li>
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(
        <li key="start-ellipsis" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
      pageNumbers.unshift(
        <li key={1} className={`page-item ${1 === page ? 'active' : ''}`}>
          <a className="page-link" href="#" onClick={() => handleChangePage(1)}>
            1
          </a>
        </li>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <li key="end-ellipsis" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
      pageNumbers.push(
        <li key={totalPages} className={`page-item ${totalPages === page ? 'active' : ''}`}>
          <a className="page-link" href="#" onClick={() => handleChangePage(totalPages)}>
            {totalPages}
          </a>
        </li>
      );
    }

    return pageNumbers;
  };

  const columnOptions = columns.map(col => ({ value: col.accessor, label: col.Header }));

  return (
    <div className="table-responsive shadow-sm rounded">
      <div className="">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => { setIsActivo(!isActivo) }} />
          <label class="form-check-label" for="flexCheckDefault">
            Mostrar columnas
          </label>
        </div>
        {isActivo && (
          <Select
            isMulti
            options={columnOptions}
            value={columnOptions.filter(option => visibleColumns.includes(option.value))}
            onChange={handleColumnVisibilityChange}
            closeMenuOnSelect={false}
          />
        )}
      </div>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className="d-flex align-items-center">
          <label className="me-2">Ver</label>
          <select className="form-select" value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {[10, 25, 50, 100].map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          <label className="ms-4"></label>
        </div>
        {buttonAct}
        <label className="ms-5"></label>
        <div>
          <label className="me-2">Buscar:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <table className="table table-hover table-responsive-sm">
        <thead>
          <tr>
            {columns.map((col) => (
              visibleColumns.includes(col.accessor) && (
                <th key={col.accessor} style={{ wordBreak: 'break-word', padding: '8px', textAlign: 'center' }}>
                  {col.Header}
                  {col.accessor !== 'actions' && (
                    <input
                      type="text"
                      placeholder={`Filtrar ${col.Header}`}
                      className="form-control mt-1"
                      onChange={(e) => handleFilterChange(e, col.accessor)}
                      style={{ width: '100%' }}
                    />
                  )}
                </th>
              )
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
              <tr key={index} className={isProductTable && item.stock === item.stock_minimo ? 'table-danger' : ''}>
                {columns.map((col) => (
                  visibleColumns.includes(col.accessor) && (
                    <td key={col.accessor} style={{ wordBreak: 'break-word', padding: '8px', textAlign: 'center' }}>
                      {col.accessor === 'actions' || col.accessor === 'info' ? col.Cell({ row: { original: item } }) :
                        col.accessor === 'ports' ?
                          item[col.accessor].map((port, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className='btn btn-sm'
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={`Cliente: ${port.nameClient || "--."}\nEstado: ${port.status === 1 ? "Ocupado." : "Disponible."}`}
                              style={{
                                backgroundColor: getStatusColor(port.status),
                                color: "#fff",
                                padding: "7px 6px",
                                fontSize: "10px",
                                minWidth: "26px",
                                marginRight: "5px",
                                marginBottom: "5px"
                              }}
                            >
                              {port.portNumber}
                            </button>
                          ))
                          : item[col.accessor]
                      }
                    </td>
                  )
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center p-3">
        <span className="text-muted">
          Mostrando de {(page - 1) * rowsPerPage + 1} a {Math.min(page * rowsPerPage, filteredData.length)} de {filteredData.length} registros
        </span>
        <ul className="pagination mb-0">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={() => handleChangePage(page - 1)}>
              &laquo;
            </a>
          </li>
          {renderPagination()}
          <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={() => handleChangePage(page + 1)}>
              &raquo;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableComponent;
