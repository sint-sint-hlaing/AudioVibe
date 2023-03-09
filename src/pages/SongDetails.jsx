import React from "react";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader } from "../components";

import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazam";

const SongDetails = () => {
  const { songid, id: artistId } = useParams();

  const { isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({
    songid,
  });
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs)
    return <Loader title="Searching song details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1]?.text.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
