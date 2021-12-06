import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Button } from 'react-bootstrap';
import moment from 'moment';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import { getAppointments, getAppointmentsTypes } from '../../services/appointments';
import * as S from './styles';
import FormAppointment from './Form/FormAppointment';
const localizer = momentLocalizer(moment)

const PagesDashboard = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);
  const appointmentsType = useSelector((state) => state.appointmentsType);
  const userId = useSelector((state) => state.user.id);
  const showForm = useSelector((state) => state.showForm);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    _getAppointments();
    if (appointmentsType !== [])
      _getAppointmentsType();
  }, []);

  async function _getAppointments() {
    const data = await getAppointments(userId);
    dispatch({ type: 'SET_APPOINTMENTS', payload: data });
  };

  async function _getAppointmentsType() {
    const data = await getAppointmentsTypes();
    dispatch({ type: 'SET_APPOINTMENTS_TYPE', payload: data });
  }

  useEffect(() => {
    const array = [];
    Object.values(appointments).map((appointment) => {
      array.push({
        title: appointment.name,
        start: new Date(appointment.initialDate),
        end: new Date(appointment.finalDate),
        allDay: false,
        resource: {
          id: appointment.id,
          appointmentType: appointment.appointmentType.name,
          status: appointment?.confirmationStatus
        }
      });
    })
    setEvents(array);
  }, [appointments]);

  const handleSelectAppointment = (event) => {
    const selectedAppointment = appointments.filter((appointment) => appointment.id === event.resource.id);
    dispatch({ type: 'SET_SELECTED_APPOINTMENT', payload: selectedAppointment[0] });
    dispatch({ type: 'SET_SHOW_FORM', payload: true });
  }

  const handleCreateAppointment = () => {
    dispatch({ type: 'SET_SELECTED_APPOINTMENT', payload: {} });
    dispatch({ type: 'SET_SHOW_FORM', payload: true });
  }

  const eventsStyle = (event, start, end, isSelected) => {
    console.log('event', event);
    let background;
    if (event.resource.appointmentType === 'Pessoal') {
      background = '#FF7733';
    } else {
      if (event.resource.status === 'Confirmado') {
        background = '#198754';
      } else {
        background = '#3174ad';
      }
    }
    var style = {
        backgroundColor: background,
    };
    return {
        style: style
    };
  }

  return (
    <S.Dashboard>
      {showForm && (
        <div className="col-lg-8 col-sm-12 mb-4">
          <FormAppointment />
        </div>
      )}

      <div className="col-lg-8 col-sm-12" >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ 
            height: 550,
            backgroundColor: 'white',
            padding: '1rem', 
            borderRadius: '5px', 
            boxShadow: '0 0 0.4em lightgray'
          }}
          onSelectEvent={event => handleSelectAppointment(event)}
          eventPropGetter={eventsStyle}
        />
      </div>

      <Button className="mt-3" onClick={() => handleCreateAppointment()} style={{ backgroundColor: 'white', border: 0, color: 'black' }}>Novo compromisso</Button>
    </S.Dashboard>
  );
}

export default PagesDashboard;