import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import user from "../Images/user.png";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "" && alert("please search input should not be empty"));
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    // setTerm("");
  };
  return (
    <div className="py-6 bg-secondary ">
      <nav className="2xl:w-[95vw] xl:max-w-8xl px-4 sm:px-8 mx-auto flex items-center justify-between">
        <Link to="/" className="no-underline ">
          <h3 className="logo text-xl font-semibold text-fontPrimary">
            Movie App
          </h3>
        </Link>
        <div className="search">
          <form
            onSubmit={handleSubmit}
            className="hidden sm:flex overflow-hidden"
          >
            <input
              type="text"
              value={term}
              placeholder="search movies"
              onChange={(e) => setTerm(e.target.value)}
              className="p-2 lg:w-96 focus:outline-none border-0 text-primary"
            />
            <button className="bg-fontSecondary h-full p-2">Search</button>
          </form>
        </div>
        <div className="user-image h-8 w-8">
          <img src={user} alt="user" className="object-cover w-full h-full" />
        </div>
      </nav>
      <form onSubmit={handleSubmit} className="mt-5 mx-4 flex sm:hidden ">
        <input
          type="text"
          value={term}
          placeholder="search movies"
          onChange={(e) => setTerm(e.target.value)}
          className="p-2 focus:outline-none border-0 text-primary w-full"
        />
        <button className="bg-fontSecondary h-full p-2">Search</button>
      </form>
    </div>
  );
};

export default Header;
