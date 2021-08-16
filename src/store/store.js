import { createStore } from 'redux';

const initialState = {
  valueState: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_INCREMENT_VALUE':
      return {
        ...state,
        valueState: state.valueState + action.payload.value
      }
    default:
      return state;
  }
};

let store = createStore(reducer);

export default store;
