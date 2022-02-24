import icons from '../../../../assets/img/icons.svg';

const HeaderSocial = () => {
  return (
    <>
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
    </>
  );
};

export default HeaderSocial;
