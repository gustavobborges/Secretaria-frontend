import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { Container, Form, Card, Button } from "react-bootstrap";
import * as S from './styles';

const initialValue = {
  name: "",
  description: "",
  place: "",
  date: "",
  time: ""
}

export default function AppointmentForm({ id }) {
  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3004/appointments/${id}`)
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
    const url = id ? `http://localhost:3004/appointments/${id}` : `http://localhost:3004/appointments/`;
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
              {!values.id
                ? (<Card.Header><h5>Novo Compromisso</h5></Card.Header>)
                : (<Card.Header><h5>{values.name}</h5></Card.Header>)
              }
              <Card.Body>
                <Form.Group>
                  <Form.Label htmlFor="name">Nome *</Form.Label>
                  <Form.Control type="text" name="name" id="name" value={values.name} onChange={onChange} required />
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
                  <Form.Label htmlFor="date">Data *</Form.Label>
                  <Form.Control type="date" name="date" id="date" value={values.date} onChange={onChange} required />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="time">Hora *</Form.Label>
                  <Form.Control type="time" name="time" id="time" value={values.time} onChange={onChange} required />
                </Form.Group>

                <S.ButtonsForm>
                  <S.ButtonForm>
                    <Link to={"/"} className="btn btn-secondary">Voltar</Link>
                  </S.ButtonForm>
                  <Button variant="success" className="buttonForm" type="submit">Salvar</Button>
                </S.ButtonsForm>
              </Card.Body>
            </Card>
          </Form>
        </Container>
      )}
    </div>
  );
}