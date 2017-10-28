import { MESSAGE_ACTIONS } from '../actions/message.actions';

const DEFAULT_STATE = {
  textInput: '',
  messageLog: []
};

//rewrite as switch case
// export const messages = (state = DEFAULT_STATE, action) => {
//   if(action.type === MESSAGE_ACTIONS.INPUT_CHANGE) {
//     return {
//       ...state,
//       textInput: action.payload };
//   }
//   if(action.type === MESSAGE_ACTIONS.ADD_MESSAGE) {
//     return {
//       ...state,
//       messageLog: [...state.messageLog, ...action.payload]
//
//     };
//   }
//   return state;
// };



export const messages = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case MESSAGE_ACTIONS.INPUT_CHANGE:
      return {
        ...state,
        textInput: action.payload
      }

    case MESSAGE_ACTIONS.ADD_MESSAGE:
      return {
        ...state,
        messageLog: state.messageLog.concat(action.payload),
        textInput: ''
      };
    default:
      return state;
  }

};


// export const textInput = (state = '', action) => {
//   switch (action.type) {
//     case 'INPUT_CHANGE':
//       return action.payload
//   }
//   return state;
// }
//
// export const messageLog = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_MESSAGE':
//       return [...state, action.payload];
//   }
//   return state;
// }
