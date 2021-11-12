import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { getPatients } from '../../services/patients';

export default function Table() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    _getPatients();
    if (patients !== [])
      _getPatients();
  }, []);

  async function _getPatients() {
    const data = await getPatients(userId);
    dispatch({ type: 'SET_PATIENTS', payload: data });
  };

  const handleSelectPatient = (patient) => {
    dispatch({ type: 'SET_SELECTED_PATIENT', payload: patient });
    dispatch({ type: 'SET_SHOW_FORM', payload: true });
  }

  const columns = [
    {
      name: "Nome",
      selector: "name",
      sortable: true,
    },
    {
      name: "Última Consulta",
      selector: "",
      sortable: true,
    },
    {
      name: "Próxima Consulta",
      selector: "",
      sortable: true,
    },
    {
      name: "Ações",
      cell: row => (
        <div className="col_action" key={row['id']}>
          <Button onClick={() => handleSelectPatient(row)} ><BsSearch /></Button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ]

  return (
    <>
      <DataTable
        // title="Pacientes"
        columns={columns}
        data={patients}
        defaultSortField="date"
        pagination
      >
      </DataTable>
    </>
  )
}