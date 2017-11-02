import combineReducers from 'redux/es/combineReducers';
import { messages, textInput } from './message.reducer';
import { currentUsers, myUserInfo } from './userid.reducer';

export default combineReducers({
  messages: messages,
  textInput: textInput,
  currentUsers: currentUsers,
  myUserInfo: myUserInfo
});
