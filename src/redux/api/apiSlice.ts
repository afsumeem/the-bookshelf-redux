import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-bookshelf-fvydgu67t-afsumeem.vercel.app/",
  }),
  tagTypes: ["reviews", "addBook", "bookDetails", "deleteBook"],
  endpoints: () => ({}),
});
