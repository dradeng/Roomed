import { FEED_PAGE_LOADED, FEED_PAGE_UNLOADED, SHOW_FILTER, CHANGE_FILTER_VALUE,CHANGE_FILTER_PRICE } from '../constants/actionTypes';

const defaultState = {
  filterView: false,
    minPrice: 0,
    maxPrice: 5000,
  
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FEED_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags
      };
    case FEED_PAGE_UNLOADED:
      return {};
    case SHOW_FILTER:
      return {
        ...state,
        filterView: !state.filterView
      };
    case CHANGE_FILTER_VALUE:
      return {
        ...state,
        [action.key]: action.value
      };
     case CHANGE_FILTER_PRICE:
      return {
        ...state,
        minPrice: action.min,
        maxPrice: action.max,
      };
    default:
      return state;
  }
};
