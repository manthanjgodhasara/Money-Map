import React, { createContext, useReducer } from "react";
import { data } from "../data";

import appReducer from "./appReducer";

const initialState = {
  transactions: data,
  loggedIn: true,
  isEditing: false,
  editId: "",
  editTrans: { id: "", name: "", category: "", date: "", amount: "" },
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

  const editTransaction = (id) => {
    // const specificItem = list.find((item) => item.id === id);
    // setIsEditing(true);
    // setEditID(id);
    // setName(specificItem.title);
    dispatch({ type: "edit", payload: id });
  };

  const setTransactions = (trans) => {
    dispatch({type: "setTrans", payload: trans})
  }

  const notEditing = () => {
    dispatch({type: "notEditing"})
  }

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
        setLoggedIn,
        isEditing: state.isEditing,
        editTrans: state.editTrans,
        editId: state.editId,
        editTransaction,
        notEditing,
        setTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
