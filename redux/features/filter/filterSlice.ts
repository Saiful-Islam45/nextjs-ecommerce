import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ALL_CATEGORY } from "../../../utils/type";

export interface IFilterState {
category: string
}

const initialState: IFilterState = {
  category: ALL_CATEGORY
};

const filterSlice = createSlice({
  name: "FilterSlice",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.category = action?.payload
    }
  }
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
