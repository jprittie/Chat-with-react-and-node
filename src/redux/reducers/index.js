import combineReducers from 'redux/es/combineReducers';
//import { routerReducer } from 'react-router-redux';
import { messages } from './message.reducer';

export default combineReducers({
  messages: messages
  // recipe: recipeReducer,
  // routing: routerReducer,
  // searchParameters: searchParameters,
  // selectedRecipe: selectedRecipe,
  // loadingState: loadingState,
  // savedRecipes: savedRecipes,

});
