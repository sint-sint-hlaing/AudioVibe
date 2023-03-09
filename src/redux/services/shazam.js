import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "4ac40836f6msh69dbb2afeedb329p11ee6bjsn52ac90a7e0f2"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "charts/track" }),
    getDiscover: builder.query({ query: () => "charts/track?startFrom=20" }),

    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `search?search_type=SONGS_ARTISTS&term=${searchTerm}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `artists/get-top-songs?id=${artistId}`,
    }),

    getSongDetails: builder.query({
      query: ({ songid }) => `songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `songs/get-related-artist?id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetDiscoverQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamApi;
