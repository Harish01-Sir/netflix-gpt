import React, { useEffect } from "react";
import { MOVIES_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMoviesTrailers } from "../redux/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?",
      MOVIES_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);

    const filteredData = json.results.filter(
      (video) => video?.type == "Trailer"
    );
    console.log(filteredData);
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(trailer);
    dispatch(addMoviesTrailers(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrailer;
