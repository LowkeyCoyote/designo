import Banner from '@components/shared/Banner'
import CardProduct from '@components/shared/CardProduct'
import CardLink from '@components/shared/CardLink'

import useIsMobile from '@hooks/useIsMobile'
import useIsTablet from '@hooks/useIsTablet'

import AppDesignImgDesktop from "@assets/shared/image-app-design.jpg"
import AppDesignImgTablet from "@assets/shared/image-app-design-tablet.jpg"
import AppDesignImgMobile from "@assets/shared/image-app-design-mobile.jpg"

import WebDesignImgDesktopSmall from "@assets/shared/image-web-design-small.jpg"
import WebDesignImgTablet from "@assets/shared/image-web-design-tablet.jpg"
import WebDesignImgMobile from "@assets/shared/image-web-design-mobile.jpg"

import { arrayGraphicDesignProducts } from '@datas/graphicDesignProducts'

const GraphicDesignPage = () => {


  let isTablet = useIsTablet();
  let isMobile = useIsMobile();
  return (
    <section className='classicalPage'>
      <Banner
        title="Graphic Design"
        subtitle="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        image="bg-intro-graphic sm:bg-pattern-mobile"
        positionImage="bg-left sm:bg-contain sm:bg-right"
      />

      <div className="grid grid-cols-3 gap-8 pt-40 md:grid-cols-1 md:pt-32 sm:pt-16">
        {arrayGraphicDesignProducts.map(({ title, subtitle, image, altText }, i) => (
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
          title="Web Design"
          subtitle="view projects"
          className="cardLink row-span-1"
          link="/web-design"
          image={(!isMobile && isTablet ? WebDesignImgTablet : (isMobile) ? WebDesignImgMobile : WebDesignImgDesktopSmall )}
          altText={(!isMobile && isTablet ? 'web design tablet' : (isMobile) ? 'web design mobile' : 'web design desktop' )}
        />
      <CardLink
          title="App Design"
          subtitle="view projects"
          className="cardLink row-span-1"
          link="/app-design"
          image={(!isMobile && isTablet ? AppDesignImgTablet : (isMobile) ? AppDesignImgMobile : AppDesignImgDesktop )}
          altText={(!isMobile && isTablet ? 'app design tablet' : (isMobile) ? 'app design mobile' : 'app design desktop' )}
        />
      </div>
    </section>
  )
}

export default GraphicDesignPage
