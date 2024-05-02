import HeaderHome from '@components/home/HeroHome'
import CardLink from '@components/shared/CardLink'

import passionateImg from '@assets/home/illustration-passionate.svg'
import friendlyImg from '@assets/home/illustration-friendly.svg'
import resourcefulImg from '@assets/home/illustration-resourceful.svg'
import QualityHome from '@components/home/QualityHome'

const HomePage = () => {
  return (
    <section className='classicalPage'>
      <HeaderHome />
      <div className="cardLinkContainer cardLinkContainerLarge">
        <CardLink
          title="Web Design"
          subtitle="view projects"
          className="cardLink row-span-2 bg-web-design-large md:bg-web-design-tablet sm:bg-web-design-mobile"
          link="./web-design"
        />
        <CardLink
          title="App Design"
          subtitle="view projects"
          className="cardLink row-span-1 bg-app-design md:bg-app-design-tablet sm:bg-app-design-mobile"
          link="./app-design"
        />
        <CardLink
          title="Graphic Design"
          subtitle="view projects"
          className="cardLink row-span-1 bg-graphic-design md:bg-graphic-design-tablet sm:bg-graphic-design-mobile"
          link="./graphic-design"
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
