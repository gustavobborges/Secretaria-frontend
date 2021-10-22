import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Button } from 'react-bootstrap';
import moment from 'moment'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import _getAppointments from '../../services/appointments';
import store from '../../store/store';
import * as S from './styles';

import FormAppointment from './Form/FormAppointment';

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const PagesDashboard = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);
  const showForm = useSelector((state) => state.showForm);
  const selectedAppointmnt = useSelector((state) => state.selectedAppointmnt);

  // const [appointments, setAppointments] = useState(_appointments);
  // const [selectedAppointmnt, setSelectedAppoint] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);

  async function getAppointments() {
    const data = await (_getAppointments());
    dispatch({ type: 'SET_APPOINTMENTS', payload: data });
  };

  useEffect(() => {
    const array = [];
    Object.values(appointments).map((appointment) => {
      console.log(appointment)
      array.push({
        title: appointment.name,
        start: appointment.initialDate,
        end: appointment.finalDate,
        allDay: false,
        resource: appointment.id
      });
    })
    setEvents(array);
  }, [appointments]);

  const handleSelectAppointment = (event) => {
    const selectedAppointment = appointments.filter((appointment) => appointment.id === event.resource);
    dispatch({ type: 'SET_SELECTED_APPOINTMENT', payload: selectedAppointment[0] });
    dispatch({ type: 'SET_SHOW_FORM', payload: true });
  }

  const handleCreateAppointment = () => {
    dispatch({ type: 'SET_SELECTED_APPOINTMENT', payload: {} });
    dispatch({ type: 'SET_SHOW_FORM', payload: true });
  }

  return (
    <S.Dashboard>
      {showForm && (
        <S.DashboardTop className="col-lg-8 col-sm-12">
          <FormAppointment />
        </S.DashboardTop>
      )}

      <S.DashboardDown className="col-lg-8 col-sm-12" >
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
        />
      </S.DashboardDown>

      <Button className="mt-3" onClick={() => handleCreateAppointment()} style={{ backgroundColor: 'white', border: 0, color: 'black' }}>Novo compromisso</Button>
    </S.Dashboard>
  );
}

export default PagesDashboard;