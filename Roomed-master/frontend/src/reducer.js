
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import home from './reducers/home';
import feed from './reducers/feed';
import propertydetail from './reducers/propertydetail';
import listreducer from './reducers/listreducer';
import profile from './reducers/profile';

import { routerReducer } from 'react-router-redux';

export default combineReducers({

  auth,
  common,
  home,
    feed,
    propertydetail,
    listreducer,
    profile,

  router: routerReducer
});
