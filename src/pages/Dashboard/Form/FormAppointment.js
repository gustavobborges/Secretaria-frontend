import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Form, Row, Col, Button, CloseButton } from 'react-bootstrap';
import store from '../../../store/store';

import dateFormater from '../../../utils/dateFormater';

import * as S from './styles';

const initialValue = {
  name: "",
  place: "",
  initialDate: "",
  finalDate: "",
  description: "",
  appointmentType: "",
  patient: "",
}

const FormAppointment = () => {
  const dispatch = useDispatch();
  const selectedAppointment = useSelector((state) => state.selectedAppointment);
  const appointmentsType = useSelector((state) => state.appointmentsType);
  const userId = useSelector((state) => state.user.id);
  const id = selectedAppointment.id;
  const [values, setValues] = useState(id ? {
    ...selectedAppointment,
    appointmentType: selectedAppointment.appointmentType.id,
    patient: selectedAppointment?.patient?.id,
  } : initialValue);
  const [date, setDate] = useState(id ? dateFormater(selectedAppointment.initialDate, 'date') : initialValue);
  const [initialTime, setInitialTime] = useState(id ? dateFormater(selectedAppointment.initialDate, 'time') : initialValue);
  const [finalTime, setfinalTime] = useState(id ? dateFormater(selectedAppointment.finalDate, 'time') : initialValue);

  const HandleSaveAppointment = async (event) => {
    console.log('values', values);
    const payload = {
      ...values,
      user: userId, 
      initialDate: date+' '+initialTime,
      finalDate: date+' '+finalTime
    }

    console.log(payload)
    const method = id ? 'put' : 'post';
    const url = id ? `http://localhost:8000/appointment/${id}` : `http://localhost:8000/appointment`;
    await axios[method](url, payload)
      .then((response) => {
        alert('salvo com sucesso!')
      });
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'date':
        setDate(value)
        break;

      case 'initialTime':
        setInitialTime(value)
        break;

      case 'finalTime':
        setfinalTime(value)
        break;

      default:
        setValues({ ...values, [name]: value });
        break;
    }
  }

  useEffect(() => {
    console.log('values', values);
  }, [values])

  //O BACKEND NAO TA MANDANDO O APPOINTMENTTYPES /APPOINTMENTS REQUISICOES!

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

        <Row className="mb-3">
          <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
            {appointmentsType.map((type) => (
              <Form.Check type="checkbox" label={type.name} name="appointmentType" value={type.id} key={type.id} onChange={onChange} style={{ marginRight: '1rem' }} /*checked={values.appointmentType === type.id}*/ />
            ))}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" name="name" id="name" value={values.name} onChange={onChange} placeholder="Título do compromisso" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Local</Form.Label>
          <Form.Control type="text" name="place" id="place" value={values.place} onChange={onChange} placeholder="Local do compromisso" required />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Data</Form.Label>
            <Form.Control type="date" name="date" id="date" value={date} onChange={onChange} required />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Início</Form.Label>
            <Form.Control type="time" name="initialTime" id="initialTime" value={initialTime} onChange={onChange} required />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Fim</Form.Label>
            <Form.Control type="time" name="finalTime" id="finalTime" value={finalTime} onChange={onChange} required />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" as={Col}>
          <Form.Label>Paciente</Form.Label>
          <Form.Select>
            <option>Paciente 1</option>
            <option>Paciente 2</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="textarea" name="description" id="description" rows={3} value={values.description} placeholder="Descrição do compromisso" onChange={onChange} required />
        </Form.Group>

        <Button variant="primary" className="justify-content-end" onClick={() => HandleSaveAppointment()}>
          Salvar
        </Button>


      </Form>
    </S.CardAppointment>
  );
}

export default FormAppointment;