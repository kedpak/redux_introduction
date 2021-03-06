import { USER_CREATED, USER_RECIEVED,  USER_LOGGED_IN, CURRENT_USER_RECIEVED } from '../constants/constant'
import initialState from './initialState'

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    /* adds the inputed fileds to the state and returns new state */
    case USER_CREATED:
      console.log('USER_CREATED: ' + JSON.stringify(action.payload));
      let all = Object.assign([], newState.allUsers);
      all.push(action.payload);
      newState['allUsers'] = all;
      return newState;

    default:
      return state

  }
}
