import { useEffect, useState } from 'react';
import handleViewport from 'react-in-viewport';
import { Link } from 'react-router-dom';
import ROUTES from '../../../routes/routes';

import avatar1 from '../../../assets/img/avatar-1.png';
import avatar1webp from '../../../assets/img/avatar-1.webp';
import avatar2 from '../../../assets/img/avatar-2.png';
import avatar2webp from '../../../assets/img/avatar-2.webp';
import avatar3 from '../../../assets/img/avatar-3.png';
import avatar3webp from '../../../assets/img/avatar-3.webp';
import elves7 from '../../../assets/img/elves-7.png';
import elves2 from '../../../assets/img/elves-2.png';

interface IAvatarsInner {
  enterCount: number;
  forwardedRef: any;
  inViewport: boolean;
  leaveCount: number;
}

const AvatarsInner = (props: IAvatarsInner) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { inViewport, forwardedRef, enterCount } = props;

  useEffect(() => {
    if (inViewport && enterCount === 1) {
      setIsAnimating(true);
    }
  }, [inViewport, enterCount]);

  return (
    <div
      ref={forwardedRef}
      className="section section-avatars ripped-top"
      id="avatars"
    >
      <div className="container">
        <h2
          className={`${
            isAnimating ? 'animate__animated animate__zoomInDown' : ''
          } section__title section__title--gradient`}
        >
          <span>Give Rise to&nbsp;Adventure</span>
        </h2>

        <div className="mt-14">
          <div className="flex-container gy-7 mw-1200px mx-auto text-center">
            <div
              className={`${
                isAnimating
                  ? 'animate__animated animate__jackInTheBox animate__slow'
                  : ''
              } col m:col-4`}
            >
              <div className="card card--decoration-knife h-100 mw-400px mx-auto">
                <div className="card__container">
                  <div className="card__header">
                    <picture>
                      <source type="image/webp" srcSet={avatar1webp} />
                      <img
                        src={avatar1}
                        width="320"
                        height="340"
                        alt="Avatar"
                        className="card__image"
                      />
                    </picture>
                  </div>
                  <div className="card__body">
                    <p>
                      Crypto Quest is a collection of unique, customized, and
                      completely user generated RPG Avatars roaming the vast
                      world of the Solana blockchain network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                isAnimating
                  ? 'animate__animated animate__jackInTheBox animate__slow'
                  : ''
              } col m:col-4`}
            >
              <div className="card h-100 mw-400px mx-auto">
                <div className="card__container">
                  <div className="card__header">
                    <picture>
                      <source type="image/webp" srcSet={avatar2webp} />
                      <img
                        src={avatar2}
                        width="320"
                        height="340"
                        alt="Avatar"
                        className="card__image"
                      />
                    </picture>
                  </div>
                  <div className="card__body">
                    <p>
                      Every Adventurer is customized after mint, where users can
                      spend rarity points and choose from a set of unique traits
                      to create several million sets of possible combinations!
                      Traits include Race (Human, Elf, etc.), Sex, RPG Stats
                      (Strength, Wisdom, etc.), and a variety of Cosmetic
                      Features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                isAnimating
                  ? 'animate__animated animate__jackInTheBox animate__slow'
                  : ''
              } col m:col-4`}
            >
              <div className="card card--decoration-book h-100 mw-400px mx-auto">
                <div className="card__container">
                  <div className="card__header">
                    <picture>
                      <source type="image/webp" srcSet={avatar3webp} />
                      <img
                        src={avatar3}
                        width="320"
                        height="340"
                        alt="Avatar"
                        className="card__image"
                      />
                    </picture>
                  </div>
                  <div className="card__body">
                    <p>
                      Owning your own adventurer gives you access to Member-Only
                      exclusive digital and real world content. See our roadmap
                      for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 s:mt-14 text-center">
          <Link to={ROUTES.MINT_NOW_PAGE} className="btn btn--primary">
            Mint Coming Soon
          </Link>
        </div>

        <img
          className={`${
            isAnimating
              ? 'animate__animated animate__backInUp animate__slow'
              : ''
          } home__bottom-images home__bottom-images--1`}
          src={elves7}
          alt="Elves"
        />
        <img
          className={`${
            isAnimating
              ? 'animate__animated animate__backInUp animate__slow'
              : ''
          } home__bottom-images home__bottom-images--2`}
          src={elves2}
          alt="Elves"
        />
      </div>
    </div>
  );
};

const Avatars = handleViewport(AvatarsInner);

export default Avatars;
