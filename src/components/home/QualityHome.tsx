import { HTMLAttributes } from 'react';

interface QualityHomeProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  image: string;
  altText: string;
}

const QualityHome = ({ title, subtitle, image, altText }: QualityHomeProps) => {
  return (
    <div
      className="flex flex-col justify-center bg-small-circle bg-top bg-no-repeat text-center
    md:flex-row md:items-center md:bg-left-top sm:flex-col sm:bg-top sm:px-6
    "
    >
      <img className="mx-auto mb-12 w-[202px] md:mb-0 md:mr-8 sm:mx-auto sm:mb-10" src={image} alt={altText} />
      <div className="md:text-start sm:mb-8 sm:text-center">
        <h3 className=" mb-8 text-xl uppercase tracking-wider md:mb-4 ">{title}</h3>
        <p className=" mx-auto text-dark-grey">{subtitle}</p>
      </div>
    </div>
  );
};

export default QualityHome;
