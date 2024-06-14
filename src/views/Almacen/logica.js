export function encontrarData(data, id) {
    return data.filter(item => item.id !== id);
}
export function encontrarEditar(data, id){
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return (data[i]);
          //  console.log(data[i]);
        }
        
    }
}
export function encontrarProducto(data, id){
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return (data[i]);
        }
        
    }
}
export function encontrarDataMayor(data, newData){
    let hoy = new Date();
    let fecha = hoy.getFullYear() + '-' + (hoy.getMonth() + 1).toString().padStart(2, '0') + '-' + hoy.getDate().toString().padStart(2, '0');
    const maxId = data.reduce((max, objeto) => objeto.id > max ? objeto.id : max, 0);
    const nuevoId = maxId + 1;
    const objetoConNuevoId = { ...newData, id: nuevoId, fecha_ingreso:fecha};
    data.push(objetoConNuevoId);
    return data
}
export function sustituirData(data, id, newData){
    const indice = data.findIndex(objeto => objeto.id === id);
      if (indice !== -1) {
        data[indice] = { ...data[indice], ...newData};
        return data;
      }
}
export function filtrarXstatus(data){
    return data.filter(item => item.status !== false);
}