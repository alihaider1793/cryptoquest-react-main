import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal, WalletIcon } from '@solana/wallet-adapter-react-ui';
import * as waxjs from "@waxio/waxjs/dist";

import icons from '../../../../assets/img/icons.svg';
import { useBalance } from '../../../../hooks/account';
import axios from 'axios';


interface IHeaderAccountProps {
  isHeaderOpen: boolean;
  isMobileNavOpen: boolean;
}

const HeaderAccount = ({
  isHeaderOpen,
  isMobileNavOpen,
}: IHeaderAccountProps) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { publicKey, disconnect, wallet } = useWallet();
  const { setVisible } = useWalletModal();
  const balance = useBalance();

  useEffect(() => {
    setIsAccountOpen(false);
  }, [isHeaderOpen, isMobileNavOpen]);

  return (
    <>
      <li className="dropdown dropdown--right">
        {publicKey ? (
          <button
            onClick={() => setIsAccountOpen((prev) => !prev)}
            className="btn btn--xs btn--inverse header__action"
          >
            <svg
              className="icon icon--size-m"
              width="16"
              height="16"
              role="img"
              aria-label="Wallet"
            >
              <use xlinkHref={`${icons}#wallet`}></use>
            </svg>
            <span className="header__action-text d-none s:d-block">
              My Account
            </span>
          </button>
        ) : (
          <button
            onClick={() => setVisible(true)}
            className="btn btn--xs btn--inverse header__action"
          >
            <svg
              className="icon icon--size-m"
              width="16"
              height="16"
              role="img"
              aria-label="Wallet"
            >
              <use xlinkHref={`${icons}#wallet`}></use>
            </svg>
            <span className="header__action-text d-none s:d-block">Login</span>
          </button>
        )}
        {
          <button
            onClick={async () => {
              console.log('testing');
              const wax = new waxjs.WaxJS({
                rpcEndpoint: 'https://wax.greymass.com'
              });
              const userAccount = await wax.login();
              console.log('user account after wax login: ' + userAccount);

              let config = {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                }
              }

              axios.post('http://19f0-202-163-123-188.ngrok.io/store_verification_code_in_db', { wallet_address: userAccount }, config)
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                })
            }}
            className="btn btn--xs btn--inverse header__action"
          >
            <svg
              className="icon icon--size-m"
              width="16"
              height="16"
              role="img"
              aria-label="Wallet"
            >
              <use xlinkHref={`${icons}#wallet`}></use>
            </svg>
            <span className="header__action-text d-none s:d-block">
              Wax
            </span>
          </button>
        }

        {
          <button
            onClick={async () => {
              var val = Math.floor(1000 + Math.random() * 9000);
              console.log(val);
            }}
            className="btn btn--xs btn--inverse header__action"
          >
            <svg
              className="icon icon--size-m"
              width="16"
              height="16"
              role="img"
              aria-label="Wallet"
            >
              <use xlinkHref={`${icons}#wallet`}></use>
            </svg>
            <span className="header__action-text d-none s:d-block">
              Phantom
            </span>
          </button>
        }

        {isAccountOpen && publicKey && !isHeaderOpen && !isMobileNavOpen && (
          <div className="dropdown__body">
            <h3 className="h2 mt-0">My Account</h3>

            {/* <h4 className="mb-1 opacity-50 fw-normal">Phone Number:</h4>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <p className="d-flex align-items-center gap-2">
                <svg
                  className="icon icon--size-s text-danger"
                  width="16"
                  height="16"
                  role="img"
                  aria-label="Not Verified"
                >
                  <use xlinkHref={`${icons}#danger-circle`}></use>
                </svg>
                <span className="mw-200px text-nowrap">+1 532 987-2212</span>
              </p>
              <p>
                <a href="/" className="btn btn--xs fs-s">
                  Verify
                </a>
                <a href="/" className="btn btn--xs fs-s">
                  Edit
                </a>
              </p>
            </div> */}

            <h4 className="mb-1 opacity-50 fw-normal">Wallet Address:</h4>
            <div className="d-flex align-items-center gap-2">
              <WalletIcon height={24} width={24} wallet={wallet} />
              <span className="mw-200px text-ellipsis">
                {publicKey?.toString()}
              </span>
            </div>

            <h4 className="mb-1 opacity-50 fw-normal">Balance:</h4>
            <div className="d-flex align-items-center gap-2">
              <svg className="icon" width="16" height="16" aria-hidden="true">
                <use xlinkHref={`${icons}#wallet`}></use>
              </svg>
              <strong>{`${balance?.toFixed(5)} SOL`}</strong>
            </div>

            <div className="mt-5">
              <button onClick={() => disconnect()} className="btn btn--s">
                Disconnect
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default HeaderAccount;
