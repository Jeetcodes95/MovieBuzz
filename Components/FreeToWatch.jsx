"use client";
import React, { useState, useEffect } from "react";
import { trendingMovies } from "@/utils/api";
import { FREETO_API_URL } from "./constants/constants";

const stylingComponent = {
  fontWeight: 700,
};

const FreeToWatch = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let getMovies = async () => {
      let data = await trendingMovies(FREETO_API_URL);
      console.log(data.results);
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <div className="relative">
      <div className="mb-6">
        <p className="text-bold text-3xl">All Movies</p>
      </div>
      
      <div className="overflow-x-scroll flex w-full z-10">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-72 mr-4 md:flex-col">
            <div className="mb-6 relative">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt=""
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <div className="mt-2">
                <p
                  style={stylingComponent}
                  className="text-lg font-semibold text-black"
                >
                  {movie.original_title}
                </p>
                <p className="text-sm text-slate-900">
                  {new Date(movie.release_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p
                  style={stylingComponent}
                  className="absolute top-2 right-2 px-2 py-1 bg-black text-white rounded-full text-sm"
                >
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

export default FreeToWatch;
