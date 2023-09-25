import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import { api } from "./api/apiSlice";
import userReducer from "./features/users/userSlice";
import readListReducer from "./features/readList/readListSlice";

const store = configureStore({
  // reducer

  reducer: {
    wishlist: wishlistReducer,
    user: userReducer,
    readList: readListReducer,

    [api.reducerPath]: api.reducer,
  },

  // middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

//type
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
