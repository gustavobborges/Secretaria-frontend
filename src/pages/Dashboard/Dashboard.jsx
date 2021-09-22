import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/store';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import getAppointments from '../../services/appointments';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const PagesDashboard = () => {
  const dispatch = useDispatch();

  const _appointments = useSelector((state) => state.appointments);

  const [appointments, setAppointments] = useState(_appointments);

  useEffect(() => {
    async function _getAppointments() {
      const data = await getAppointments();
      await setAppointments(data);
    }
    _getAppointments();
  }, []);

  useEffect(() => {
    console.log(`appointments `+ appointments)
    dispatch({ type: 'SET_APPOINTMENTS', payload: appointments });
  }, [appointments]);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default PagesDashboard;