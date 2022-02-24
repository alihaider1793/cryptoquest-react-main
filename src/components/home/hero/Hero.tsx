import { useEffect, useState } from 'react';
import handleViewport from 'react-in-viewport';

import icons from '../../../assets/img/icons.svg';
import cryptoquest from '../../../assets/img/cryptoquest.svg';

interface IHeroInner {
  enterCount: number;
  forwardedRef: any;
  inViewport: boolean;
  leaveCount: number;
}

const HeroInner = (props: IHeroInner) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { inViewport, forwardedRef, enterCount } = props;

  useEffect(() => {
    if (inViewport && enterCount === 1) {
      setIsAnimating(true);
    }
  }, [inViewport, enterCount]);

  const playVideoHandler = () => {
    const video = document.getElementById('video-trailer')!;
    video.classList.add('player--playing');
    setIsPlaying(true);
  };

  return (
    <div ref={forwardedRef} className="section section-hero" id="welcome">
      <div className="container l:d-flex align-items-center justify-content-center">
        <div className="flex-grow-1">
          <div className="flex-container gy-6 align-items-center">
            <div
              className={`${
                isAnimating ? 'animate__animated animate__fadeInLeft' : ''
              } col m:col-6 text-center`}
            >
              <div className="mw-500px mx-auto">
                <h1 className="h1 my-0">
                  <img
                    src={cryptoquest}
                    width="350"
                    height="365"
                    alt="Crypto Quest"
                    className="section-hero__logo shadow-m"
                  />
                </h1>
                <p className="mt-4 mb-5 fs-xl text-shadow-s">
                  Crypto Quest is a groundbreaking NFT platform, introducing the
                  worlds first completely custom generative 3D RPG game
                  characters for Play-2-Earn adventures and a rich collaborative
                  metaverse where YOU will create the story.
                </p>
                <div className="mt-5">
                  <a
                    href="https://discord.gg/CryptoQuest"
                    className="btn btn--primary shadow-m"
                  >
                    Join Our Community!
                  </a>
                </div>
              </div>
            </div>
            <div className="col m:col-6">
              <div className="mw-500px m:mw-800px mx-auto">
                <div
                  className={`player embed ${
                    isAnimating ? 'animate__animated animate__fadeInRight' : ''
                  }`}
                  id="video-trailer"
                  data-video-id="q52tkGreoMQ"
                >
                  {!isPlaying ? (
                    <div
                      className="player__video shadow-m"
                      id="yt-player"
                    ></div>
                  ) : (
                    <iframe
                      className="player__video shadow-m"
                      id="yt-player"
                      width="640"
                      height="360"
                      src="https://www.youtube.com/embed/q52tkGreoMQ?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  )}

                  <div className="player__overlay d-flex align-items-center justify-content-center">
                    <button
                      className="player__play no-btn section-hero__play text-gray-100 fs-l"
                      onClick={playVideoHandler}
                    >
                      <svg
                        className="icon mb-3 shadow-m"
                        width="16"
                        height="16"
                        role="img"
                        aria-label="Play"
                      >
                        <use xlinkHref={`${icons}#play`}></use>
                      </svg>
                      <br />
                      <span className="m:fs-xl text-shadow-l">
                        Play Trailer
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 l:mt-7 l:mb-n7 text-center d-none l:d-block">
            <a href="#avatars" className="section__scroll-hint">
              <svg
                className="icon shadow-m text-white"
                width="16"
                height="16"
                role="img"
                aria-label="Scroll down"
              >
                <use xlinkHref={`${icons}#scroll-down`}></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = handleViewport(HeroInner);

export default Hero;
