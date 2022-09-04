import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // console.log(token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
    tagType: ['authApi'],
  }),
  endpoints: builder => ({
    fetchUsers: builder.query({
      query: () => `/users/current`,
      providesTags: result => {
        // console.log(result);
        return result
          ? [
              ...result.map(({ id }) => ({ type: 'authApi', id })),
              { type: 'authApi', id: 'LIST' },
            ]
          : [{ type: 'authApi', id: 'LIST' }];
      },
    }),
    createUser: builder.mutation({
      query: newUser => ({
        url: `/users/signup`,
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'authApi', id: 'LIST' }],
    }),
  }),
});

export const { useCreateUserMutation, useFetchUsersQuery } = authApi;
