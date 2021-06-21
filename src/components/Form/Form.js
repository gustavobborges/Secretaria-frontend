import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container, Form, Card, Button } from "react-bootstrap";
import './Form.css';

const initialValue = {
	name: "",
	description: "",
	place: "",
	date: "",
	time: ""
}

function AppointmentForm({ id }) {
	const [values, setValues] = useState(id ? null : initialValue);
	const history = useHistory();

	useEffect(() => {
		if (id) {
			axios.get(`https://the-secretary.herokuapp.com/api/appointments/${id}`)
				.then((response) => {
					console.log(response.data);
					setValues(response.data);
				})
		}
	}, [id]);

	function onChange(event) {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	}

	function onSubmit(event) {
		event.preventDefault();
		console.log(values);
		const method = id ? 'put' : 'post';
		const url = id
			? `https://the-secretary.herokuapp.com/api/appointments/${id}`
			: `https://the-secretary.herokuapp.com/api/appointments`
			;
		axios[method](url, values)
			.then((response) => {
				history.push('/');
			});
	}

	return (
		<div>
			{!values ? (<div>Carregando...</div>) : (
				<Container>
					<Form onSubmit={onSubmit}>
						<Card>
							{/* {!values.id 
								? (<Card.Header><h5>Novo Compromisso</h5></Card.Header>)
								: (<Card.Header><h5>values.name</h5></Card.Header>)
							} */}
							<Card.Header><h5>Compromisso</h5></Card.Header>
							<Card.Body>
								<Form.Group>
									<Form.Label htmlFor="name">Nome</Form.Label>
									<Form.Control type="text" name="name" id="name" value={values.name} onChange={onChange} />
								</Form.Group>
								<Form.Group>
									<Form.Label htmlFor="description">Descrição</Form.Label>
									<Form.Control as="textarea" name="description" id="description" value={values.description} onChange={onChange} />
								</Form.Group>
								<Form.Group>
									<Form.Label htmlFor="place">Local</Form.Label>
									<Form.Control type="text" name="place" id="place" value={values.place} onChange={onChange} />
								</Form.Group>
								<Form.Group>
									<Form.Label htmlFor="date">Data</Form.Label>
									<Form.Control type="text" name="date" id="date" value={values.date} onChange={onChange} />
								</Form.Group>
								<Form.Group>
									<Form.Label htmlFor="time">Hora</Form.Label>
									<Form.Control type="text" name="time" id="time" value={values.time} onChange={onChange} />
								</Form.Group>

								<div className="buttonsForm">
									<Link to={"/"} className="buttonForm" class="btn btn-secondary">Voltar</Link>
									<Button variant="success" className="buttonForm" type="submit">Salvar</Button>
								</div>
							</Card.Body>
						</Card>
					</Form>
				</Container>
			)}
		</div>
	);
}

export default AppointmentForm;