import { MESSAGE_ACTIONS, ADD_MESSAGE } from '../actions/message.actions';


// This reducer tests redux-socket.io middleware
export const servertest = (state = {}, action) => {
  switch(action.type){
    case 'message':
      return Object.assign({}, {message:action.data});
    default:
      return state;
  }
}

export const textInput = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return action.payload
    default:
      return state;
  }
}

//This listens for a server-side action that sends all messages
export const messages = (state = [], action) => {
  switch (action.type) {
    // case 'ADD_MESSAGE':
    case 'messages':
      return action.data;
    default:
      return state;
  }
}

// This made textInput part of message object so I could clear textInput
// export const messages = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case MESSAGE_ACTIONS.INPUT_CHANGE:
//       return {
//         ...state,
//         textInput: action.payload
//       }
//
//     case MESSAGE_ACTIONS.ADD_MESSAGE:
//       return {
//         ...state,
//         messageLog: state.messageLog.concat(action.payload),
//         textInput: ''
//       };
//     default:
//       return state;
//   }
//
// };
