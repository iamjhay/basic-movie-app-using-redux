import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item bg-secondary cursor-pointer transition-all hover:scale-105 ease-out min-h-[450px] h-full m-2.5">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top h-[300px]">
            <img
              src={data.Poster}
              alt={data.Title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card-bottom p-5">
            <div className="card-info text-fontPrimary">
              <h4 className="text-xl mb-2">{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
