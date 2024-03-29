import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export const useDocumentScrollThrottled = (
  callback: ({
    previousScrollTop,
    currentScrollTop,
  }: {
    previousScrollTop: number;
    currentScrollTop: number;
  }) => void
) => {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  };

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
