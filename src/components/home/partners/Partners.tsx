import partnersCrowdCreate from '../../../assets/img/partners-crowd-create.png';
import partnersDracoDice from '../../../assets/img/partners-draco-dice.webp';

const Partners = () => {
  return (
    <div className="section section-partners ripped-top" id="partners">
      <div className="container">
        <h2 className="section__title">
          <span>Partners</span>
        </h2>
        <div className="partners flex-container gy-5 justify-content-center align-items-center mx-auto text-center">
          <a
            className="partners__link"
            href="https://crowdcreate.us/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="partners__image"
              src={partnersCrowdCreate}
              alt="Crowd Create"
            />
          </a>
          <a
            className="partners__link"
            href="https://dracodice.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="partners__image"
              src={partnersDracoDice}
              alt="Draco Dice"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
