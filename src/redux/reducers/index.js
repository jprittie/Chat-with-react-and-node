import combineReducers from 'redux/es/combineReducers';
//import { routerReducer } from 'react-router-redux';
import { messages, servertest, textInput } from './message.reducer';

export default combineReducers({
  messages: messages,
  servertest: servertest,
  textInput: textInput
  // recipe: recipeReducer,
  // routing: routerReducer,
  // searchParameters: searchParameters,
  // selectedRecipe: selectedRecipe,
  // loadingState: loadingState,
  // savedRecipes: savedRecipes,

});
