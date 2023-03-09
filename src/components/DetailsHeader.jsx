import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  console.log(artistData);
  return (
    <div className="relative w-full flex flex-col">
      {/* <div className=" w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" /> */}

      <div className="w-full flex items-center p-5 mb-5 hover:bg-[#3d3d3d] rounded-lg">
        <img
          alt="profile"
          src={
            artistId
              ? artistData?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : songData?.images?.coverart
          }
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 "
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artistData?.attributes?.artistName : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className="text-base text-gray-400 mt-2">
            {artistId
              ? artistData?.attributes?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>
      {/* <div className="w-full sm:h-44 h-24" /> */}
    </div>
  );
};

export default DetailsHeader;
