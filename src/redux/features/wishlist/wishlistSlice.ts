import { IBook } from "../../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IWishList {
  wishListBooks: IBook[];
}

const initialState: IWishList = {
  wishListBooks: [],
};

const bookSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      const existing = state.wishListBooks.find(
        (book) => book._id === action.payload._id
      );
      if (!existing) {
        state.wishListBooks.push(action.payload);
      }
    },
    removeFromWishList: (state, action: PayloadAction<IBook>) => {
      state.wishListBooks = state.wishListBooks.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToWishlist, removeFromWishList } = bookSlice.actions;

export default bookSlice.reducer;
