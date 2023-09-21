import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import { api } from "./api/apiSlice";
import userReducer from "./features/users/userSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

//type
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
