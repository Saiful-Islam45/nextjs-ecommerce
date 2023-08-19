import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBuilder } from '../../utils/type';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder: IBuilder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getCategories: builder.query({
      query: () => `/products/categories`,
    }),
  }),
});
export const {
  useGetProductsQuery,
  useSingleProductQuery,
  useGetCategoriesQuery
} = api;