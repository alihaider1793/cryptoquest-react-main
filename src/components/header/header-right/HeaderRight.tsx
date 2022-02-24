import HeaderSocial from './header-social/HeaderSocial';
import HeaderAccount from './header-account/HeaderAccount';

interface IHeaderRightProps {
  isHeaderOpen: boolean;
  isMobileNavOpen: boolean;
}

const HeaderRight = ({ isHeaderOpen, isMobileNavOpen }: IHeaderRightProps) => {
  return (
    <ul className="header__icons icon-group">
      <HeaderSocial />
      <HeaderAccount
        isHeaderOpen={isHeaderOpen}
        isMobileNavOpen={isMobileNavOpen}
      />
    </ul>
  );
};

export default HeaderRight;
