import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBack = ({ movieId }) => {
  const trailer = useSelector((store) => store?.movies?.trailers);
  console.log(trailer, "trailer");

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBack;
