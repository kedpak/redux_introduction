import { MOVIE_SELECTED } from '../constants/constant'
import initialState from './initialState'

export default (state = initialState, action) => {

  switch(action.type) {
    case 'MOVIE_SELECTED':
      console.log('YOOOOO');
      return
    default:
      return state;
  }
}
