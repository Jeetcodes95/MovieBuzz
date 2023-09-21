"use client";
import React, { useEffect, useState } from "react";
import { trendingMovies } from "@/utils/api";
import { POPULAR_API_URL } from "@/Components/constants/constants";

const Page = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const getPopularRes = await trendingMovies(POPULAR_API_URL);
      setPopular(getPopularRes.results);
    };

    getPopular();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-xl py-3 px-4">Popular</h1>
      <div className="flex flex-wrap w-full">

      {popular.map((movie, key) => (
        <div key={key} className="p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
          {" "}
          {/* Adjust the width here */}
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
