import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptPage = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptPage, "gpt page");

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {showGptPage ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
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
