import { useState } from 'react';

import MintItem from '../mint-item/MintItem';

const MintsList = () => {
  const [mints, setMints] = useState(Array.from(Array(1).keys()));

  return (
    <>
      {mints.map((item, index) => (
        <MintItem key={index} />
      ))}
    </>
  );
};

export default MintsList;
