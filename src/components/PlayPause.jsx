import React from "react";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  return (
    <>
      {isPlaying && activeSong.title === song.title ? (
        <FiPauseCircle
          size={35}
          className="text-gray-300"
          onClick={handlePause}
        />
      ) : (
        <FiPlayCircle
          size={35}
          className="text-gray-300"
          onClick={handlePlay}
        />
      )}
    </>
  );
};

export default PlayPause;
