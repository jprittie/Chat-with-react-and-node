import { SET_MY_USERID } from '../actions/userid.actions';

//This reducer is listening for actions to be dispatched from the server
//It will then update the number of current users according to whether another client has joined or left the chat
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


//This reducer is listening for the server to dispatch an action
export const myUserInfo = (state = {}, action) => {
  switch (action.type) {
    case 'setUserProfileInfo':
      return action.data;
    default:
      return state;
  }
}
