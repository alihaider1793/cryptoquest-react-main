import icons from '../../assets/img/icons.svg';

import { IInventoryItem } from '../../types/inventory';

interface IInventoryItemProps {
  item: IInventoryItem;
}

const InventoryItem = ({ item }: IInventoryItemProps) => {
  const {
    avatar,
    avatarWebP,
    name,
    tokenId,
    race,
    gender,
    level,
    description,
  } = item;

  return (
    <div className="inventory-item rounded-l box-shadow-l">
      <div className="inventory-item__image m:d-flex m:align-items-end px-4 pt-3 m:px-0 m:pt-0">
        <picture>
          <source type="image/webp" srcSet={avatarWebP} />
          <img
            src={avatar}
            width="320"
            height="340"
            alt={name}
            className="d-block mx-auto shadow-l"
          />
        </picture>
      </div>
      <div className="inventory-item__main relative px-4 s:px-8 m:px-10 py-8 w-100">
        <div className="d-flex justify-content-between">
          <div>
            <p className="inventory-item__label mb-1">Character Name</p>
            <h1 className="mt-0 mb-2 m:mb-2">{name}</h1>
          </div>
          <p className="my-0 pl-4 m:pl-5">
            <a href="#id" className="m:fs-xl">
              <svg
                className="icon"
                width="16"
                height="16"
                role="img"
                aria-label="Share"
              >
                <use xlinkHref={`${icons}#share`}></use>
              </svg>
            </a>
          </p>
        </div>
        <p className="d-flex mt-0 mb-4 fs-m">
          <span className="inventory-item__label flex-shrink-0 pr-2">
            Token Id:
          </span>
          <span className="text-ellipsis">{tokenId}</span>
        </p>

        <ul className="label-list">
          <li className="label-list__item">
            <span className="label-list__label inventory-item__label">
              Race
            </span>
            <span className="label-list__value">{race}</span>
          </li>
          <li className="label-list__item">
            <span className="label-list__label inventory-item__label">
              Gender
            </span>
            <span className="label-list__value">{gender}</span>
          </li>
          <li className="label-list__item">
            <span className="label-list__label inventory-item__label">
              Level
            </span>
            <span className="label-list__value">{level}</span>
          </li>
        </ul>

        {/* Number of lines can be customized; default is 3 */}
        <p>{description}</p>

        <div className="d-flex flex-wrap justify-content-center m:justify-content-start gap-4 mt-5">
          <button className="btn btn--primary btn--m" disabled>
            <svg className="icon" width="16" height="16" aria-hidden="true">
              <use xlinkHref={`${icons}#opensea`}></use>
            </svg>
            Marketplace
          </button>
          <button className="btn btn--ghost btn--m" disabled>
            Rename Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
