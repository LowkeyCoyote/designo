import heroImageAbout from '@assets/about/image-about-hero.jpg';
import heroImageAboutMobile from '@assets/about/image-about-hero-mobile.jpg';
import useIsMobile from '@hooks/useIsMobile';

const HeroAbout = () => {
  let isMobile = useIsMobile();

  return (
    <div className="flex flex-row overflow-hidden rounded-lg md:flex-col-reverse sm:rounded-none">
      <div className="min-w-[55%] flex-1 bg-peach bg-intro-about bg-bottom bg-no-repeat px-24 py-32 md:p-16 md:text-center sm:bg-intro-about-mobile sm:bg-left sm:px-6 sm:py-16">
        <h1 className="fadeInLeft mb-8 text-white">About Us</h1>
        <p className="fadeInLeft text-white ">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <img
        src={isMobile ? heroImageAboutMobile : heroImageAbout}
        alt={isMobile ? 'Hero About Mobile' : 'Hero About Desktop'}
        className="object-cover"
      />
    </div>
  );
};

export default HeroAbout;
