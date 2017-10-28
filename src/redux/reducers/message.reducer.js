import { MESSAGE_ACTIONS } from '../actions/message.actions';

const DEFAULT_STATE = {
  textInput: '',
  messageLog: []
};

//rewrite as switch case
export const messages = (state = DEFAULT_STATE, action) => {
  if(action.type === MESSAGE_ACTIONS.INPUT_CHANGE) {
    return {
      ...state,
      textInput: action.payload };
  }
  if(action.type === MESSAGE_ACTIONS.ADD_MESSAGE) {
    return {
      ...state,
      messageLog: [...state.messageLog, ...action.payload] };
  }
  return state;
};
