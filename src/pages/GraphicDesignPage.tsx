import Banner from '@components/shared/Banner'
import CardProduct from '@components/shared/CardProduct'
import CardLink from '@components/shared/CardLink'

import { arrayGraphicDesignProducts } from '@datas/graphicDesignProducts'

const GraphicDesignPage = () => {
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
          title="App Design"
          subtitle="view projects"
          className="cardLink bg-app-design  md:bg-app-design-tablet sm:bg-app-design-mobile"
          link="/app-design"
        />
        <CardLink
          title="Web Design"
          subtitle="view projects"
          className="cardLink bg-web-design-large  md:bg-web-design-tablet sm:bg-web-design-mobile"
          link="/web-design"
        />
      </div>
    </section>
  )
}

export default GraphicDesignPage
