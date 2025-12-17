import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const language = useSelector((store) => store?.lang?.currentLanguage)

  return (
    <div className="text-white pt-[11%] flex justify-center items-center">
      <form className="w-1/2 grid grid-cols-12 bg-neutral-900 py-4 px-4">
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="py-2 px-4 rounded-md bg-neutral-600/45 col-span-10 mr-4"
        />
        <button className="col-span-2 rounded-md bg-red-700">{lang[language].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
