import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/root_reducer";

const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
   const { logger } = require("redux-logger");
   middlewares.push(logger);
}


const configureStore = (preLoadedState = {}) =>  {
   return createStore(rootReducer, preLoadedState,applyMiddleware(...middlewares))
}; 

export default configureStore; 
