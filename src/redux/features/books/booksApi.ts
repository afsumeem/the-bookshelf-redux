import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get books

    getBooks: builder.query({
      query: () => "/books",
    }),

    // single book

    singleBook: builder.query({
      query: (id) => `/book/${id}`,
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
  useGetBooksQuery,
  useSingleBookQuery,
  usePostReviewMutation,
  useGetReviewQuery,
} = bookApi;
