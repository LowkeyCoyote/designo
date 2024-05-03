import HeaderHome from '@components/home/HeroHome'
import CardLink from '@components/shared/CardLink'

import useIsMobile from '@hooks/useIsMobile'
import useIsTablet from '@hooks/useIsTablet'

import passionateImg from '@assets/home/illustration-passionate.svg'
import friendlyImg from '@assets/home/illustration-friendly.svg'
import resourcefulImg from '@assets/home/illustration-resourceful.svg'
import QualityHome from '@components/home/QualityHome'

import WebDesignImgDesktopLarge from "@assets/shared/image-web-design-large.jpg"
import WebDesignImgTablet from "@assets/shared/image-web-design-tablet.jpg"
import WebDesignImgMobile from "@assets/shared/image-web-design-mobile.jpg"

import AppDesignImgDesktop from "@assets/shared/image-app-design.jpg"
import AppDesignImgTablet from "@assets/shared/image-app-design-tablet.jpg"
import AppDesignImgMobile from "@assets/shared/image-app-design-mobile.jpg"

import graphicDesignDesktop from "@assets/shared/image-graphic-design.jpg"
import graphicDesignTablet from "@assets/shared/image-graphic-design-tablet.jpg"
import graphicDesignMobile from "@assets/shared/image-graphic-design-mobile.jpg"



const HomePage = () => {

  let isTablet = useIsTablet();
  let isMobile = useIsMobile();
  return (
    <section className='classicalPage'>
      <HeaderHome />
      <div className="cardLinkContainer cardLinkContainerLarge">
        <CardLink
          title="Web Design"
          subtitle="view projects"
          className="cardLink row-span-2 min-h-[640px] md:min-h-[200px] sm:min-h-[250px]"
          link="./web-design"
          image={(!isMobile && isTablet ? WebDesignImgTablet : (isMobile) ? WebDesignImgMobile : WebDesignImgDesktopLarge )}
          altText={(!isMobile && isTablet ? 'web design tablet' : (isMobile) ? 'web design mobile' : 'web design desktop' )}
        />
        <CardLink
          title="App Design"
          subtitle="view projects"
          className="cardLink row-span-1"
          link="./app-design"
          image={(!isMobile && isTablet ? AppDesignImgTablet : (isMobile) ? AppDesignImgMobile : AppDesignImgDesktop )}
          altText={(!isMobile && isTablet ? 'app design tablet' : (isMobile) ? 'app design mobile' : 'app design desktop' )}
        />
        <CardLink
          title="Graphic Design"
          subtitle="view projects"
          className="cardLink row-span-1  "
          link="./graphic-design"
          image={(!isMobile && isTablet ? graphicDesignTablet : (isMobile) ? graphicDesignMobile : graphicDesignDesktop )}
          altText={(!isMobile && isTablet ? 'graphic design tablet' : (isMobile) ? 'graphic design mobile' : 'graphic design desktop' )}
        />
      </div>

      <div className=" mt-40 flex flex-row justify-between gap-20 md:mt-32 md:flex-col md:gap-10 sm:gap-20">
        <QualityHome
          title="passionate"
          subtitle="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          image={passionateImg}
          altText='passionate illustration'
        />
        <QualityHome
          title="resourceful"
          subtitle="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          image={resourcefulImg}
          altText='resourceful illustration'
        />
        <QualityHome
          title="FRIENDLY"
          subtitle=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          image={friendlyImg}
          altText='friendly illustration'
        />
      </div>
    </section>
  )
}

export default HomePage
