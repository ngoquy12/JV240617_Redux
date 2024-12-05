const initialState = 0;

export const countReducer = (state = initialState, action) => {
  console.log("Count reducer: ", action);

  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
