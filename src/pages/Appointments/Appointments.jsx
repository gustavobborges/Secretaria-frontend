
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import appointmentsApi from '../../services/appointments';
import store from '../../store/store';
import Table from '../../components/Table/Table';

function PagesAppointment() {
	const [appointments, setAppointments] = useState([]);
  const counter = useSelector((state) => state.valueState);

	useEffect(() => {
		appointmentsApi.get().then(response => {
			setAppointments(response.data)
		})
	}, []);

  function HandleClickRedux() {
    store.dispatch({ type: 'CLICK_INCREMENT_VALUE', payload: {
      value: 1
    } });
  }

	return (
		<div>
			<Table appointments={appointments} />
			<ButtonComponent>
				<Link to="/create" className="btn btn-success">Novo compromisso</Link>
			</ButtonComponent>
      <ButtonComponent onClick={HandleClickRedux} className="btn btn-success">
        <p>Redux {counter}</p>
      </ButtonComponent>
		</div>
	);
}

const ButtonComponent = styled.div`
	margin: auto;
  margin-bottom: 1em;
`
export default PagesAppointment;



