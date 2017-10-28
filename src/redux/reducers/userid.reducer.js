
import { CREATE_RANDOM_USERID } from '../actions/userid.actions';

//This reducer is listening for a client-side action
//If the user updates their ID I should put it through this reducer?
export const myUserId = (state = '', action) => {
  switch (action.type) {
    case CREATE_RANDOM_USERID:
      return action.payload;
    default:
      return state;
  }
}

//These reducers are listening for actions to be dispatched from the server
export const newuserjoined = (state = '', action) => {
  switch (action.type) {
    case 'userjoined':
      return action.payload;
    default:
      return state;
  }
}

export const currentUsers = (state = [], action) => {
  switch (action.type) {
    case 'userjoined':
      return [...state, action.data];
    default:
      return state;
  }
}
