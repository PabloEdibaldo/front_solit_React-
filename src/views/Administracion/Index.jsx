import useApiRequest from "../../hooks/useApiRequest";
import config from "../../api/apiConfig";
import TableComponent from "../../components/Table";

const TablaHistorialCrud = () => {
    const historia = useApiRequest(config.endpoints.auditLog.url, "GET", null, null, null);
    const usuario = useApiRequest(config.endpoints.usuarios.url, "GET", null, null, null);
    
    const buscarUsuario = (data) => {
        const user = usuario.data.find(user => user.id === data);
        return user ? user.nombre_completo : "No se encontró el usuario";
    };

    const formateoFecha = (data) => {
        const date = new Date(data);
        const formattedDate = date.toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        return formattedDate;
    }

    const columns = [
        { Header: 'id', accessor: 'id' },
        { Header: 'Accion', accessor: 'action' },
        { Header: 'Modelo', accessor: 'model_name' },
        {
            Header: 'Informacion',
            accessor: 'info',
            Cell: ({ row }) => (
                <>
                    <div className="btn-group" role="group">
                        {buscarUsuario(row.original.object_id)}
                    </div>
                </>
            )
        },
        {
            Header: 'Acciones',
            accessor: 'actions',
            Cell: ({ row }) => (
                <>
                    <div className="btn-group" role="group">
                        {formateoFecha(row.original.timestamp)}
                    </div>
                </>
            )
        }, 
    ];

    return (
        <>
            <TableComponent
                columns={columns}
                data={historia.data}
            />
        </>
    )
}
export default TablaHistorialCrud;