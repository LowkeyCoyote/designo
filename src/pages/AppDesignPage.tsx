import Banner from '@components/shared/Banner';
import CardProduct from '@components/shared/CardProduct';
import CardLink from '@components/shared/CardLink';

import useIsMobile from '@hooks/useIsMobile'
import useIsTablet from '@hooks/useIsTablet'

import { arrayAppDesignProducts } from '@datas/appDesignProducts';

import WebDesignImgDesktopSmall from "@assets/shared/image-web-design-small.jpg"
import WebDesignImgTablet from "@assets/shared/image-web-design-tablet.jpg"
import WebDesignImgMobile from "@assets/shared/image-web-design-mobile.jpg"


import graphicDesignDesktop from "@assets/shared/image-graphic-design.jpg"
import graphicDesignTablet from "@assets/shared/image-graphic-design-tablet.jpg"
import graphicDesignMobile from "@assets/shared/image-graphic-design-mobile.jpg"

const AppDesignPage = () => {

  let isTablet = useIsTablet();
  let isMobile = useIsMobile();

  return (
    <section className="classicalPage ">
      <Banner
        title="App Design"
        subtitle="Our mobile designs bring intuitive digital solutions
              to your customers right at their fingertips."
        image="bg-intro-app sm:bg-pattern-mobile"
        positionImage="bg-left sm:bg-contain sm:bg-right"
      />

      <div className="grid grid-cols-3 gap-8 pt-40 md:grid-cols-1 md:pt-32 sm:pt-16">
        {arrayAppDesignProducts.map(
          ({ title, subtitle, image, altText }, i) => (
            <CardProduct
              title={title}
              subtitle={subtitle}
              image={image}
              key={i}
              altText={altText}
            />
          ),
        )}
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
          title="Graphic Design"
          subtitle="view projects"
          className="cardLink row-span-1  "
          link="/graphic-design"
          image={(!isMobile && isTablet ? graphicDesignTablet : (isMobile) ? graphicDesignMobile : graphicDesignDesktop )}
          altText={(!isMobile && isTablet ? 'graphic design tablet' : (isMobile) ? 'graphic design mobile' : 'graphic design desktop' )}
        />
      </div>
    </section>
  );
};
export default AppDesignPage;
