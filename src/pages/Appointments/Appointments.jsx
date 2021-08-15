
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import appointmentsApi from '../../services/appointments';

import Table from '../../components/Table/Table';

function PagesAppointment() {
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		appointmentsApi.get().then(response => {
			setAppointments(response.data)
		})
	}, [])

	return (
		<div>
			<Table appointments={appointments} />
			<ButtonComponent>
				<Link to="/create" className="btn btn-success">Novo compromisso</Link>
			</ButtonComponent>
		</div>
	);
}

const ButtonComponent = styled.div`
	margin: auto;
    margin-bottom: 1em;
`

export default PagesAppointment;



