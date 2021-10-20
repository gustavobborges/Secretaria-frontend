import { createStore } from 'redux';


const initialState = {
  user: {
    session: '',
    name: '',
    id: '',
    email: '',
  },
  appointments: [],
  showForm: false,
  selectedAppointment: {},
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

    case 'SET_APPOINTMENTS':
      console.log(`SET_APPOINTMENTS: ${JSON.stringify(action)}`)
      return {
        ...state,
        appointments: action.payload
      }
    default:
      return state;
  }
};

let store = createStore(reducer);

export default store;
