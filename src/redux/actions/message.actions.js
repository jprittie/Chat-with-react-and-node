export const MESSAGE_ACTIONS = {
  // user actions
  INPUT_CHANGE: 'INPUT_CHANGE',
}
export const ADD_MESSAGE = 'server/message'

export const inputChange = value => ({
  type: MESSAGE_ACTIONS.INPUT_CHANGE,
  payload: value,
});


export const addMessage = messageAndUserId => ({
  type: ADD_MESSAGE,
  data: messageAndUserId
});

// export const addMessage = message => ({
//   type: MESSAGE_ACTIONS.ADD_MESSAGE,
//   payload: message,
// });

// export const receiveMessage = message => ({
//   type: MESSAGE_ACTIONS.RECEIVE_MESSAGE,
//   payload: message,
// });
