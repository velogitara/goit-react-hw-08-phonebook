// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'contacts',
  initialState: {
    // items: [],
    name: '',
    number: '',
    filter: '',
  },
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
    addNumber(state, action) {
      state.number = action.payload;
    },
    // removeContact(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// =============== Exports and Selectors
export const { addFilter, addName, addNumber } = itemsSlice.actions;

export const getFilter = state => state.contacts.filter;
export const getName = state => state.contacts.name;
export const getNumber = state => state.contacts.number;

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
    tagTypes: ['Contacts'],
    keepUnusedDataFor: 5,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: result => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }];
      },
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
