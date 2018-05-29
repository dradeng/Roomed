import { PROPERTY_PAGE_LOADED, PROPERTY_PAGE_UNLOADED } from '../constants/actionTypes';

const state = {
    showMap: false,

};

export default (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags
      };
    case PROPERTY_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
