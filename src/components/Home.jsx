import React from "react";
import { useEffect } from "react";
import MovieListing from "./MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    const seriesText = "Friends";
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
