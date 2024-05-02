import Banner from '@components/shared/Banner'
import CardProduct from '@components/shared/CardProduct'
import CardLink from '@components/shared/CardLink'

import { arrayWebDesignProductCard } from '@datas/webDesignProducts'

const WebDesignPage = () => {
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
          className="cardLink bg-app-design  md:bg-app-design-tablet sm:bg-app-design-mobile"
          link="/app-design"
        />
        <CardLink
          title="Graphic Design"
          subtitle="view projects"
          className="cardLink bg-graphic-design   md:bg-graphic-design-tablet sm:bg-graphic-design-mobile"
          link="/graphic-design"
        />
      </div>
    </section>
  )
}

export default WebDesignPage
