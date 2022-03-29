import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_COUNTER,
} from '../actions/counter';

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        count: action.payload,
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
