import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import iconRightArrow from '@assets/shared/icons/icon-right-arrow.svg';
import { useNavigate } from 'react-router-dom';

interface CardLinkProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  link: string;
}

const CardLink = ({ title, subtitle, className, link }: CardLinkProps) => {
  const navigate = useNavigate();
  const redirectOnButtonClick = () => {
    navigate(link);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={redirectOnButtonClick}
      className={twMerge(`effectHoverCardLink sm:gap-3`, className)}
    >
      <h2 className="font-semi-bold text-5xl uppercase tracking-wide text-white sm:text-3xl">
        {title}
      </h2>
      <div className="flex flex-row items-center">
        <p className=" mr-4 text-xl uppercase text-white">{subtitle}</p>
        <img className="h-[50%]" src={iconRightArrow} alt="right arrow icon" />
      </div>
    </div>
  );
};

export default CardLink;
