import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondContainer/>
      {/* 
        -Main container
          -video
          -title
        -Secondary container
          -movies list * n 
          -cards * n  
      */}
    </div>
  );
};

export default Browse;
