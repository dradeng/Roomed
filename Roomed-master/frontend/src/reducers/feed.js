import { FEED_PAGE_LOADED, FEED_PAGE_UNLOADED } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FEED_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags
      };
    case FEED_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
