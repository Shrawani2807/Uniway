// src/components/MapComponent.jsx with labeled buildings
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
  return (
    <MapContainer
      center={[18.748833, 73.607417]}
      zoom={19}
      maxZoom={21}
      style={{ height: '90vh', width: '100%' }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="&copy; Esri — Source: Esri, Maxar, Earthstar Geographics"
      />

      {/* Admin Block */}
      <Marker position={[18.749001, 73.607214]}>
        <Popup>🏛️ Admin Block</Popup>
        <Tooltip permanent direction="top">🏛️ Admin Block</Tooltip>
      </Marker>

      {/* Library */}
      <Marker position={[18.749001, 73.607214]}>
        <Popup>📚 Library(6th Floor)</Popup>
        <Tooltip permanent direction="top">📚 Library</Tooltip>
      </Marker>

      {/* Canteen */}
      <Marker position={[18.749019, 73.606857]}>
        <Popup>☕ Canteen</Popup>
        <Tooltip permanent direction="top">☕ Canteen</Tooltip>
      </Marker>

      {/* Hostel */}
      <Marker position={[18.749511, 73.606842]}>
        <Popup>🏠 Hostel</Popup>
        <Tooltip permanent direction="top">🏠 Hostel</Tooltip>
      </Marker>

      <Marker position={[18.749065, 73.606011]}>
        <Popup>🏠 A Block</Popup>
        <Tooltip permanent direction="top">🏠 A Block</Tooltip>
      </Marker>

      <Marker position={[18.748431, 73.605839]}>
        <Popup>🏠 B Block</Popup>
        <Tooltip permanent direction="top">🏠 B Block</Tooltip>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;