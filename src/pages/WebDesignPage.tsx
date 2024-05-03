import Banner from '@components/shared/Banner'
import CardProduct from '@components/shared/CardProduct'
import CardLink from '@components/shared/CardLink'

import useIsMobile from '@hooks/useIsMobile'
import useIsTablet from '@hooks/useIsTablet'

import AppDesignImgDesktop from "@assets/shared/image-app-design.jpg"
import AppDesignImgTablet from "@assets/shared/image-app-design-tablet.jpg"
import AppDesignImgMobile from "@assets/shared/image-app-design-mobile.jpg"

import graphicDesignDesktop from "@assets/shared/image-graphic-design.jpg"
import graphicDesignTablet from "@assets/shared/image-graphic-design-tablet.jpg"
import graphicDesignMobile from "@assets/shared/image-graphic-design-mobile.jpg"

import { arrayWebDesignProductCard } from '@datas/webDesignProducts'

const WebDesignPage = () => {

  let isTablet = useIsTablet();
  let isMobile = useIsMobile();
  return (
    <section className='classicalPage'>
      <Banner
        title="Web Design"
        subtitle="We build websites that serve as powerful marketing tools 
        and bring memorable brand experiences."
        image="bg-intro-web sm:bg-pattern-mobile"
        positionImage="bg-right sm:bg-contain"
      />
      <div className="grid grid-cols-3 gap-8 pt-40 md:grid-cols-1 md:pt-32 sm:pt-16">
        {arrayWebDesignProductCard.map(({ title, subtitle, image, altText }, i) => (
          <CardProduct
            title={title}
            subtitle={subtitle}
            image={image}
            key={i}
            altText={altText}
          />
        ))}
      </div>

      <div className="cardLinkContainer cardLinkContainerSmall">
        <CardLink
          title="App Design"
          subtitle="view projects"
          className="cardLink row-span-1"
          link="/app-design"
          image={(!isMobile && isTablet ? AppDesignImgTablet : (isMobile) ? AppDesignImgMobile : AppDesignImgDesktop )}
          altText={(!isMobile && isTablet ? 'app design tablet' : (isMobile) ? 'app design mobile' : 'app design desktop' )}
        />
        <CardLink
          title="Graphic Design"
          subtitle="view projects"
          className="cardLink row-span-1  "
          link="/graphic-design"
          image={(!isMobile && isTablet ? graphicDesignTablet : (isMobile) ? graphicDesignMobile : graphicDesignDesktop )}
          altText={(!isMobile && isTablet ? 'graphic design tablet' : (isMobile) ? 'graphic design mobile' : 'graphic design desktop' )}/>
      </div>
    </section>
  )
}

export default WebDesignPage
