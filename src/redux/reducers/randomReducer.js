const initialState = [];

export const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "random":
      // Lưu ý: Khi cập nhật state trong redux, không nên cập nhật trực tiếp nó, mà nên clone nó ra thành 1 giá trị
      const cloneState = [...state, action.payload];

      return cloneState;

    default:
      return state;
  }
};
