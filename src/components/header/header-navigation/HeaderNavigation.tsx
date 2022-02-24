import { NavLink } from 'react-router-dom';
import ROUTES from '../../../routes/routes';

import icons from '../../../assets/img/icons.svg';

const HeaderNavigation = () => {
  return (
    <nav className="nav ripped-right">
      <div className="nav__container">
        <ul className="nav__menu">
          <li className="hidden-desktop">
            <NavLink to={ROUTES.HOME_PAGE}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.MINT_NOW_PAGE}>Mint Now</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.INVENTORY_PAGE}>Inventory</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG_PAGE}>Blog</NavLink>
          </li>
          <li>
            <a
              href="https://docs.cryptoquestnft.com"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </a>
          </li>
          <li>
            <NavLink to={ROUTES.TERMS_PAGE}>Terms</NavLink>
          </li>
        </ul>

        <ul className="header__icons header__icons--mobile justify-content-center icon-group mt-6 hidden-desktop">
          <li>
            <a
              href="https://discord.gg/CryptoQuest"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="icon"
                width="16"
                height="16"
                role="img"
                aria-label="Discord"
              >
                <use xlinkHref={`${icons}#discord`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/CryptoQuest_NFT"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="icon"
                width="16"
                height="16"
                role="img"
                aria-label="Twitter"
              >
                <use xlinkHref={`${icons}#twitter`}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
