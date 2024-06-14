const base = "http://172.16.15.37:8080/api/"
const config = {
    "endpoints": {
        "obtenerClientes": {
            "get": `${base}users/getAllUserConfigured/`
        },
        "internet": {
            "get": `${base}internet/package/`,
            "post": `${base}internet/package/`,
            "put": `${base}internet/package/updatePackage/`,
            "delete": `${base}internet/package/deletePackage/`
        },
        "crearCliente": {
            "post": "billing"
        },
        "mensajesDeWhatsapp":{
            "put":`${base}messages`
        }
    }
};
export default config;