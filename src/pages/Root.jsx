import React from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import PagesAppointment from './Appointments/Appointments';
import PagesAppointmentForm from './Form/Form';
import PagesPatients from './Patients/Patients';

function Root() {
  const history = useHistory();
  return (
    <ContentComponent>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={PagesAppointment} exact></Route>
          <Route path="/create" component={PagesAppointmentForm}></Route>
          <Route path="/edit/:id" component={PagesAppointmentForm}></Route>
          <Route path="/patients" component={PagesPatients}></Route>
        </Switch>
      </BrowserRouter>
    </ContentComponent>
  );
}

const ContentComponent = styled.div`
    width: 90%;
    margin: 0 auto;
	padding: 0;
	border: 0;
	text-decoration: none !important;
`

export default Root;