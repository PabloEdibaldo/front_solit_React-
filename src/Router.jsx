import { Routes, Route, useNavigate } from "react-router-dom";
//almacen solit//
import Login from './components/Login/Index';
import Table from './components/Table/index';
import Inicio from "./components/Inicio";
import ProductsTab from "./views/Almacen/productos/ProductsTab";
import UserTap from './views/Almacen/usuarios/UsersTap';
import MaterialTap from './views/Almacen/material/Material';
import ZonasTap from './views/Almacen/zonas/Zonas';
import HisorialTab from './views/Almacen/historial/HistorialTab';
import SmartOlt from "./views/SmartOlt/";
import NewClinet from "./views/Usuarios/Clientes/NewClient";
import Routers from './views/GestionRed/RoutersM/Index'
import Clientes from './views/Usuarios/Clientes/Index'
import InicioColaborador from "./components/Inicio/InicioColaboradores";
import MapaLeafle from "./views/Usuarios/MapaLeafle/Index";
import HojaDeServicioTap from "./views/Almacen/hojasDeServicio/HojaDeServicioTap";
import PdfSyscom from "./views/Almacen/Pdf/Index";
import Mensaje from "./views/Usuarios/Mensajes/Index";
import TablaHistorialCrud from "./views/Administracion/Index";
import RepoteProductos from "./views/Almacen/productos/ReportesProductos/Index"
//gestion red
import CajasNap from './views/GestionRed/CajasNap/Index';
import RedIov4 from './views/GestionRed/RedIpv4/Index';
import Monitoreo from './views/GestionRed/Monitoreo/Index';
import InfoUser from './views/Usuarios/Clientes/InfoUser';

import Paquetes from "./views/Usuarios/Paquetes/Index";
//peticiones de material por parte de los tecnicos;
import PeticionMaterial from './views/Almacen/material/Peticion';
import Calendario from './views/Almacen/Permisos/Calendario/Index';

import PaginaFactura from "./views/Usuarios/Clientes/rtk/PaginaFactura";

const AppRoutes = ({ user }) => {

    return (
        <Routes>

            <Route path="/" element={<Login />} />

            {user?.tipo_rol === "admin" && (
                <>
                    <Route path="/tabla" element={<Table />} />
                    <Route path="/ProductsTab" element={<  ProductsTab />} />
                    <Route path="/inicio" element={<Inicio user={user} />} />
                    <Route path="/usuarios" element={<UserTap />} />
                    <Route path="/material" element={<MaterialTap user={user} />} />
                    <Route path="/zonas" element={<ZonasTap />} />
                    <Route path="/historial" element={<HisorialTab />} />
                    <Route path="/smartOlt" element={<SmartOlt />} />
                    <Route path="/peticionmaterial/tecnicos" element={<PeticionMaterial dataUser={user} />} />
                    <Route path="/GestionRed/Routers" element={<Routers />} />
                    <Route path="/hojasDeServicio" element={<HojaDeServicioTap />} />
                    <Route path="/pdfSyscom" element={<PdfSyscom />} />
                    <Route path="/mensajes" element={<Mensaje />} />
                    <Route path="/historialCrud" element={<TablaHistorialCrud />} />
                    <Route path="/reportes" element={<RepoteProductos />} />

                    {/*---------------------------Servicios---------------------------------------*/}
                    <Route path="/servicios/InternetPaquetes" element={<Paquetes />} />
                    

                    {/*---------------------------Gestion red---------------------------------------*/}
                    <Route path="/gestionRed/cajasNap" element={<CajasNap />} />
                    <Route path="/gestionRed/redIpv4" element={<RedIov4 />} />
                    <Route path="/gestionRed/monitoreo" element={<Monitoreo />} />
                    <Route path="/gestionRed/mapaLeafle" element={<MapaLeafle />} />

                    {/*---------------------------Clientes---------------------------------------*/}

                    <Route path="/clientes/clientesCreados" element={<Clientes />} />
                    <Route path="/clientes/nuevoCliente" element={<NewClinet />} />
                    <Route path="/clientes/InfoUser/:id" element={<InfoUser />} />
                    <Route path="/peticionmaterial/calendario" element={<Calendario />} />
                    <Route path="/clientes/map" element={<MapaLeafle />} />
                    <Route path="/clientes/factura" element={<PaginaFactura />} />


                </>
            )}{user?.tipo_rol === "tecnico" || user?.tipo_rol === "fucion" ? (
                <>
                    <Route path="/inicio" element={<InicioColaborador user={user} />} />
                    <Route path="/peticionmaterial/tecnicos" element={<PeticionMaterial dataUser={user} />} />
                    <Route path="/peticionmaterial/calendario" element={<Calendario />} />
                    <Route path="/hojasDeServicio" element={<HojaDeServicioTap />} />
                </>
            ) : null}
        </Routes>
    )
}
export default AppRoutes;


