import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default interface News {
  category: string;
  data: {
    author: string;
    content: string;
    date: string;
    id: string;
    imageUrl: string;
    readMoreUrl: string;
    time: string;
    title: string;
    url: string;
  }[];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://inshortsapi.vercel.app",
    //if api-key included
    //after baseUrl line
    //prepareHeaders(headers) {
    //   headers.set("your-api-key", "your api variable")
    //   return headers
    // }
  }),
  endpoints(builder) {
    return {
      fetchNews: builder.query<News[], string | void>({
        query(category = "startup") {
          return `/news?category=${category}`;
        },
      }),
    };
  },
});

export const { useFetchNewsQuery } = apiSlice;
