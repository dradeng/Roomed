import { PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED, UPDATE_VALUE } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PROFILE_PAGE_LOADED:
      return {
        ...state,
      };
    case PROFILE_PAGE_UNLOADED:
      return {};
    case UPDATE_VALUE:
      return {
        ...state,
        [action.key]: action.value
      };
    default:
      return state;
  }
};
