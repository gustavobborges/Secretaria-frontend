import { createStore } from 'redux';


const initialState = {
  user: {
    session: '',
    name: '',
    id: '',
    email: '',
  },
  appointments: [],
  appointmentsType: [],
  patients: [],
  showForm: false,
  selectedAppointment: {},
  selectedPatient: {},
  selectedMenu: 'appointments',
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

    case 'SET_APPOINTMENTS_TYPE':
      return {
        ...state,
        appointmentsType: action.payload
      }

    case 'SET_APPOINTMENTS':
      return {
        ...state,
        appointments: action.payload
      }

    case 'SET_PATIENTS':
      return {
        ...state,
        patients: action.payload
      }

    case 'SET_SHOW_FORM':
      return {
        ...state,
        showForm: action.payload
      }

    case 'SET_SELECTED_APPOINTMENT':
      return {
        ...state,
        selectedAppointment: action.payload
      }

    case 'SET_SELECTED_PATIENT':
      return {
        ...state,
        selectedPatient: action.payload
      }
      
    case 'SET_SELECTED_MENU':
      return {
        ...state,
        selectedMenu: action.payload
      }

    default:
      return state;
  }
};

let store = createStore(reducer);

export default store;
