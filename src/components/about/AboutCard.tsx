import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import useIsMobile from '@hooks/useIsMobile';


interface AboutCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  imageDesktop: string;
  imageMobile: string;
}

const AboutCard = ({
  title,
  firstParagraph,
  secondParagraph,
  className,
  imageDesktop,
  imageMobile,
}: AboutCardProps) => {

  let isMobile = useIsMobile();


  return (
    <div
      className={twMerge(
        `relative mt-40 flex flex-row overflow-hidden rounded-lg md:mt-32 md:flex-col-reverse sm:mt-0 sm:rounded-none`,
        className,
      )}
    >
      <div
        className="bg-bg-pattern-two-circle bg-[#FDF3F0] bg-bottom bg-no-repeat py-40 pl-20 
                            md:px-14 md:py-16 md:text-center"
      >
        <h2 className="mb-6 text-5xl tracking-wider text-peach">{title}</h2>
        <p className="w-[75%] md:w-full">{firstParagraph}</p> <br />
        <p className="w-[75%] md:w-full">{secondParagraph}</p>
      </div>
      <img
        src={isMobile ? imageMobile : imageDesktop}
        alt={
          isMobile ? 'world class talent mobile' : 'world calss talent desktop'
        }
        className="object-cover"
      />
    </div>
  );
};

export default AboutCard;
