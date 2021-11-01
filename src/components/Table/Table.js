import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BsSearch, BsFillTrashFill } from 'react-icons/bs';
import getPatients from '../../services/patients';

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
      cell: (row) => [
        <div className="col_action" key={row.id}>
          <Button onClick={() => alert('ver')} ><BsSearch /></Button>
        </div>
      ],
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