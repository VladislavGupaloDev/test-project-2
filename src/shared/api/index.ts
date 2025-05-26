import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/'
  }),
  endpoints: () => ({}),
  keepUnusedDataFor: 30
})
