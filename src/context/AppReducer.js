import { GET_RECIPES, GET_SPECIALS } from "./actionTypes";

const appReducer = (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_SPECIALS:
      return {
        ...state,
        specials: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
