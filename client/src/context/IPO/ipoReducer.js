import { SEARCH, SET_LOADING } from "../types";

const ipoReducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        ipoData: action.payload,
        loading: false,
        // searchResult: true,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default ipoReducer;
