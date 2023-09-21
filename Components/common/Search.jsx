"use client";
import React, { useEffect, useState } from "react";
import { trendingMovies } from "@/utils/api";
import { ALL_API_URL } from "../constants/constants";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { TRENDING_API_URL } from "../constants/constants";

const topStyling = {
  top: "9%",
};

const Search = () => {
  const [clicks, setClicks] = useState(false);
  const [searchMoviesAndTvShows, setsearchMoviesAndTvShows] = useState([]);
  const [showTrending, setTrending] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await trendingMovies(TRENDING_API_URL);
      setTrending(trending.results);
    };
    fetchTrending();
  }, []);

  const handleClick = () => {
    setClicks(!clicks);
    setSearchText("");
    setsearchMoviesAndTvShows([]);
  };

  const getInput = async (e) => {
    setSearchText(e.target.value);
    if (e.target.value.trim() !== "") {
      const searchResults = await trendingMovies(ALL_API_URL, e.target.value);
      setsearchMoviesAndTvShows(searchResults.results);
    } else {
      setsearchMoviesAndTvShows([]);
    }
  };

  return (
    <div>
      {clicks ? (
        <div
          className="w-full h-4/6 bg-white text-black absolute right-0 left-0  z-10 px-3 py-3 overflow-auto"
          style={topStyling}
        >
          <div className="flex items-center">
            <input
              type="search"
              className="w-full px-2 py-2 text-black border-b border-gray-400"
              placeholder="Search"
              value={searchText}
              onChange={getInput}
            />
            <RiCloseLine
              onClick={() => handleClick()}
              className="ml-2 cursor-pointer"
            />
          </div>
          {searchMoviesAndTvShows.length > 0 ? (
            <div className="py-2">
              <h3 className="font-bold text-xl">Matching Movies</h3>
              <ul>
                {searchMoviesAndTvShows.map((movies, index) => (
                  <li key={index}>{movies.original_title}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="py-2">
              <p className="font-bold text-xl">Not Found</p>
            </div>
          )}
          <div className="py-2">
            <h3 className="font-bold text-xl">Trending</h3>
            <ul>
              {showTrending.map((movie, index) => (
                <li
                  key={index}
                  className="border-b border-gray-400 flex items-end gap-1"
                >
                  {" "}
                  <RiSearchLine />
                  {movie.original_title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <RiSearchLine onClick={() => handleClick()} />
      )}
    </div>
  );
};

export default Search;

