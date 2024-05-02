import Banner from '@components/shared/Banner';
import CardProduct from '@components/shared/CardProduct';
import CardLink from '@components/shared/CardLink';

import { arrayAppDesignProducts } from '@datas/appDesignProducts';

const AppDesignPage = () => {
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
          className="cardLink bg-web-design-large md:bg-web-design-tablet sm:bg-web-design-mobile"
          link="/"
        />
        <CardLink
          title="Graphic Design"
          subtitle="view projects"
          className="cardLink bg-graphic-design md:bg-graphic-design-tablet sm:bg-graphic-design-mobile"
          link="/graphic-design"
        />
      </div>
    </section>
  );
};
export default AppDesignPage;
