import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import PagesAppointment from './Appointments/Appointments';
import PagesAppointmentForm from './Form/Form';
import PagesPatients from './Patients/Patients';

function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={PagesAppointment} exact></Route>
        <Route path="/create" component={PagesAppointmentForm}></Route>
        <Route path="/edit/:id" component={PagesAppointmentForm}></Route>
        <Route path="/patients" component={PagesPatients}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Root;