const base = "http://172.16.15.37:8000/api/sistemaSolit/";

const config = {
    "endpoints":{
        "usuarios":{
            "url":`${base}almacenUsuarios/`,
        },
        "productos":{
            "url":`${base}almacenProdcutos/`,
        },
        "productos_individuales":{
            "url":`${base}almacenProductos_indiviaduales/`,
        },
        "merma":{
            "url":`${base}almacenMerma/`,
        },
        "carretes":{
            "url":`${base}almacenCarretes/`,
        },
        "reparto":{
            "url":`${base}reparto/`,
        },
        "productosFucionador":{
            "url":`${base}almacenProductosFucionador/`,
        },
        "almacenAlerta":{
            "url":`${base}almacenAlerta/`,
        },
        "pdf":{
            "post":`${base}upload-pdf/`,
        },
        "almacenMaterialInstacion":{
            "url":`${base}almacenMaterialInstalacion/`,
        },
        "zonasTrabajo":{
            "url":`${base}almacenZonasUsoMaterial/`
        },
        "historico":{
            "url":`${base}almacenHistoricoView/`
        }, 
        "pedido":{
            "url":`${base}almacenPedido/`
        }, 
        "nombrePdf":{
            "url":`${base}almacenNombrePdfsSubidosView/`
        },
        "auditLog":{
            "url":`${base}almacenAuditLogView/`
        },
        "filtroPedido":{
            "url":`${base}pedidos/`
        },
        "calendario":{
            "url":`${base}almacenCalendario/`
        },
        "productosPrestamo":{
            "url":`${base}almacenProductosPrestadosView/`
        },
        "usoProductos":{
            "url":`${base}almacenUsoProductoView/`
        },
        "devolucion":{
            "url":`${base}devolucionProducto/`
        },  
        "productoPorCodigoDeBarras":{
            "url":`${base}crearProductosPorCodigoDeBarras/`
        },  
        "sacarMaterialporCodigo":{
            "url":`${base}sacarMaterialPorCodigoBarras/`
        },
        
    }
}
export default config;
