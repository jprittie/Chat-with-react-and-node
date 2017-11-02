## Chatroom with React and Node
### Built with React, Redux, SocketIO, Node, redux-socket.io

### Project description:
This project allows users to automatically join a chat by visiting `localhost:3000` in a browser. A random unique name and avatar are assigned to the user upon entering the chat, and the user details are added to a list of users currently online. The user's name and avatar are displayed next to their messages in the chat log. When a user exits the chat, their user details are removed from the list of users currently online.

### To build this project:
* From the command line, run `git clone https://github.com/jprittie/Chat-with-react-and-node.git`
* Enter `cd Chat-with-react-and-node` to navigate to the project root.
* Enter `cd server/socket-server` to navigate to the server side of the app.
* Run `npm install` to install the dependencies.
* Run `node index.js` to start the server.
* In a second command-line tab, enter `cd ../..` to navigate back to the project root.
* Run `npm install` to install the client-side dependencies.
* Run `npm start` to start the webpack server for create-react-app.
* That should launch a new browser tab connected to `localhost:3000`

### To use this project:
* When the browser tab launches, your username and avatar will be automatically generated. They appear in the top right-hand corner. You should also see your username and avatar appear in the list of users.
* Type a message and click the send button. The message should appear in the chatlog.
* If you want to see what it's like for multiple users to use the chatroom, open more browser tabs and go to `localhost:3000` in each one. Then type a message. It should appear in the chatlog in all tabs.
* When you close a browser tab, that user should disappear from the users list visible in your other tabs.

### Solution:
* I used Redux to handle state, but realized that it would be helpful to have middleware that could make Redux and SocketIO work together better.
* For example, initially, when a user typed in a message, I was sending it to a reducer on the client side and also to the server so it could be pushed to all connected clients. This felt clunky. So I researched different packages and decided to use one called `redux-socket.io`.
* After that, it was easier to reason about interactions between the server and clients. The middleware means I don't have to explicitly write socket events on the client side. I can just dispatch client-side actions that are heard by the server, and I can dispatch actions from my node server that are heard by client-side reducers.
* So now, when a user types a chat message, I dispatch it with an action with a `server/` prefix. (The middleware looks for that prefix.) The action is heard by socket.on on the server. I check the type of action, and if it is `server/message`, I add the incoming data to the message history and dispatch an action from the server to all connected clients with the updated message history.


### Planned improvements:
* I wanted the chatlog to autoscroll down when a user is at the bottom of the chatlog and a new message comes in. This feature is not working yet, but I plan to keep working on it.
* I would like the chat messages to appear at the left or right side of the screen so it feels more like a conversation.
* I would like to be able to build the project by starting both servers at once. It looks like there is an npm package called `concurrently` that will help with this, so I plan to implement that.
* Write unit tests
* In terms of UI, I think it would be more user-friendly to get rid of the submit button and just dispatch a message when the user hits Enter.
