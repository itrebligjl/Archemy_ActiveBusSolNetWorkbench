import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import authUser from './reducers/authUser';
import common from './reducers/common';

export default combineReducers({
  authUser,
  common,
  router: routerReducer
});
