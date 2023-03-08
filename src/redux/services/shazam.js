import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'e61ca10f39mshe606d43a17c7a99p142984jsn2f64319c98b7');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/track' }),
    getListRecommend: builder.query({ query: () => 'charts/track' }),
    //  getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
     getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
     getSongsBySearch: builder.query({ query: (searchTerm) => `search?search_type=SONGS_ARTISTS&term=${searchTerm}` }),
     getArtistDetails: builder.query({ query: (artistId) => `artists/get-top-songs?id=${artistId}` }),
  
     getSongDetails: builder.query({ query: ({ songid }) => `songs/get-details?key=${songid}` }),
     getSongRelated: builder.query({ query: ({ songid }) => `songs/get-related-artist?id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,useGetSongRelatedQuery,useGetSongDetailsQuery,useGetArtistDetailsQuery,useGetSongsByCountryQuery,useGetSongsBySearchQuery,useGetSongsByGenreQuery
} = shazamApi;
