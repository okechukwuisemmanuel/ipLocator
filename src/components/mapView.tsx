import {
  LayersControl,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Marker from "./locationMaker";
import { useState } from "react";
import { LatLngExpression } from "leaflet";

const MapView = () => {
  const [position, setPosition] = useState<LatLngExpression>([51.5072, 0.1276]);

  return (
    <MapContainer
      center={position}
      scrollWheelZoom
      minZoom={2}
      zoom={5}
      zoomControl={false}
    >
      <ZoomControl position="bottomleft" />
      <LayersControl position="bottomright" autoZIndex>
        <LayersControl.BaseLayer checked name="OpenStreet">
          <TileLayer
            noWrap={false}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            noWrap={false}
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Dark">
          <TileLayer
            noWrap={false}
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="marker">
          <Marker position={position} setPosition={setPosition} />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};
export default MapView;
