import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface WalletState {
  publicKey: string;
}

const initialState: WalletState = {
  publicKey: '',
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setPublickKey(state, action) {
      state.publicKey = action.payload;
    },
  },
});

export const { setPublickKey } = walletSlice.actions;
export default walletSlice.reducer;

export const selectPublicKey = (state: RootState) => state.wallet.publicKey;
