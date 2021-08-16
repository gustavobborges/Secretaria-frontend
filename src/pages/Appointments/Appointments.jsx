
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appointmentsApi from '../../services/appointments';
import store from '../../store/store';
import Table from '../../components/Table/Table';
import * as S from './styles';

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
      <S.Buttons>
        <S.Button>
          <Link to="/create" className="btn btn-success">Novo compromisso</Link>
        </S.Button>
        <S.Button onClick={HandleClickRedux} className="btn btn-success">
          <p>Redux {counter}</p>
        </S.Button>
      </S.Buttons>

		</div>
	);
}

export default PagesAppointment;



