import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import useIsTablet from '@hooks/useIsTablet';

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
