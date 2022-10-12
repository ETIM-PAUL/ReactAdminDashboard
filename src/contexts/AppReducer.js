export const StateReducer = (state, { type, payload }) => {
  switch (type) {
    case "setActiveMenu": {
      return {
        ...state,
        activeMenu: payload,
      }
    }
    case "setScreenSize": {
      return {
        ...state,
        screenSize: payload,
      }
    }
    case "setTheme": {
      return {
        ...state,
        theme: payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}