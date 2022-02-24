import { useState } from 'react';
import { Link, Location } from 'react-router-dom';
import ROUTES from '../../routes/routes';

import HeaderNavigation from './header-navigation/HeaderNavigation';
import HeaderRight from './header-right/HeaderRight';

import { useDocumentScrollThrottled } from '../../hooks/scroll';
import { useLocationChange } from '../../hooks/location';

import headerLogo from '../../assets/img/cqheader.png';

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useLocationChange(
    (currentLocation: Location, prevLocation: Location | null) => {
      if (prevLocation?.pathname !== currentLocation?.pathname) {
        setIsMobileNavOpen(false);
      }
    }
  );

  const MINIMUM_SCROLL = 80;

  useDocumentScrollThrottled(
    (callbackData: { previousScrollTop: number; currentScrollTop: number }) => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

      setIsHeaderOpen(isScrolledDown && isMinimumScrolled);
    }
  );

  return (
    <header
      className={`header ripped-bottom ${
        isHeaderOpen && !isMobileNavOpen ? 'header--hidden' : ''
      } ${isMobileNavOpen ? 'nav-open' : ''}`}
    >
      <div className="container">
        <Link
          to={ROUTES.HOME_PAGE}
          title="Crypto Quest – Home Page"
          className="brand"
        >
          <div className="brand__logo">
            <img src={headerLogo} width="200" height="200" alt="Crypto Quest" />
          </div>
        </Link>
        <button
          type="button"
          className="nav-toggle no-btn"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          <span className="nav-toggle__icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="nav-toggle__text visually-hidden">Menu</span>
        </button>
        <HeaderNavigation />
        <HeaderRight isHeaderOpen={isHeaderOpen} isMobileNavOpen={isMobileNavOpen} />
      </div>
    </header>
  );
};

export default Header;
