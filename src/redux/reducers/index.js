import combineReducers from 'redux/es/combineReducers';
//import { routerReducer } from 'react-router-redux';
import { messages, servertest, textInput } from './message.reducer';
import { currentUsers, myUserInfo } from './userid.reducer';

export default combineReducers({
  messages: messages,
  servertest: servertest,
  textInput: textInput,
  // newuserjoined: newuserjoined,
  currentUsers: currentUsers,
  myUserInfo: myUserInfo
});

//I should user redux-watch to look for changes in new userjoined, so that I can display briefly that the user has joined the chat.
//The other approach is that I have a panel with all the current users in the chatroom. That's easier, because then I just keep them in an array, and delete from the array when users exit the chat.
//I also have to figure out how to attach userids to messages and display that.
