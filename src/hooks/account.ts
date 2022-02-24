import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const useBalance = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const { publicKey, disconnecting } = useWallet();

  useEffect(() => {
    const getBalance = async () => {
      if (publicKey) {
        const network = clusterApiUrl('devnet');
        const connection = new Connection(network, 'processed');
        const balance = await connection.getBalance(publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    };
    getBalance();
  }, [publicKey]);

  useEffect(() => {
    if (disconnecting) {
      setBalance(null);
    }
  }, [disconnecting]);

  return balance;
};
