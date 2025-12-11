import { useEffect } from "react";
import { MOVIES_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIES_OPTIONS
    );

    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
