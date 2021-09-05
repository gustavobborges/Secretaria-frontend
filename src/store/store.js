import { createStore } from 'redux';


//Ver sobre o localStorage

const initialState = {
  user: {
    session: '',
    name: '',
    id: '',
    email: '',

  },
  valueState: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_INCREMENT_VALUE':
      return {
        ...state,
        valueState: state.valueState + action.payload.value
      }

    case 'LOGIN':
      console.log(`chegou no login. ${JSON.stringify(action.payload)}`)
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

let store = createStore(reducer);

export default store;
