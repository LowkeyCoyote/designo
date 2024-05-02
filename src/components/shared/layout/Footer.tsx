import logoLight from '@assets/shared/logos/logo-light.png';
import { Link, useLocation } from 'react-router-dom';
import { arrayIconFooter } from '@datas/iconListFooter';
import Button from '@components/shared/ui/Button';

const Footer = () => {
  const location = useLocation();
  const notContactPage = location.pathname !== '/contact';
  const navLinks = [
    { path: './about', text: 'Our Company' },
    { path: './locations', text: 'Locations' },
    { path: './contact', text: 'Contact' },
  ];

  return (
    <footer
      className={`relative bg-black px-[155px] py-[72px] md:px-10 md:py-20 ${notContactPage ? `pt-36 md:pt-40` : ``}`}
    >
      {notContactPage && (
        <div className="bg-call-to-action footerContactContainer">
          <div className="md:w-2/3 md:text-center sm:w-full ">
            <h2 className="mb-5 w-[280px] md:mx-auto md:mb-6 md:w-4/5 sm:mb-4 sm:w-full">
              Let’s talk about your project
            </h2>
            <p className="mb-8 w-[400px] font-light md:w-full sm:mb-6 sm:w-full">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div>
            <Button link="/contact" className="text-black">
              Get in Touch
            </Button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between gap-10 border-b border-[#333136] pb-10 sm:flex-col sm:border-none sm:pb-0">
        <img
          src={logoLight}
          alt="designo logo"
          className="h-[27px] w-[197px] sm:mb-8"
        />
        <ul className=" footerIconList tracking-wide">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="border-b-white border-opacity-50 duration-100 ease-in-out hover:border-b"
                to={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="mt-10 flex justify-between text-[#8E8D8D] 
      sm:flex-col sm:gap-10 sm:text-center"
      >
        <div>
          <p className="mb-1 font-bold">Designo Central Office</p>
          <p className="mb-1">3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p className="mb-1 font-bold">Contact Us (Central Office)</p>
          <p className="mb-1">P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <ul
          className="flex gap-4 self-end justify-self-end 
        sm:self-center"
        >
          {arrayIconFooter.map((icon, index) => (
            <li key={index}>
              <Link to="./">
                <img src={icon.img} alt={icon.altText} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
