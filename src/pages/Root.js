import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PagesAppointment from './Appointments/Appointments';
import PagesAppointmentForm from './Form/Form';

function Root() {
    return(
        <Router>
            <Switch>
                <Route path="/" component={PagesAppointment} exact></Route>
                <Route path="/create" component={PagesAppointmentForm}></Route>
                <Route path="/edit/:id" component={PagesAppointmentForm}></Route>
            </Switch>
        </Router>
    );
}

export default Root;