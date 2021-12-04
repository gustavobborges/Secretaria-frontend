import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import PatientsTable from '../../components/Table/Table';
import FormPatient from './Form/FormPatient';
import * as S from './styles';


export default function PagesPatients() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const userId = useSelector((state) => state.user.id);
  const showForm = useSelector((state) => state.showForm);

  const handleCreatePatient = () => {
    dispatch({ type: 'SET_SELECTED_PATIENT', payload: {} });
    dispatch({ type: 'SET_SHOW_FORM', payload: true });
  }

  return (
    <S.Patients>
      {showForm && (
        <div className="col-12 col-lg-8 mb-4">
          <FormPatient />
        </div>
      )}

      <S.PatientTableContent className="col-lg-8 col-sm-12">
        <PatientsTable />
      </S.PatientTableContent>

      <Button className="mt-3" onClick={() => handleCreatePatient()} style={{ backgroundColor: 'white', border: 0, color: 'black' }}>Novo paciente</Button>

    </S.Patients>
  )
}

