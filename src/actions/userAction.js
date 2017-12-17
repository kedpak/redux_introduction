import { USER_CREATED, USER_RECIEVED,  USER_LOGGED_IN, CURRENT_USER_RECIEVED } from '../constants/constant'

export default {
  createUser: (user) => {
    return{
      type: USER_CREATED,
      payload: user
    }
  }
}
