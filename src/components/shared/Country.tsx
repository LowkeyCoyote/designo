import { HTMLAttributes } from 'react';
import Button from './ui/Button';

interface LocationProps extends HTMLAttributes<HTMLDivElement> {
  location: string;
  image: string;
}

const Location = ({ location, image }: LocationProps) => {
  return (
    <div className="bg-small-circle flex flex-col justify-center bg-top bg-no-repeat">
      <img
        className="mx-auto mb-12 w-[202px]  sm:mx-auto sm:mb-10"
        src={image}
        alt=""
      />
      <div className="text-center">
        <h3 className=" mb-8 text-xl uppercase tracking-wider">{location}</h3>
        <Button variant="dark" link="/locations">
          See Location
        </Button>
      </div>
    </div>
  );
};

export default Location;
