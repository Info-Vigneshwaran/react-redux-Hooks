const initialCount = 2;
const counterReducer = (state = initialCount, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

export default counterReducer;
