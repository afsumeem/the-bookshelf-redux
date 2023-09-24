import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //get latest books
    getLatestBooks: builder.query({
      query: () => ({
        url: "/books",
        providesTags: ["books"],
      }),
    }),

    // get all books

    getBooks: builder.query({
      query: ({ search, genre, publicationYear }) => ({
        url: "/allBooks",
        params: { search, genre, publicationYear },
        providesTags: ["addBook", "deleteBook"],
      }),
    }),

    //get single book

    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["bookDetails", "reviews"],
    }),

    // add new book

    addBook: builder.mutation({
      query: (data) => ({
        url: "/books/add-book",
        method: "POST",

        body: data,
      }),
      invalidatesTags: ["addBook"],
    }),

    //update books

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/edit-book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["bookDetails"],
    }),

    // delete books

    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBook"],
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
  useDeleteBookMutation,
} = bookApi;
