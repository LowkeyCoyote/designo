import { HTMLAttributes } from 'react';

interface CardProductProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  image: string;
  altText: string;
}

const CardProduct = ({ title, subtitle, image, altText }: CardProductProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg md:flex-row sm:flex-col sm:mx-6">
      <div className="md:max-w-[50%] sm:max-w-full">
        <img className="h-max w-max object-fill" src={image} alt={altText} />
      </div>
      <div className="group flex flex-col justify-center bg-[#FDF3F0] p-8 text-center duration-100 hover:bg-peach w-full h-full">
        <h3 className="mb-4 uppercase text-peach group-hover:text-white">
          {title}
        </h3>
        <p className="group-hover:text-white sm:w-[100%]">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardProduct;
