import React from "react";
import { BG } from "./constants/assests";

const CommonStyling = {
  fontWeight: 700,
};

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute flex  md:w-full h-full flex-col py-16 px-6 md:py-28 md:px-10 text-white"
      >
        <h1 style={CommonStyling} className="text-4xl md:text-6xl">
          Welcome.
        </h1>
        <h4 style={CommonStyling} className="text-lg md:text-3xl">
          Millions of movies, TV shows, and people to discover. Explore now.
        </h4>
        <div className="mt-6 md:mt-10 w-full">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for a movie, TV show, person..."
            className="w-full px-2 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base"
          />
        </div>
      </div>

      <img src={BG} alt="bg" className="w-full h-auto" />
    </div>
  );
};

export default Home;
