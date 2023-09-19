import { IBook } from "../../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IWishList {
  books: IBook[];
}

const initialState: IWishList = {
  books: [],
};

const bookSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
  },
});

export const { addToWishlist } = bookSlice.actions;

export default bookSlice.reducer;
