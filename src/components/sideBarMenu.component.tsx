import { useState } from 'react';
import HamburgerMenuIcon from '../assets/icons/ham-menu.svg';
import ArrowCircleIcon from '../assets/icons/arrow-circle-fill.svg';
import NavigationLinks from './navigationLinks.component';

export const SideBarMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => setShowMenu(!showMenu);

  return (
    <div>
      <img
        src={HamburgerMenuIcon}
        alt="menu-icon"
        aria-hidden="true"
        onClick={toogleMenu}
        className="md:hidden cursor-pointer py-2"
      />

      {showMenu && (
        <div className="bg-eerie-black left-0 top-0 bottom-0 h-screen shadow md:hidden fixed z-10">
          <img
            src={ArrowCircleIcon}
            className="shadow w-8 absolute right-[-15px] top-4 rounded-full cursor-pointer"
            alt="arrow-circle-icon"
            aria-hidden="true"
            onClick={toogleMenu}
          />

          <NavigationLinks />
        </div>
      )}
    </div>
  );
};
