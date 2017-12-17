import {createStore, combineReducers} from "redux";
import userReducer from './reducers/userReducer';
import movieReducer from './reducers/movieReducer';


/* combines all reducers into one variable */
const reducers = combineReducers({
  user: userReducer,
  movie: movieReducer
})



/* create store creates the store with cooresponding reducers attached */
const store = createStore(
    reducers
)

export default store;
