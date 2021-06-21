
import React, { useEffect, useState } from 'react';

import appointmentsApi from '../../services/appointments';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './Appointments.css';

import Table from '../../components/Table/Table';


function PagesAppointment() {

	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		appointmentsApi.get().then(response => {
			setAppointments(response.data)
		})
	}, [])

	return (
		<div className="">
			<Card>
				<Table appointments={appointments} />
				<div className="buttons">
					<Link to="/create" class="btn btn-success">Novo compromisso</Link>
				</div>
			</Card>
		</div>

	);
}

export default PagesAppointment;



