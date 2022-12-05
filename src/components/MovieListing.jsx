import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Settings } from "../common/settings";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const { pending } = useSelector((state) => state.movies);
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list my-4">
        <h2 className="text-fontSecondary mb-4 text-xl my-4 font-semibold">
          Movies
        </h2>
        <div>
          {pending ? (
            <span>Loading...</span>
          ) : (
            <Slider {...Settings}>{renderMovies}</Slider>
          )}
        </div>
      </div>
      <div className="show-list my-16">
        <h2 className="text-fontSecondary text-xl my-4 font-semibold">Shows</h2>
        <div>
          {pending ? (
            <span>Loading...</span>
          ) : (
            <Slider {...Settings}> {renderShows}</Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
