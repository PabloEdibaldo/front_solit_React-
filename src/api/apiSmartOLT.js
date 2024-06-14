// api.js

// // Función para hacer una petición GET usando Fetch
// async function hacerPeticionGET(url, apiKey) {
//     const opciones = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//       }
//     };
  
//     try {
//       const response = await fetch(url, opciones);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Hubo un problema con la petición fetch:', error);
//       throw error;
//     }
//   }
  
//   // Exportar la función para hacer la petición GET
// export { hacerPeticionGET };


 const base = "http://172.16.15.37:8081/api/SmartOlt/";
 const config = {
     "endpoints":{
         "ObtenerOnusTotales":{
             "get":`${base}get_all_onus_details/`
         },
         "ObtenerPerfiles":{
             "get":`${base}get_speed_profiles/`
         },
         "GetAllUnconfiguredONUs":{
             "get":`${base}GetAllUnconfiguredONUs/`
         },
         "ListOLT":{
            "get":`${base}ListOLT/`
         },
         "getZones":{
             "get":`${base}getZones/`
         },
         "GetODBsList":{
             "get":`${base}GetODBsList/`
         },
         "GetONUTypesList":{
             "get":`${base}GetONUTypesList/`
         },
         "GetSpeedProfilesList":{
             "get":`${base}GetSpeedProfilesList/`
         },
         "OnuGetAllOnusDetails":{
             "get":`${base}OnuGetAllOnusDetails/`
         },
         "GetVlans":{
             "get":`${base}GetVlans/`
         },
         "AuthorizeONU":{
             "post":`${base}AuthorizeONU/`
         }
     }
 }
 export default config