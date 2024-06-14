import { useEffect, useState } from "react";
import Table from "../../components/Table/";
const Configured = ({ data }) => {
    const [onus, setOnus] = useState([]);

    useEffect(() => {
        if (data && data.onus) {
            const modifiedOnus = data.onus.map((item, index) => ({
                ...item,
                key: index // o cualquier otra propiedad que sea única para cada elemento
            }));
            setOnus(modifiedOnus);
        }
    }, [data]);

    const columns = [
        { Header: "ID", accessor: "id" },
        { Header: "Nombre del router", accessor: "name" },
        { Header: "SN", accessor: "sn" },
        { Header: "Zona", accessor: "zone_name" },
        { Header: "Password", accessor: "password" },
        { Header: "OLT", accessor: "olt_name" },
        { Header: "Modo", accessor: "wan_mode" },
        { Header: "Status", accessor: "status" },
        {
            name: "Acciones", uid: "actions",
            Cell: ({row}) => (
                <div>
                    <div key={row.id} className="relative flex items-center gap-2">
                        <div>
                            {row.signal === 'Very good' && (
                                <i className="fa fa-battery-full" />
                            )}
                            {row.signal === 'Critical' && (
                                <i className="fa fa-battery-empty" />
                            )}
                            {row.signal === 'Warning' && (
                               <i className="fa fa-battery-half" />
                            )}
                        </div>
                    </div>
                </div>
            )
        },
    ]

    return (
        <>
            <div className="">
                <Table columns={columns} data={onus} buttonAct={<button className="btn btn-primary">Action</button>} />
            </div>
        </>
    )
}
export default Configured;