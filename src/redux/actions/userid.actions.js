// Create a random userId of six characters in length
const createRandomUserId = len => {
    let userId = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i = 0; i < len; i++) {
        userId += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return userId;
};
export const newId = createRandomUserId(6);


//This action sends the new user ID to the server
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
