import { HTMLAttributes } from 'react';
import 'leaflet/dist/leaflet.css';
import Map from '@components/shared/Map';

interface LocationContainerProps extends HTMLAttributes<HTMLDivElement> {
  country: string;
  office: string;
  adressStreet: string;
  adressCity: string;
  telephone: string;
  mail: string;
  reverse?: boolean;
  longitude: number;
  latitude: number;
}

const LocationContainer = ({
  country,
  office,
  adressStreet,
  adressCity,
  telephone,
  mail,
  longitude,
  latitude,
  reverse = false,
}: LocationContainerProps) => {
  return (
    <div className="mb-8 grid grid-cols-3 grid-rows-1 gap-8 md:mb-0 md:grid-cols-1 md:grid-rows-2 md:gap-0 ">
      <div
        className={`bg-pattern-two-circle col-span-2 rounded-lg bg-[#FDF3F0] bg-left-bottom bg-no-repeat px-24 py-20 text-start ${reverse ? `order-last` : ``} 
        sm:bg-pattern-three-circle md:order-last md:mb-8 md:px-20 sm:bg-left-top sm:text-center`}
      >
        <h2 className="pb-6 text-4xl text-peach">{country}</h2>
        <div className="align-center flex gap-32 md:gap-28 sm:flex-col sm:gap-6 ">
          <div>
            <p className="mb-1 font-bold">{office}</p>
            <p className="mb-1">{adressStreet}</p>
            <p className="mb-1">{adressCity}</p>
          </div>
          <div>
            <p className="mb-1 font-bold">Contact</p>
            <p className="mb-1">{telephone}</p>
            <p className="mb-1">{mail}</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 overflow-hidden rounded-lg bg-peach md:mb-8 sm:z-10 sm:mb-0 sm:rounded-none">
        <Map latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

export default LocationContainer;
