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
        providesTags: ["add-book", "deleteBook"],
      }),
    }),

    //get single book

    singleBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ["bookDetails", "reviews"],
    }),

    // add new book

    addBook: builder.mutation({
      query: (data) => ({
        url: "/add-book",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["add-book"],
    }),

    //update books

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/edit-book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["bookDetails"],
    }),

    // get review

    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["reviews"],
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
  }),
});

export const {
  useGetLatestBooksQuery,
  useGetBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  usePostReviewMutation,
  useUpdateBookMutation,
  useGetReviewQuery,
} = bookApi;
