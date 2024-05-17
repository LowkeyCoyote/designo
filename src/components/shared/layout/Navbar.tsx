import { Link } from 'react-router-dom';
import logoDark from '@assets/shared/logos/logo-dark.png';
import { useState } from 'react';
import hamburgerIcon from '@assets/shared/icons/icon-hamburger.svg';
import closeIcon from '@assets/shared/icons/icon-close.svg';

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);

  const handleShowLink = () => {
    setShowLink(!showLink);
  };

  const navLinks = [
    { path: './about', text: 'Our Company' },
    { path: './locations', text: 'Locations' },
    { path: './contact', text: 'Contact' },
  ];

  return (
    <nav className="flex items-center justify-between px-[10.3125rem] py-16 uppercase tracking-wide text-dark-grey  md:px-[30px] sm:px-6 sm:py-[30px]">
      <Link to="./">
        <img
          src={logoDark}
          alt="designo logo dark"
          className="h-[24px] w-[196px]"
        />
      </Link>
      <ul
        className={`navLinks sm:tracking-wider ${showLink ? 'sm:top-[96px] sm:opacity-100 ' : 'sm:top-[-498px] sm:opacity-0 '}`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="border-b border-dark-grey/0 duration-150 ease-in-out hover:border-dark-grey sm:border-b-0"
          >
            <Link onClick={handleShowLink} to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="-mr-2  hidden sm:flex">
        <button
          onClick={() => setShowLink(!showLink)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white"
        >
          <span className="sr-only">Open menu</span>
          <img
            src={!showLink ? hamburgerIcon : closeIcon}
            alt={!showLink ? 'open menu' : 'close menu'}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
