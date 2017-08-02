import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import PDPReducer from './containers/PDP/reducer';

export default combineReducers({
  routing: routerReducer,
  product: PDPReducer
});
