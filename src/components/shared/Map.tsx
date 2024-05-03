import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import useIsTablet from '@hooks/useIsTablet';
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet"
import "leaflet/dist/leaflet.css"

let defaultIcon = L.icon({
    iconUrl : icon
})

L.Marker.prototype.options.icon = defaultIcon;


type MapProps = {
  latitude: number;
  longitude: number;
};

const Map = ({ latitude, longitude }: MapProps) => {
  let isTablet = useIsTablet();
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={12}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={isTablet ? false : true}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}/>

    </MapContainer>
  );
};

export default Map;
