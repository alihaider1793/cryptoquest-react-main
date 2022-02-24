import { Helmet } from 'react-helmet';

import Hero from '../../components/home/hero/Hero';
import Avatars from '../../components/home/avatars/Avatars';
import AboutUs from '../../components/home/about-us/AboutUs';
import Team from '../../components/home/team/Team';
import Partners from '../../components/home/partners/Partners';
import Blog from '../../components/home/blog/Blog';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Crypto Quest</title>
        <meta name="description" content="Crypto Quest" />
      </Helmet>

      <Hero />
      <Avatars />
      <Blog />
      <AboutUs />
      <Team />
      <Partners />
    </>
  );
};

export default Home;
