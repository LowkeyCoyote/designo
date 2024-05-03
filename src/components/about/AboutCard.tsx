import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

interface AboutCardProps extends HTMLAttributes<HTMLDivElement> {
    title : string;
    firstParagraph : string;
    secondParagraph : string;
    imageDesktop : string;
    imageTablet : string;
    imageMobile : string;
  }

const AboutCard = ({title, firstParagraph, secondParagraph, className, imageDesktop, imageTablet, imageMobile }: AboutCardProps ) => {

  let isMobile = useIsMobile();
  let isTablet = useIsTablet();

  return (
    <div className={twMerge(`relative flex flex-row rounded-lg overflow-hidden mt-40 md:flex-col-reverse md:mt-32 sm:mt-0 sm:rounded-none`,className)}>
            <div className="py-40 pl-20 bg-[#FDF3F0] bg-bg-pattern-two-circle bg-bottom bg-no-repeat 
                            md:py-16 md:px-14 md:text-center">
                <h2 className="text-peach mb-6 text-5xl tracking-wider">{title}</h2>
                <p className="w-[75%] md:w-full">{firstParagraph}</p> <br />
                <p className="w-[75%] md:w-full">{secondParagraph}</p>
            </div>
            <img
               src={(!isMobile && isTablet ? imageTablet : (isMobile) ? imageMobile : imageDesktop )}
               alt={(!isMobile && isTablet ? 'about card img tablet' : (isMobile) ? 'about card mobile' : 'about card desktop' )}
        className="object-cover"
      />                                                                                                                             
    </div>
  )
}

export default AboutCard
