import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useApiRequest from '../../../hooks/useApiRequest';

const MapaLeafle = () => {
    const { data: coordenadas, loading, error } = useApiRequest("http://172.16.15.37:8080/api/users/consultClientCoordinates/", "GET", null, null, null, null);

    const position = [18.43007073304424, -97.39844658372027];

    // Define the custom icon
    const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='font-size: 24px; color: blue;'><i class='fas  fa-user'></i> </div>",
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <MapContainer
                center={position}
                zoom={15}
                style={{ height: "90vh", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {coordenadas && coordenadas.map((coordenada, idx) => (
                    <Marker
                        key={idx}
                        position={[parseFloat(coordenada.coordinatesX), parseFloat(coordenada.coordinatesY)]}
                        icon={customIcon}
                    >
                        <Popup><i class='fas  fa-user'></i> :<b>{coordenada.nameClient}</b><br/>
                        <i class="fas  fa-cube"></i> :{coordenada.packageInternet} <br/>
                        <i class="fas fa-map-marker-alt"></i> :{coordenada.location}<br/>
                        <i class="fas  fa-globe"></i> :{coordenada.ip}<br/>
                        <i class="fas  fa-phone"></i> :{coordenada.phoneNumber}<br/>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default MapaLeafle;
