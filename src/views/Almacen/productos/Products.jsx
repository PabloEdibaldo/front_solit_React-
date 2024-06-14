import React, { useState } from 'react';
import Table from '../../../components/Table';
import ModalCustom from '../../../components/Modal/Index';
import InputsData from '../components/CreateEdit/';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';

function Products({ data, resivedData, pdf, zonasProducto, response, user }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDevoluciones, setIsModalOpenDevoluciones] = useState(false);
  const [isModalOpenCodigoBarras, setisModalOpenCodigoBarras] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [isModalOpenPdf, setIsModalOpenPdf] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(''); // Estado para el mensaje de éxito o error
  const [idEliminar, setIdEliminar] = useState(null);
  const [isEliminar, setIsEliminar] = useState(false);
  const [usuario, setUsuario] = useState(false);
  const [cantidad, setCantidad] = useState(0);
  const [id, setId] = useState(null);
  const [barcodeText, setBarcodeText] = useState('');
  const handleSaveBarcodes = () => {
    const barcodeArray = barcodeText.split('\n').filter(code => code.trim() !== '');
    const objeto = {
      id_producto: id,
      codigosBarras: barcodeArray
    }
    resivedData(objeto, "Codigos");
    setisModalOpenCodigoBarras(false);
    toast.success("Se agregaron los codigos exitosamente");
  };
  const ZoneOptions = user.map(zona => ({ value: zona.id, label: zona.nombre_completo }));
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
    {
      Header: 'Acciones',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="btn-group" role="group">
          <button
            className="btn btn-transparent btn-sm"
            onClick={() => { handleEdit(row.original) }}
            title="Editar"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="btn btn-transparent btn-sm"
            onClick={() => { setIdEliminar(row.original.id), setIsEliminar(true) }}
            title="Eliminar"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            className="btn btn-transparent btn-sm"
            onClick={() => { setId(row.original.id), setIsModalOpenDevoluciones(true) }}
            title="Devolver Producto"
          >
            <i className="fas fa-redo-alt"></i>
          </button>
          <button
            className="btn btn-transparent btn-sm"
            onClick={() => { crearStockPorCdigoBarras(row.original.id) }}
            title="Ingresar producto por codigo de barras"
          >
            <i class="fas  fa-fw m-r-10 fa-barcode"></i>
          </button>
        </div>
      )
    }
  ];
  const crearStockPorCdigoBarras = (id) => {
    setId(id);
    setisModalOpenCodigoBarras(true);
  }

  const Zonas = zonasProducto.data.map(zonasData => ({
    value: zonasData.NombreZona,
    label: zonasData.NombreZona,
  }));

  const formFields = [
    { label: "Id Interno**", type: "text", name: "codigoInterno", isRequired: true, placeholder: "Id interno de la empresa..." },
    { label: "Nombre**", type: "text", name: "nombre_producto", isRequired: true, placeholder: "Nombre del producto..." },
    { label: "Marca", type: "text", name: "marca", isRequired: false, placeholder: "Marca del producto..." },
    { label: "Modelo", type: "text", name: "modelo", isRequired: false, placeholder: "Modelo del produto..." },
    { label: "Stock**", type: "number", name: "stock", isRequired: true, placeholder: "Stock del producto..." },
    { label: "Stock minimo**", type: "number", name: "stock_minimo", isRequired: true, placeholder: "Stock minimo del producto..." },
    { label: "Observaciones", type: "text", name: "observaciones", isRequired: false, placeholder: "Observaciones..." },
    { label: "Medida**", type: "text", name: "unidad_medida", isRequired: false, placeholder: "Unidad de medida..." },
    { label: "Empresa", type: "text", name: "empresa", isRequired: false, placeholder: "Empresa..." },
    { label: "Proveedor", type: "text", name: "proveedor", isRequired: false, placeholder: "Proveedor del producto..." },
    { label: "Categoria", type: "text", name: "categoria", isRequired: false, placeholder: "Categoria..." },
    { label: "Zona", type: "select", name: "zona", isRequired: true, placeholder: "Ubicacion del producto...", options: Zonas },
    { label: "Prestar", type: "checkbox", name: "productoParaPrestar", isRequired: false },
  ];

  const handleEdit = (product) => {
    setProductToEdit(product);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleEntrada = () => {
    const objeto = {
      id_producto: id,
      cantidad: cantidad,
      nombreSolicitante: usuario
    }
    resivedData(objeto, "Entrada");
    setIsModalOpenDevoluciones(false);
    toast.success('Producto ingresado correctamente');
  }

  const handleCantidad = (event) => {
    setCantidad(event.target.value);
  }

  const handleDelete = () => {
    resivedData(null, "Eliminar Producto", idEliminar);
    toast.success('Producto eliminado correctamente');
  };

  const hadleDataReceived = (data) => {
    if (isEditMode) {
      resivedData(data, "Actualizar Producto", productToEdit.id);
      toast.success('Producto actualizado correctamente');
    } else {
      resivedData(data, "Crear Producto", null);
      toast.success('Producto creado correctamente');
    }
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setProductToEdit(null);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleModalOpenPdf = () => {
    setUploadStatus('');
    setIsModalOpenPdf(true);
  };

  const hadleModalCloseDevolucion = () => {
    setIsModalOpenDevoluciones(false),
      setCantidad(null),
      setUsuario(null)
  };
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalClosePdf = () => {
    setIsModalOpenPdf(false);
    setSelectedFile(null);
  }

  const hadleModalCloseCodigoBarras = () => { setisModalOpenCodigoBarras(false), setBarcodeText(null) };

  const handleOkOrNot = (response) => {
    if (response) {
      handleModalClose();
    }
  };

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const subirPDF = () => {
    pdf(selectedFile)
    if (response.error.status === 200) {
      toast.success('PDF subido correctamente');
    } else {
      toast.error('Error al subir el PDF');
    }
    handleModalClosePdf();
  }

  const hadleReporte = (ruta) => { navigate(ruta) }

  return (
    <>
      <ToastContainer />
      {isEliminar ? (<>
        <div className="alert alert-danger d-flex justify-content-between" role="alert">
          ¿Estas seguro de eliminar este registro ?
          <div>
            <button type="button" class="btn btn-outline-success" onClick={() => { handleDelete(), setIsEliminar(false) }}>Aceptar</button>
            <button type="button" class="btn btn-outline-danger" onClick={() => { setIsEliminar(false) }}>Cancelar</button>
          </div>
        </div>
      </>) : null}
      <div className='d-flex justify-content-start mb-2'>
        <div class="btn-group " role="group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Opciones
          </button>
          <ul class="dropdown-menu">
            <div className=''>
              <li class="dropdown-item d-flex justify-content-between" onClick={handleModalOpen}>Nuevo producto <i className="fa fa-plus" /></li>
              <li class="dropdown-item  d-flex justify-content-between" onClick={handleModalOpenPdf}>Subir PDF <i className="fa fa-file-pdf" /></li>
              <li class="dropdown-item  d-flex justify-content-between" onClick={() => hadleReporte("/reportes")}>Reportes<i className="fa fa-tablet-alt" /></li>
            </div>
          </ul>
        </div>
      </div>
      <Table
        columns={columns}
        data={data}
        isProductTable={true} />

      <ModalCustom
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={isEditMode ? "Editar Producto" : "Crear Producto"}
        content={
          <InputsData
            fields={formFields}
            onDataReceived={hadleDataReceived}
            dataToEdit={productToEdit || {}}
            okOrNot={handleOkOrNot}
          />
        }
      />

      <ModalCustom
        isOpen={isModalOpenPdf}
        onClose={handleModalClosePdf}
        title={"Subir PDF"}
        content={
          <>
            <div class="mb-3">
              <label for="formFile" class="form-label">Seleccionar una factura de Syscom (PDF):</label>
              <input
                class="form-control"
                type="file"
                onChange={handleFileUpload}
                accept=".pdf"
              />
            </div>
          </>
        }
        footer={
          <>
            <button className="btn btn-success" onClick={subirPDF} disabled={!selectedFile}>Subir PDF</button>
            <button className="btn btn-danger" onClick={handleModalClosePdf}>Cancelar</button>
          </>
        }
      />

      <ModalCustom
        isOpen={isModalOpenDevoluciones}
        onClose={hadleModalCloseDevolucion}
        title={"Devolucion de Producto"}
        content={
          <>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label" >Cantidad:</label>
              <input type="number" min="0" class="form-control" id="formGroupExampleInput" placeholder="" onChange={handleCantidad} />
            </div>
            <label htmlFor="zonaSelect" className="form-label">Seleccionar Usuario:</label>
            <Select
              className='mb-2'
              name="type_service"
              options={ZoneOptions}
              onChange={(selectedOption) => { setUsuario(selectedOption.label) }}
            />
          </>
        }
        footer={
          <>
            <button className='btn btn-success' disabled={!cantidad && !usuario} onClick={() => { handleEntrada() }}>
              Aceptar
            </button>
          </>
        }
      />
      <ModalCustom
        isOpen={isModalOpenCodigoBarras}
        onClose={hadleModalCloseCodigoBarras}
        title={"Ingresar codigos de barras"}
        content={
          <>
            <textarea class="form-control" value={barcodeText} placeholder="Ingresar los codigos de barras" rows="10" cols="50" onChange={(e) => setBarcodeText(e.target.value)} />
          </>
        }
        footer={
          <>
            <button className='btn btn-success' disabled={!barcodeText} onClick={() => { handleSaveBarcodes() }}>
              Agregar
            </button>
          </>
        }
      />
    </>
  );
}
export default Products;