import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CloseButton, Form } from 'react-bootstrap';
import { getPatients, createOrUpdatePatient, deletePatient } from '../../../services/patients';
import * as S from './styles';

const initialValue = {
  name: "",
  phone: "",
  record: "",
}

const FormPatient = () => {
  const dispatch = useDispatch();
  const selectedPatient = useSelector((state) => state.selectedPatient);
  const patients = useSelector((state) => state.patients);
  const userId = useSelector((state) => state.user.id);
  const id = selectedPatient.id;

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
    // const patientSubmit = values.patientType === personalType.id ? null : values.patient;
    const payload = {
      ...values
    }
    const method = id ? 'put' : 'post';
    await createOrUpdatePatient(method, payload, id)
      .then((response) => {
        dispatch({ type: 'SET_SELECTED_APPOINTMENT', payload: {} });
        dispatch({ type: 'SET_SHOW_FORM', payload: false });
        return response
      });
    const newPatients = await getPatients(userId);
    dispatch({ type: 'SET_APPOINTMENTS', payload: newPatients });
  }

  const HandleDeletePatient = async (id) => {
    await deletePatient(id).then((response) => {
      dispatch({ type: 'SET_SELECTED_APPOINTMENT', payload: {} });
      dispatch({ type: 'SET_SHOW_FORM', payload: false });
    });
    const newPatients = await getPatients(userId);
    dispatch({ type: 'SET_APPOINTMENTS', payload: newPatients });
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
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
          <Form.Control type="text" name="name" id="name" value={values.name} onChange={onChange} placeholder="Nome" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text" name="place" id="place" placeholder="Endereço" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" name="place" id="place" value={values.phone} onChange={onChange} placeholder="Telefone" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amnese</Form.Label>
          <Form.Control type="textarea" name="record" id="record" rows={3} value={values.record} placeholder="Amnese/descrição" onChange={onChange} required />
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