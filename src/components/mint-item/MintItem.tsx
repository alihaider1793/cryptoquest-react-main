import { useState } from 'react';
import Modal from '../modal/Modal';

import icons from '../../assets/img/icons.svg';
import avatar3 from '../../assets/img/avatar-3.png';
import avatar3webp from '../../assets/img/avatar-3.webp';

const MintItem = () => {
  const [counter, setCounter] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const changeCounterHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setCounter(+e.currentTarget.value);
  };

  return (
    <>
      <div className="mint__body mb-5 rounded-l box-shadow-l">
        <div className="mint__image text-center px-4 m:px-0">
          <picture>
            <source type="image/webp" srcSet={avatar3webp} />
            <img
              src={avatar3}
              width="320"
              height="340"
              alt="Tough Girl"
              className="d-block mx-auto mt-n5 m:my-6 shadow-l"
            />
          </picture>
        </div>
        <div className="mint__main relative px-8 py-8">
          <div className="d-flex flex-column m:flex-row justify-content-between text-center m:text-left">
            <h1 className="display-2 mt-0 mb-4 m:mb-2">Woodland Respite</h1>
            <p className="my-0 m:pl-5 flex-shrink-0">
              <button
                onClick={openModalHandler}
                className="no-btn d-inline-flex link-inverted m:fs-xl"
                data-micromodal-trigger="modal-1"
              >
                Third Party Wallets
                <svg
                  className="icon icon--right"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref={`${icons}#help`}></use>
                </svg>
              </button>
            </p>
          </div>
          <p>Detailed information coming soon.</p>

          <div className="mint__buy d-flex justify-content-center m:justify-content-start mt-6 mb-4">
            <p className="mint__price display-3 my-0">
              <strong>4 SOL</strong>
            </p>
            <div className="quantity-control d-flex flex-column">
              <label
                htmlFor="qty"
                className="quantity-control__label fs-m m:fs-l fw-bold"
              >
                Quantity
              </label>
              <span className="quantity-control__input-container">
                <input
                  type="text"
                  value={counter}
                  onChange={changeCounterHandler}
                  min="1"
                  id="qty"
                  inputMode="numeric"
                  className="quantity-control__input display-3"
                />
                <span className="quantity-control__actions">
                  <button
                    onClick={() => setCounter((prev) => prev + 1)}
                    type="button"
                    className="no-btn"
                    data-action="add"
                  >
                    <svg
                      className="icon fs-xs m:fs-s"
                      width="16"
                      height="16"
                      role="img"
                      aria-label="+1"
                    >
                      <use xlinkHref={`${icons}#caret-up`}></use>
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setCounter((prev) => {
                        if (prev > 1) {
                          return prev - 1;
                        }
                        return prev;
                      })
                    }
                    type="button"
                    className="no-btn"
                    data-action="remove"
                  >
                    <svg
                      className="icon fs-xs m:fs-s"
                      width="16"
                      height="16"
                      role="img"
                      aria-label="-1"
                    >
                      <use xlinkHref={`${icons}#caret-down`}></use>
                    </svg>
                  </button>
                </span>
              </span>
            </div>
          </div>

          <div className="text-center m:text-left">
            <button className="btn btn--m">
              <svg
                className="icon icon--left"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref={`${icons}#eye-off`}></use>
              </svg>
              Whitelist Token
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onCloseModalHandler={closeModalHandler}
          header="Third Party Wallets"
        >
          <>
            <p>Third-Party Mint Instructions</p>
            <p>Coming Soon</p>
          </>
        </Modal>
      )}
    </>
  );
};

export default MintItem;
