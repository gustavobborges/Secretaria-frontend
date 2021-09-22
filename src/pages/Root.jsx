import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { AuthContextProvider} from '../contexts/AuthContext';

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import PagesAppointment from './Appointments/Appointments';
import PagesAppointmentForm from './Form/Form';
import PagesPatients from './Patients/Patients';
import PagesDashboard from './Dashboard/Dashboard';
import PagesLogin from './Login/Login';

function Root() {

  const currentUser = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      {currentUser && currentUser.session.length === 0
        ? <PagesLogin />
        : (<>
            <Header />
            <Switch>
              <Route path="/" component={PagesDashboard} exact></Route>
              <Route path="/create" component={PagesAppointmentForm}></Route>
              <Route path="/edit/:id" component={PagesAppointmentForm}></Route>
              <Route path="/patients" component={PagesPatients}></Route>
              <Route path="/table" component={PagesAppointment}></Route>
              <Route path="/login" component={PagesLogin}></Route>
            </Switch>
          </>)
      }

      {/* <>
        <Header />
        <Switch>
          <Route path="/" component={PagesDashboard} exact></Route>
          <Route path="/create" component={PagesAppointmentForm}></Route>
          <Route path="/edit/:id" component={PagesAppointmentForm}></Route>
          <Route path="/patients" component={PagesPatients}></Route>
          <Route path="/table" component={PagesAppointment}></Route>
          <Route path="/login" component={PagesLogin}></Route>
        </Switch>
      </> */}
      

      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default Root;

{/* <Header />
<Switch>
  <Route path="/" component={PagesDashboard} exact></Route>
  <Route path="/create" component={PagesAppointmentForm}></Route>
  <Route path="/edit/:id" component={PagesAppointmentForm}></Route>
  <Route path="/patients" component={PagesPatients}></Route>
  <Route path="/table" component={PagesAppointment}></Route>
  <Route path="/login" component={PagesLogin}></Route>
</Switch> */}