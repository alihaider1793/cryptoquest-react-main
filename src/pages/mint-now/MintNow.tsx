import { Helmet } from 'react-helmet';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import MintsList from '../../components/mints-list/MintsList';
import PageHeader from '../../components/page-header/PageHeader';
import { useBalance } from '../../hooks/account';

const MintNow = () => {
  const balance = useBalance();

  return (
    <>
      <Helmet>
        <title>Mint Coming Soon ⋅ Crypto Quest</title>
        <meta name="description" content="Mint Coming Soon ⋅ Crypto Quest" />
      </Helmet>

      <PageHeader title="Mint Coming Soon" />
      <div className="section section--bg-curves">
        <div className="container container--medium pt-0">
          <div className="mint relative zindex-1 mw-600px m:mw-100 mx-auto l:mt-n5">
            <div className="mint__header mb-11 m:mb-8 p-4 s:px-8 bg-white rounded-l box-shadow-l">
              <p className="mint__balance my-0 fw-bold">
                {balance || balance === 0
                  ? `Balance: ${balance.toFixed(5)} SOL`
                  : 'Mint Coming Soon'}
              </p>
              <div className="s:ml-auto">
                <WalletMultiButton className="mint__wallet-button" />
              </div>
            </div>
            <MintsList />
            <div>
              <button className="btn btn--primary w-100">Mint Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintNow;
