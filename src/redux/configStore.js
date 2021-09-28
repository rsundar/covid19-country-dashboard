import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import covidDataReducer from './data/covidData';

const store = createStore(
  covidDataReducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
