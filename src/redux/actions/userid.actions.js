// Create a random userId of six characters in length
const createRandomUserId = len => {
    let userId = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i = 0; i < len; i++) {
        userId += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log(userId)
    return userId;
};

export const newId = createRandomUserId(6);

//Explain why syntax for action names varies
//All caps seems to be standard, so I want to stick with that where possible; but middleware uses lowercase with specific prefix. So when I have an action that gets dispatched to the server (or is dispatched from the server) I must use the syntax the middleware accepts
export const CREATE_RANDOM_USERID = 'server/userid';
export const SET_MY_USERID = 'SET_MY_USERID';

export const createRandomId = newID => ({
  type: CREATE_RANDOM_USERID,
  data: newID
});

export const setMyUserId = userID => ({
  type: SET_MY_USERID,
  data: userID
})

//I don't need a client-side action for this, I think
// export const addNewUserToCurrentUsers = newUser => ({
//   type: CREATE_RANDOM_USERID,
//   data: newUser
// });
