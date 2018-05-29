
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import home from './reducers/home';
import feed from './reducers/feed';
import propertydetail from './reducers/propertydetail';

import { routerReducer } from 'react-router-redux';

export default combineReducers({

  auth,
  common,
  home,
    feed,
    propertydetail,

  router: routerReducer
});
