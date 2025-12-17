import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";
import backgroundImg from "../assets/background_banner.jpg";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute bg-cover bg-center brightness-40 overflow-hidden -z-20">
        <img src={backgroundImg} alt="" className="scale-120" />
      </div>
      <GptSearchBar />
      <GptMovies />
    </div>
  );
};

export default GptSearchPage;
