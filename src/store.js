import {createStore, combineReducers} from "redux";
import userReducer from './reducers/userReducer';
import movieReducer from './reducers/movieReducer';
const reducers = combineReducers({
  user: userReducer,
  movie: movieReducer
})

const store = createStore(
    reducers
)

export default store;
