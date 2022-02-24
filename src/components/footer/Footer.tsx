import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import ROUTES from '../../routes/routes';

import icons from '../../assets/img/icons.svg';
import cryptoquest from '../../assets/img/cryptoquest.svg';

const Footer = () => {
  return (
    <footer className="footer ripped-top">
      <div className="container">
        <div className="flex-container gy-5 footer-links links-inverted">
          <div className="col m:col-3 footer-links__header">
            <div>
              <img src={cryptoquest} width="80" height="83" alt="" />
            </div>
            <p className="mw-200px mt-2 mx-auto m:mx-0">
              Crypto Quest is a proud NFT collection of randomized 3D RPG
              Avatars
            </p>
          </div>
          <div className="col s:col-4 m:col-3 footer-links__group">
            <h3 className="footer-links__title">Sections</h3>
            <ul className="footer-links__list">
              <li>
                <HashLink to={ROUTES.HOME_PAGE_WELCOME}>Welcome</HashLink>
              </li>
              <li>
                <HashLink to={ROUTES.HOME_PAGE_AVATARS}>
                  Give Rise to Adventure
                </HashLink>
              </li>
              <li>
                <HashLink to={ROUTES.HOME_PAGE_ABOUT_US}>About Us</HashLink>
              </li>
              <li>
                <HashLink to={ROUTES.HOME_PAGE_TEAM}>
                  Crypto Quest Team
                </HashLink>
              </li>
              <li>
                <HashLink to={ROUTES.HOME_PAGE_PARTNERS}>Partners</HashLink>
              </li>
            </ul>
          </div>
          <div className="col s:col-4 m:col-3 footer-links__group">
            <h3 className="footer-links__title">Content</h3>
            <ul className="footer-links__list">
              <li>
                <Link to={ROUTES.MINT_NOW_PAGE}>Mint Now</Link>
              </li>
              <li>
                <Link to={ROUTES.INVENTORY_PAGE}>Inventory</Link>
              </li>
              <li>
                <Link to={ROUTES.BLOG_PAGE}>Development Blog</Link>
              </li>
              <li>
                <a href="https://docs.cryptoquestnft.com">Whitepaper</a>
              </li>
              <li>
                <Link to={ROUTES.TERMS_PAGE}>Terms and Conditions</Link>
              </li>
              {/* <li><a href="https://wnwnft.notion.site/Crypto-Quest-Whitepaper-09df475aa6c2432aa5cf8fe16527a58b" target="_blank">Roadmap</a></li> */}
            </ul>
          </div>
          <div className="col s:col-4 m:col-3 footer-links__group d-flex flex-column">
            <h3 className="footer-links__title">HQ</h3>
            <p className="mt-0">USA - Phoenix, Arizona</p>

            <ul className="icon-group mt-3 m:mt-auto mb-1em justify-content-center m:justify-content-start">
              <li>
                <a
                  href="https://discord.gg/CryptoQuest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="icon icon--size-m"
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
                    className="icon icon--size-m"
                    width="16"
                    height="16"
                    role="img"
                    aria-label="Twitter"
                  >
                    <use xlinkHref={`${icons}#twitter`}></use>
                  </svg>
                </a>
              </li>

              {/* <li>
            <a href="#" className="btn btn--xs btn--inverse link-no-decoration" style="--text-offset: 0px;">
              <svg className="icon icon--size-m" width="16" height="16" role="img" aria-label="Wallet"><use xlinkHref="/img/icons.svg?1639779755#wallet"></use></svg>
              <span className="header__action-text d-none s:d-block">Connect</span>
            </a>
          </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
