import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, i }));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  return (
    <div
      key={i}
      className=" w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt="Music img" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="text-xl truncate text-white hover:underline">
          <Link to={`../songs/${song.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-400 hover:text-cyan-400">
          <Link
            to={
              song.artists
                ? `../artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
