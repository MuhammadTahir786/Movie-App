import MovieApi from "../../service/movieServices";
import MOVIE_TYPE from "../types/movieype";


const { FETCH_MOVIES, FETCH_MOVIE_DETAIL, SEARCH_MOVIE, FETCH_FAVORITE_MOVIES } = MOVIE_TYPE;

export const setMovies = (data, pages) => ({
    type: FETCH_MOVIES,
    payload: { data, pages }
})

export const setMoviesDetail = (data) => ({
    type: FETCH_MOVIE_DETAIL,
    payload: { data }
})

export const setSearchMovies = (data) => ({
    type: SEARCH_MOVIE,
    payload: { data }
})

export const setFavoriteMovies = (data) => ({
    type: FETCH_FAVORITE_MOVIES,
    payload: { data }
})


export const getMovies = (page) => async (dispatch) => {
    try {
        const response = await MovieApi.getMovies(page)
        dispatch(setMovies(response.data.results, response.data.total_pages));
    } catch (error) {
        console.log(error);
    }
}

export const getMovieDetail = (id) => async (dispatch) => {
    try {
        const response = await MovieApi.getMovieDetail(id)
        dispatch(setMoviesDetail(response.data));
    } catch (error) {
        console.log(error);
    }
}

export const searchMovies = (query) => async (dispatch) => {
    try {
        const response = await MovieApi.searchMovie(query);
        dispatch(setSearchMovies(response.data.results));
    } catch (error) {
        console.log(error);
    }
};

export const getFavoriteMovies = () => async (dispatch) => {
    try {
        const response = await MovieApi.getFavoriteMovies();
        dispatch(setFavoriteMovies(response.data.results));
    } catch (error) {
        console.log(error);
    }
}