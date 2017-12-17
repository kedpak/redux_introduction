import { USER_CREATED, USER_RECIEVED,  USER_LOGGED_IN, CURRENT_USER_RECIEVED } from '../constants/constant'

let initialState = {
  all: []
}


export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case USER_CREATED:
      console.log('USER_CREATED: ' + JSON.stringify(action.payload));
      return newState;

    default:
      return state

  }
}
