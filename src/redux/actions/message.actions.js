export const MESSAGE_ACTIONS = {
  // user actions
  INPUT_CHANGE: 'INPUT_CHANGE',
  //ADD_MESSAGE: 'ADD_MESSAGE',

  // socket event actions
  //RECEIVE_MESSAGE: 'RECEIVE_MESSAGE'
}
export const ADD_MESSAGE = 'server/message'

export const inputChange = value => ({
  type: MESSAGE_ACTIONS.INPUT_CHANGE,
  payload: value,
});


export const addMessage = chatMessage => ({
  type: ADD_MESSAGE,
  // data: "This is a new message",
  data: chatMessage
});

// export const addMessage = message => ({
//   type: MESSAGE_ACTIONS.ADD_MESSAGE,
//   payload: message,
// });

// export const receiveMessage = message => ({
//   type: MESSAGE_ACTIONS.RECEIVE_MESSAGE,
//   payload: message,
// });
