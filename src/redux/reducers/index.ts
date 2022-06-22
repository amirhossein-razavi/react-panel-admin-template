import { combineReducers } from 'redux';
import notification from './notification';
import loading from './loading';
import publicReducer from './publicReducer';

export default combineReducers({
  notification,
  loading,
  publicReducer,
});