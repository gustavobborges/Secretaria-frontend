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
  selectedPatient: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_INCREMENT_VALUE':
      return {
        ...state,
        valueState: state.valueState + action.payload.value
      }

    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      }

    case 'SET_APPOINTMENTS':
      return {
        ...state,
        appointments: action.payload
      }

    case 'SET_SHOW_FORM':
      console.log(`SET_SHOW_FORM: ${JSON.stringify(action)}`)
      return {
        ...state,
        showForm: action.payload
      }

    case 'SET_SELECTED_APPOINTMENT':
      console.log(`SET_SELECT_APPOINTMENT: ${JSON.stringify(action.payload)}`)
      return {
        ...state,
        selectedAppointment: action.payload
      }
    default:
      return state;
  }
};

let store = createStore(reducer);

export default store;
