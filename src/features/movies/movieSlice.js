import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
  pending: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.pending = true;
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      state.pending = null;
      state.movies = payload;
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.pending]: (state) => {
      state.pending = true;
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import movieApi from "../../common/apis/movieApi";
// import { APIKey } from "../../common/apis/MovieApiKey";

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(fetchAsyncMovies())`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
// export const fetchAsyncMovies = createAsyncThunk(
//   "movies/fetchAsyncMovies",
//   async () => {
//     const movieText = "Harry";
//     const response = await movieApi.get(
//       `?apiKey=${APIKey}&s=${movieText}&type=movie`
//     );
//     return response.data;
//   }
// );

// export const fetchAsyncShows = createAsyncThunk(
//   "movies/fetchAsyncShows",
//   async () => {
//     const seriesText = "Friends";
//     const response = await movieApi.get(
//       `?apiKey=${APIKey}&s=${seriesText}&type=series`
//     );
//     return response.data;
//   }
// );

// export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
//   "movies/fetchAsyncMovieOrShowDetail",
//   async (id) => {
//     const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
//     return response.data;
//   }
// );

// const initialState = {
//   movies: {},
//   shows: {},
//   selectMovieOrShow: {},
//   pending: null,
//   error: false,
// };

// const movieSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {
//     removeSelectMovieOrShow: (state) => {
//       state.selectMovieOrShow = {};
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchAsyncMovies.pending, (state) => {
//       state.pending = true;
//     });
//     builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
//       state.pending = true;
//       state.movies = payload;
//     });
//     builder.addCase(fetchAsyncMovies.rejected, (state) => {
//       state.error = true;
//       state.pending = null;
//     });
//     builder.addCase(fetchAsyncShows.pending, (state) => {
//       state.pending = true;
//     });
//     builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
//       state.pending = null;
//       state.shows = payload;
//     });
//     builder.addCase(fetchAsyncMovieOrShowDetail.pending, (state) => {
//       state.pending = true;
//     });
//     builder.addCase(
//       fetchAsyncMovieOrShowDetail.fulfilled,
//       (state, { payload }) => {
//         state.pending = null;
//         return { ...state, selectMovieOrShow: payload };
//       }
//     );
//     builder.addCase(fetchAsyncMovieOrShowDetail.rejected, (state) => {
//       state.error = true;
//       state.pending = null;
//     });
//   },
// });

// export const { removeSelectMovieOrShow } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
// export const getAllShows = (state) => state.movies.shows;
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
// export default movieSlice.reducer;
