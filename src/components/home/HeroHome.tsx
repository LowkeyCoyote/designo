import Button from '@components/shared/ui/Button';
import HeroHomeImg from '@assets/home/image-hero-phone.png';
import BgPatternHeroHome from '@assets/home//bg-pattern-hero-home.svg';

const HeaderHome = () => {
  return (
    <div className="relative flex overflow-hidden rounded-2xl bg-peach md:min-w-full sm:rounded-none">
      <div className="fadeInLeft flex w-[60%] flex-col px-24 py-32 md:w-full md:px-20 md:pb-[470px] md:pt-12 md:text-center  sm:px-6  ">
        <h1 className="mb-9 text-white sm:mb-4">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mb-9 text-white sm:mb-4">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button link="./about" className="md:mx-auto tracking-wide">
          Learn More
        </Button>
      </div>
      <div>
        <img
          className="fadeInBottom maskImage absolute -top-20 right-0  max-w-max md:-bottom-80 md:left-1/2 md:right-1/2 md:top-auto md:-translate-x-1/2"
          src={HeroHomeImg}
          alt=""
        />
      </div>
      <img
        src={BgPatternHeroHome}
        className="absolute right-0 md:invisible md:top-24 sm:visible"
        alt=""
      />
    </div>
  );
};

export default HeaderHome;
