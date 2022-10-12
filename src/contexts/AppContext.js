import React, { createContext, useContext, useReducer } from 'react';
import { StateReducer } from './AppReducer';

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
    activeMenu: true,
    theme: "light",
    screenSize: undefined,
  });

  const value = { state, dispatch }

  return (
    <StateContext.Provider
      value={value}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);