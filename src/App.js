import React, { useEffect, useState } from 'react';
import appointmentsApi from './services/appointments';

import 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './global.css';

import Header from './components/Header';
import Table from './components/Table';

function App() {
	
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		appointmentsApi.get().then(response => {
			setAppointments(response.data)
		})
	}, [])

	return (
		<>
			<Header title="Secretária" />
			<Table appointments={appointments}/>
		</>
	);
}

export default App;