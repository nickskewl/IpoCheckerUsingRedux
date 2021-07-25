import { SEARCH, SET_LOADING } from "../action/types";

const initialState = {
  loading: false,
  ipoData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        ipoData: action.payload,
        loading: false,
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
