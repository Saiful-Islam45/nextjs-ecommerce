import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
}

const initialState: IProduct = {
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
});

export default productSlice.reducer;