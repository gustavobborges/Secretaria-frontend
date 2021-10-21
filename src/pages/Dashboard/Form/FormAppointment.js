import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, Button, CloseButton } from 'react-bootstrap';
import store from '../../../store/store';

import * as S from './styles';

const FormAppointment = () => {
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.showForm);
  const selectedAppointment = useSelector((state) => state.selectedAppointment[0]);
  console.log(selectedAppointment);
  return (
    <S.CardAppointment>
      <S.FormHeader>
        <div>
          <h2>Compromisso</h2>
        </div>
        <div>
          <CloseButton onClick={() => dispatch({ type: 'SET_SHOW_FORM', payload: false })} />
        </div>
      </S.FormHeader>
      <Form>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Título</Form.Label>
          {selectedAppointment === {} 
            ? (<Form.Control placeholder="Título do compromisso" />)
            : ( <Form.Control placeholder={selectedAppointment.title} />)
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Local</Form.Label>
          {selectedAppointment === {} 
            ? (<Form.Control placeholder="Local do compromisso" />)
            : ( <Form.Control placeholder={selectedAppointment.place} />)
          }
          
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Data</Form.Label>
            {selectedAppointment === {} 
              ? (<Form.Control type="date" placeholder="Título do compromisso" />)
              : ( <Form.Control type="date" value={"2020-01-01"} />)
            }
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Início</Form.Label>
            {selectedAppointment === {} 
              ? (<Form.Control type="time" placeholder="Título do compromisso" />)
              : ( <Form.Control type="time" value={"16:30"} />)
            }
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Fim</Form.Label>
            {selectedAppointment === {} 
              ? (<Form.Control type="time" placeholder="Título do compromisso" />)
              : ( <Form.Control type="time" value={"17:30"} />)
            }
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" as={Col} controlId="formGridState">
          <Form.Label>Paciente</Form.Label>
          <Form.Select>
            <option>Paciente 1</option>
            <option>Paciente 2</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        
        <Button variant="primary" className="justify-content-end" type="submit">
          Salvar
        </Button>

        
      </Form>
    </S.CardAppointment>
  );
}

export default FormAppointment;