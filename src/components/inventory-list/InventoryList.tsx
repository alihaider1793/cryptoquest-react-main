import { useState } from 'react';

import InventoryItem from '../inventory-item/InventoryItem';

import { IInventoryItem } from '../../types/inventory';
import { inventory } from '../../data/inventory';

const InventoryList = () => {
  const [inventoryItems, setInventoryItems] =
    useState<IInventoryItem[]>(inventory);

  return (
    <div className="inventory__list gy-5">
      {inventoryItems.map((item) => (
        <InventoryItem item={item} key={item.tokenId} />
      ))}
    </div>
  );
};

export default InventoryList;
