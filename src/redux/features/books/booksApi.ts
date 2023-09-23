import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //get latest books
    getLatestBooks: builder.query({
      query: () => ({
        url: "/latest-books",
        providesTags: ["books"],
      }),
    }),
    // get all books

    getBooks: builder.query({
      query: ({ search, genre, publicationYear }) => ({
        url: "/books",
        params: { search, genre, publicationYear },
        providesTags: ["addNewBook", "deleteBook"],
      }),
    }),

    //get single book

    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),

    // add new book

    addBook: builder.mutation({
      query: ({ data }) => ({
        url: `books/add-book`,
        method: "POST",
        body: data,
      }),
    }),

    // post review

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),

    // get review

    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetLatestBooksQuery,
  useGetBooksQuery,
  useSingleBookQuery,
  usePostReviewMutation,
  useGetReviewQuery,
} = bookApi;
