import { MapContainer, TileLayer } from 'react-leaflet';
import useIsMobile from '@hooks/useIsMobile';

type MapProps = {
  latitude: number;
  longitude: number;
};

const Map = ({ latitude, longitude }: MapProps) => {
  let isMobile = useIsMobile();
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={12}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={isMobile ? false : true}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default Map;
