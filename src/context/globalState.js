import React, { createContext, useReducer } from "react";

import appReducer from "./appReducer";

const initialState = {
  transactions: [],
  loggedIn: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "add", payload: transaction });
  };

  const setLoggedIn = () => {
    dispatch({type: "login"})
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loggedIn: state.loggedIn,
        deleteTransaction,
        addTransaction,
        setLoggedIn
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
