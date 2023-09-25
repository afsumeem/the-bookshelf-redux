import { api } from "../../api/apiSlice";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //user sign up
    signUp: builder.mutation({
      query: (data) => ({
        url: `/user/signup`,
        method: "POST",
        body: data,
      }),
    }),

    //sign in user
    signIn: builder.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = usersApi;
