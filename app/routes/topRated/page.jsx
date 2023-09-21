"use client";
import React, { useState, useEffect } from "react";
import { trendingMovies } from "@/utils/api";
import { TOPRATED_API_URL } from "@/Components/constants/constants";

const Page = () => {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    const getTopRated = async () => {
      try {
        const rated = await trendingMovies(TOPRATED_API_URL);
        setTopRated(rated.results);
        console.log("rated data", rated.results);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };
    getTopRated();
  }, []);

  return (
    <div className="flex flex-col">

      <h1 className="font-bold text-2xl px-3 py-4">TOP RATED</h1>

      <div className="w-full flex flex-wrap ">
        {topRated.map((movie, key) => (
          <div key={key} className="p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">

            <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-sm font-semibold">{movie.title}</h2>
                <p className="text-gray-600">
                  {new Date(movie.release_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="absolute top-2 right-2 px-2 py-1 bg-black text-white rounded-full text-sm">
                  {movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
