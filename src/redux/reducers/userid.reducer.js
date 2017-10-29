
import { SET_MY_USERID } from '../actions/userid.actions';

//This reducer is listening for a client-side action
//If user updates their ID I will put it through this reducer
export const myUserId = (state = '', action) => {
  switch (action.type) {
    case SET_MY_USERID:
      return action.data;
    default:
      return state;
  }
}

//This reducer is listening for actions to be dispatched from the server
export const currentUsers = (state = [], action) => {
  switch (action.type) {
    case 'userjoined':
      return action.data;
    case 'userleft':
      return action.data;
    default:
      return state;
  }
}

// I'll use this reducer if I decide to display a message saying a new user has joined
// export const newuserjoined = (state = '', action) => {
//   switch (action.type) {
//     case 'userjoined':
//       // return action.payload;
//       return state;
//     default:
//       return state;
//   }
// }
