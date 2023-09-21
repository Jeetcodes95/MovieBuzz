"use client"
import React, { useState } from "react";
import { logoURL } from "../constants/constants";
import Link from "next/link";
import Search from "./Search";

const paragraph = {
  fontWeight: 600,
};

const Header = ({ slug }) => {
  const [isHovered, setIsHovered] = useState({
    movies: false,
    tvShows: false,
    people: false,
    more: false,
  });

  const handleMouseEnter = (element) => {
    setIsHovered((prevState) => ({ ...prevState, [element]: true }));
  };
  const handleMouseLeave = (element) => {
    setIsHovered((prevState) => ({ ...prevState, [element]: false }));
  };

  return (
    <div
      className="w-full px-6 sm:px-12 md:px-24 py-3 sm:py-4 md:py-5 text-white flex flex-col sm:flex-row justify-between items-center"
      style={{ background: "#032541" }}
    >
      <div className="flex items-center gap-4 sm:gap-10">
        <Link href="/"><img src={logoURL} alt="logo" className="h-5" /></Link>
        <div className="flex items-center gap-4 sm:gap-10">
          <div
            className="relative z-10"
            onMouseEnter={() => handleMouseEnter("movies")}
            onMouseLeave={() => handleMouseLeave("movies")}
          >
            <p style={paragraph}>Movies</p>
            {isHovered.movies && (
              <div className="absolute bg-white shadow-md text-black px-4 py-3 sm:px-5 sm:py-4 w-40 sm:w-44 rounded-lg">
                <Link href="/routes/popular">
                  <p>Popular</p>
                </Link>
                <Link href="/routes/nowPlaying">
                  <p>Now Playing</p>
                </Link>
                <Link href="/routes/upcoming">
                  <p>Upcoming</p>
                </Link>
                <Link href="/routes/topRated">
                  <p>Top Rated</p>
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative z-10"
            onMouseEnter={() => handleMouseEnter("tvShows")}
            onMouseLeave={() => handleMouseLeave("tvShows")}
          >
            <p style={paragraph}>TV Shows</p>
            {isHovered.tvShows && (
              <div className="absolute bg-white shadow-md text-black px-4 py-3 sm:px-5 sm:py-4 w-40 sm:w-44 rounded-lg">
                <p>Popular</p>
                <p>Airing Today</p>
                <p>ON TV</p>
                <p>Top Rated</p>
              </div>
            )}
          </div>
          <div
            className="relative z-10"
            onMouseEnter={() => handleMouseEnter("people")}
            onMouseLeave={() => handleMouseLeave("people")}
          >
            <p style={paragraph}>People</p>
            {isHovered.people && (
              <div className="absolute bg-white shadow-md text-black px-4 py-3 sm:px-5 sm:py-4 w-40 sm:w-44 rounded-lg">
                <p>Popular People</p>
              </div>
            )}
          </div>
          <div
            className="relative z-10"
            onMouseEnter={() => handleMouseEnter("more")}
            onMouseLeave={() => handleMouseLeave("more")}
          >
            <p>More</p>
            {isHovered.more && (
              <div className="absolute bg-white shadow-md text-black px-4 py-3 sm:px-5 sm:py-4 w-40 sm:w-44 rounded-lg">
                <p>Discussions</p>
                <p>Leaderboard</p>
                <p>Support</p>
                <p>Api</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div><Search/></div>
    </div>
  );
};

export default Header;
