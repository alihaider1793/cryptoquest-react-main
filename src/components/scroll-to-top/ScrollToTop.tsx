import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface IScrollToTopProps {
  children: JSX.Element;
}

const ScrollToTop = ({ children }: IScrollToTopProps) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
