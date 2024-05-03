import AboutCard from '@components/about/AboutCard';
import HeroAbout from '@components/about/HeroAbout';
import Location from '@components/shared/Country';

import worldClassImgDesktop from '@assets/about/image-world-class-talent-desktop.jpg';
import worldClassImgMobile from '@assets/about/image-world-class-talent-mobile.jpg';
import worldClassImgTablet from '@assets/about/image-world-class-talent-tablet.jpg'

import realDealImgDesktop from '@assets/about/image-real-deal-desktop.jpg';
import realDealImgTablet from '@assets/about/image-about-hero-tablet.jpg'
import realDealImgMobile from '@assets/about/image-real-deal-mobile.jpg';

import AustraliaImg from '@assets/shared/illustration-australia.svg';
import CanadaImg from '@assets/shared/illustration-canada.svg';
import UnitedKingdomImg from '@assets/shared/illustration-united-kingdom.svg';

const AboutPage = () => {
  return (
    <section className="classicalPage ">
      <HeroAbout />
      <AboutCard
        title="World-class talent"
        firstParagraph="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        secondParagraph="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        imageDesktop={worldClassImgDesktop}
        imageTablet={worldClassImgTablet}
        imageMobile={worldClassImgMobile}
      
        className="flex-row-reverse"
      />

      <div className="align-center my-40 flex flex-row justify-between md:mt-32 md:flex-col md:gap-20">
        <Location location="Canada" image={CanadaImg} />
        <Location location="Australia" image={AustraliaImg} />
        <Location location="United Kingdom" image={UnitedKingdomImg} />
      </div>

      <AboutCard
        title="The real deal"
        firstParagraph="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        secondParagraph="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        imageDesktop={realDealImgDesktop}
        imageTablet={realDealImgTablet}
        imageMobile={realDealImgMobile}
        className="flex-row"
      />
    </section>
  );
};

export default AboutPage;
