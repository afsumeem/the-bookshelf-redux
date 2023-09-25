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
    removeFromWishList: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToWishlist, removeFromWishList } = bookSlice.actions;

export default bookSlice.reducer;
