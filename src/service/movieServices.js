import Service from './index'

const MovieApi = {
    getMovies(page) {
        return Service.getCall(`/3/discover/movie?page=${page}`)
    },
    getMovieDetail(id) {
        return Service.getCall(`/3/movie/${id}`)
    },
    searchMovie(query) {
        return Service.getCall(`/3/search/movie?query=${query}`)
    },
    addToFavorite(data) {
        return Service.postCall(`/3/account/21018077/favorite`, data)
    },
    getFavoriteMovies() {
        return Service.getCall(`/3/account/21018077/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`)
    },
}
export default MovieApi