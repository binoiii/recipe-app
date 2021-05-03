import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import appReducer from "./AppReducer";

const initialState = {
  recipes: [],
  specials: [],
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ dispatch, recipes: state.recipes, specials: state.specials }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propType = {
  children: PropTypes.node.isRequired,
};
