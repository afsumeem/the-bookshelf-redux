import { IBook } from "../../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IReadList {
  books: IBook[];
}

const initialState: IReadList = {
  books: [],
};

const readListSlice = createSlice({
  name: "readList",
  initialState,
  reducers: {
    addToReadList: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (!existing) {
        state.books.push(action.payload);
      }
    },
    removeFromReadList: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToReadList, removeFromReadList } = readListSlice.actions;

export default readListSlice.reducer;
