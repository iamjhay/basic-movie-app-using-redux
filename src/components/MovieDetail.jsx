import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section flex py-10 justify-around">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left flex-1">
            <div className="movie-title text-3xl font-semibold">
              {data.Title}
            </div>
            <div className="movie-rating mt-5 flex">
              <span className="mr-5">
                IMDB Rating{" "}
                <i className="fa fa-star" style={{ color: "#ff9e00" }}></i> :{" "}
                {data.imdbRating}
              </span>
              <span className="mr-5">
                IMDB Votes{" "}
                <i className="fa fa-thumbs-up" style={{ color: "#fafafa" }}></i>{" "}
                : {data.imdbVotes}
              </span>
              <span className="mr-5">
                Runtime <i className="fa fa-film" style={{ color: "#999" }}></i>{" "}
                : {data.Runtime}
              </span>
              <span className="mr-5">
                Year{" "}
                <i
                  className="fa fa-calendar"
                  style={{ color: "peachpuff" }}
                ></i>{" "}
                : {data.Year}
              </span>
            </div>
            <div className="movie-plot mt-5 text">{data.Plot}</div>
            <div className="movie-info w-full mt-5">
              <div>
                <span className="py-2 font-semibold inline-block mr-4 w-32">
                  Director
                </span>
                <span className="text-fontSecondary">{data.Director}</span>
              </div>
              <div>
                <span className="py-2 font-semibold inline-block mr-4 w-32">
                  Stars
                </span>
                <span className="text-fontSecondary">{data.Actors}</span>
              </div>
              <div>
                <span className="py-2 font-semibold inline-block mr-4 w-32">
                  Generes
                </span>
                <span className="text-fontSecondary">{data.Genre}</span>
              </div>
              <div>
                <span className="py-2 font-semibold inline-block mr-4 w-32">
                  Languages
                </span>
                <span className="text-fontSecondary">{data.Language}</span>
              </div>
              <div>
                <span className="py-2 font-semibold inline-block mr-4 w-32">
                  Awards
                </span>
                <span className="text-fontSecondary">{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right basis-1/3 flex justify-end">
            <img src={data.Poster} alt={data.Title} className=" object-cover" />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
