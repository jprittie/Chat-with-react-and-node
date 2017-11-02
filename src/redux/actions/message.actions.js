export const INPUT_CHANGE = 'INPUT_CHANGE'
export const ADD_MESSAGE = 'server/message'

//This action is fired when the text input changes. It goes to the reducers on the client side.
export const inputChange = value => ({
  type: INPUT_CHANGE,
  data: value,
});

//This action is dipatched to the server when the user enters a new message. It sends the message, user ID and user avatar URL.
export const addMessage = messageAndUserId => ({
  type: ADD_MESSAGE,
  data: messageAndUserId
});
