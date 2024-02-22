import MOVIE_TYPE from "../types/movieype";

const { FETCH_MOVIES, FETCH_MOVIE_DETAIL, SEARCH_MOVIE, FETCH_FAVORITE_MOVIES } = MOVIE_TYPE;

const initialState = {
    data: [],
    total_pages: null,
    detail: {},
    search_movies: [],
    favorite_movies: []
};

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, data: [...state.data, ...action.payload.data], total_pages: action.payload.pages };
        case FETCH_MOVIE_DETAIL:
            return { ...state, detail: action.payload.data };
        case SEARCH_MOVIE:
            return { ...state, search_movies: action.payload.data };
        case FETCH_FAVORITE_MOVIES:
            return { ...state, favorite_movies: action.payload.data }
        default:
            return state;
    }
};

export default MovieReducer;