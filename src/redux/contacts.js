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
export const { addFilter, addName, addNumber } = itemsSlice.actions;

export const getFilter = state => state.contacts.filter;
export const getName = state => state.contacts.name;
export const getNumber = state => state.contacts.number;

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://630d9500109c16b9abe82b0f.mockapi.io/api/v1',
    tagTypes: ['Contacts'],
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: result => {
        // console.log(result);
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
