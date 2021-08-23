import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import PagesAppointment from './Appointments/Appointments';
import PagesAppointmentForm from './Form/Form';
import PagesPatients from './Patients/Patients';
import PagesDashboard from './Dashboard/Dashboard';
import PagesLogin from './Login/Login';

function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={PagesDashboard} exact></Route>
        <Route path="/create" component={PagesAppointmentForm}></Route>
        <Route path="/edit/:id" component={PagesAppointmentForm}></Route>
        <Route path="/patients" component={PagesPatients}></Route>
        <Route path="/table" component={PagesAppointment}></Route>
        <Route path="/login" component={PagesLogin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Root;