import { useEffect, useState, useRef } from 'react';
import handleViewport from 'react-in-viewport';

import teaser from '../../../assets/video/teaser.mp4';
import cryptoquest from '../../../assets/img/cryptoquest.svg';
import elves8 from '../../../assets/img/elves-8.png';
import elves4 from '../../../assets/img/elves-4.png';

interface IAboutUsInner {
  enterCount: number;
  forwardedRef: any;
  inViewport: boolean;
  leaveCount: number;
}

const AboutUsInner = (props: IAboutUsInner) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { inViewport, forwardedRef, enterCount } = props;

  useEffect(() => {
    if (inViewport && enterCount === 1) {
      setIsAnimating(true);
    }
  }, [inViewport, enterCount]);

  const setPlayBack = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  };

  return (
    <div
      ref={forwardedRef}
      className="section section-about ripped-top"
      id="about-us"
    >
      <video
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
        className="about__teaser"
        autoPlay
        loop
        muted
      >
        <source src={teaser} type="video/mp4" />
      </video>
      <div className="container">
        <h2 className="section__title section__title--gradient">
          <span>About Us</span>
        </h2>
        <p
          className={`about__para about__para--1 mw-800px mx-auto fs-l m:fs-xxl ${
            isAnimating ? 'animate__animated animate__zoomIn animate__slow' : ''
          }`}
        >
          Crypto Quest was founded by Zach Hopkins & Theodore Thomas, two
          long-time friends, entrepreneurs, and avid fantasy enthusiasts.
        </p>
        <p
          className={`about__para mw-800px mx-auto fs-l m:fs-xxl ${
            isAnimating
              ? 'animate__animated animate__zoomIn animate__slow animate__delay-1s'
              : ''
          }`}
        >
          Beyond just fantasy, we were fascinated by blockchain technology and
          the potential it had in elevating the gaming industry. We had a desire
          to bring art, real pragmatic utility, and genuine economies of value
          into one whole through our creations.
        </p>
        <p
          className={`about__para about__para--3 mw-800px mx-auto fs-l m:fs-xxl ${
            isAnimating
              ? 'animate__animated animate__zoomIn animate__slow animate__delay-2s'
              : ''
          }`}
        >
          Out of frustration with lack of quality-control over both
          art-production and management of NFT ecosystems, Crypto Quest was
          born. Our goal is to bring the world of high fantasy to the metaverse,
          guided by a ‘quality-first’ framework, professional artistry, strong
          economic principles, and varied functionality.
        </p>
        <div className="mt-6 text-center">
          <img src={cryptoquest} width="100" height="104" alt="" />
        </div>
        <img
          className={`${
            isAnimating
              ? 'animate__animated animate__backInUp animate__slow'
              : ''
          } home__bottom-images home__bottom-images--1`}
          src={elves8}
          alt="Elves"
        />
        <img
          className={`${
            isAnimating
              ? 'animate__animated animate__backInUp animate__slow'
              : ''
          } home__bottom-images home__bottom-images--2`}
          src={elves4}
          alt="Elves"
        />
      </div>
    </div>
  );
};

const AboutUs = handleViewport(AboutUsInner);

export default AboutUs;
