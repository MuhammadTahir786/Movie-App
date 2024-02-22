import { combineReducers } from 'redux';
import MovieReducer from './movieReducer';


const rootReducer = combineReducers({
    movie: MovieReducer
});

export default rootReducer;