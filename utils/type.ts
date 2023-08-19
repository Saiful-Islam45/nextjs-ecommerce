import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react';

export interface IProduct {
  id: number;
  quantity?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface IBuilder {
  query: (arg0: {
    query: (() => string) | ((id: any) => string) | ((id: any) => string);
    providesTags?: string[];
  }) => any;
  mutation: (arg0: {
    query: ({ id, data }: { id: any; data: any }) => {
      url: string;
      method: string;
      body: any;
    };
    invalidatesTags: string[];
  }) => any;
}



 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
