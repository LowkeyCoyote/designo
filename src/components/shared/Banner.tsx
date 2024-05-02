import { HTMLAttributes } from 'react';

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  image: string;
  positionImage: string;
}

const Banner = ({ title, subtitle, image, positionImage }: BannerProps) => {
  return (
    <div
      className={`rounded-lg bg-peach bg-no-repeat py-16 text-center sm:rounded-none sm:py-28 ${image} ${positionImage}`}
    >
      <h1 className="mb-6 text-white">{title}</h1>
      <p className="mx-auto w-[40%] font-light tracking-wide text-white file:md:w-[60%] sm:w-[90%] ">
        {subtitle}
      </p>
    </div>
  );
};

export default Banner;
