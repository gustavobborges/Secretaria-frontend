import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CloseButton, Form } from 'react-bootstrap';
import { getPatients, createOrUpdatePatient, deletePatient } from '../../../services/patients';
import InputMask from "react-input-mask";
import * as S from './styles';

const initialValue = {
  name: "",
  address: "",
  phone: "",
  record: "",
  email: "",
}

const FormPatient = () => {
  const dispatch = useDispatch();
  const selectedPatient = useSelector((state) => state.selectedPatient);
  const patients = useSelector((state) => state.patients);
  const userId = useSelector((state) => state.user.id);
  const id = selectedPatient?.id;

  const [values, setValues] = useState(id ? selectedPatient : initialValue);

  useEffect(() => {
    if (patients.length === 0) {
      _getPatients()
    }
  }, [patients]);

  const _getPatients = async () => {
    const data = await getPatients(userId);
    dispatch({ type: 'SET_PATIENTS', payload: data });
  };

  const HandleSavePatient = async (event) => {
    const formattedPhone = values.phone.replace(/\D/g,'');;
    const payload = {
      ...values,
      phone: formattedPhone,
      user: userId,
    }
    const method = id ? 'put' : 'post';
    const { data } = await createOrUpdatePatient(method, payload, id)
      .then((response) => {
        dispatch({ type: 'SET_SELECTED_PATIENT', payload: {} });
        dispatch({ type: 'SET_SHOW_FORM', payload: false });
        return response
      });

    if (method === 'put') {
      const newPatients = await getPatients(userId);
      await dispatch({ type: 'SET_PATIENTS', payload: newPatients});
    } else if (method === 'post') {
      const newPatients = patients.concat(data);
      dispatch({ type: 'SET_PATIENTS', payload: newPatients });
    }
    dispatch({ type: 'SET_SELECTED_MENU', payload: 'patients' });

  }

  const HandleDeletePatient = async (id) => {
    await deletePatient(id).then((response) => {
      dispatch({ type: 'SET_SELECTED_PATIENT', payload: {} });
      dispatch({ type: 'SET_SHOW_FORM', payload: false });
    });
    const newPatients = await getPatients(userId);
    dispatch({ type: 'SET_PATIENTS', payload: newPatients });
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    if (name === 'name' || name === 'address') {
      newValue = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setValues({ ...values, [name]: newValue });
  }

  return (
    <S.CardPatient>
      <S.FormHeader>
        <div>
          <h2>Paciente</h2>
        </div>
        <div>
          <CloseButton onClick={() => dispatch({ type: 'SET_SHOW_FORM', payload: false })} />
        </div>
      </S.FormHeader>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control maxLength="55" type="text" name="name" max="90" id="name" value={values.name} onChange={onChange} placeholder="Nome" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Endereço</Form.Label>
          <Form.Control maxLength="55" type="text" name="address" id="address" value={values.address} onChange={onChange} placeholder="Endereço" required />
        </Form.Group>

        <Form.Group className="form-mask mb-3">
          <Form.Label>Telefone</Form.Label>
          <InputMask  mask="(99) 9 9999-9999" value={values.phone} onChange={onChange}>
            <Form.Control type="phone" name="phone" id="phone" value={values.phone} onChange={onChange} placeholder="Telefone" required />
          </InputMask>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control maxLength="55" type="email" name="email" id="email" value={values.email} onChange={onChange} placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amnese</Form.Label>
          <Form.Control maxLength="720" as="textArea" name="record" id="record" rows={3} value={values.record} onChange={onChange} placeholder="Amnese/descrição" required >
          {values.record} 
          </Form.Control>
        </Form.Group>

        <Form.Group>
          {id && (
            <Button variant="danger" style={{ marginRight: '1rem' }} onClick={() => HandleDeletePatient(id)}>
              Excluir
            </Button>
          )}
          <Button variant="primary" className="justify-content-end" onClick={() => HandleSavePatient()}>
            Salvar
          </Button>
        </Form.Group>

      </Form>
    </S.CardPatient>
  );
}

export default FormPatient;