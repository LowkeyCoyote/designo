import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import iconRightArrow from '@assets/shared/icons/icon-right-arrow.svg';
import { useNavigate } from 'react-router-dom';


interface CardLinkProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  altText : string,
}

const CardLink = ({
  title,
  subtitle,
  className,
  link,
  image,
  altText
}: CardLinkProps) => {


  const navigate = useNavigate();
  const redirectOnButtonClick = () => {
    navigate(link);
  };

  return (
    <div
      onClick={redirectOnButtonClick}
      className={twMerge(`effectHoverCardLink relative sm:gap-3`, className)}
    >
      <h2 className="font-semi-bold z-[9999] text-5xl uppercase tracking-wide text-white sm:text-3xl">
        {title}
      </h2>
      <div className="flex flex-row items-center">
        <p className=" z-[9999] mr-4 text-xl uppercase text-white">
          {subtitle}
        </p>
        <img
          className="z-20 h-[50%] brightness-50 "
          src={iconRightArrow}
          alt="right arrow icon"
        />
      </div>
      <img className="-z-2 absolute h-full w-full rounded-lg object-cover brightness-50 " src={image} alt={altText} />
    </div>
  );
};

export default CardLink;
