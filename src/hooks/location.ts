import { useEffect, useRef } from 'react';
import { useLocation, Location } from 'react-router-dom';

export const usePreviousLocation = (value: Location) => {
  const ref = useRef<Location | null>(null);
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export const useLocationChange = (
  action: (currentLocation: Location, prevLocation: Location | null) => void
) => {
  const currentLocation = useLocation();
  const prevLocation = usePreviousLocation(currentLocation);
  useEffect(() => {
    action(currentLocation, prevLocation);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);
};
