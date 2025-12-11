import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="text-white absolute top-0 pt-60 px-18 bg-linear-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/3 text-sm py-4">{desc}</p>
      <div className="text-white">
        <button className="px-10 py-2 bg-white text-neutral-950 font-bold rounded-md">Play</button>
        <button className="px-10 py-2 bg-[#383C42] mx-2 rounded-md text-neutral-950 font-bold">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
