import React from 'react';
import DataTable from 'react-data-table-component';
import App from '../App';




export default function Table({ appointments }) {
    const columns = [
        {
            name: "Data",
            selector: "date",
            sortable: true,
        },
        {
            name: "Hora",
            selector: "time",
            sortable: true,
        },
        {
            name: "Nome",
            selector: "name",
            sortable: true,
        },
        {
            name: "Descrição",
            selector: "description",
            sortable: true,
        },
        {
            name: "Local",
            selector: "place",
            sortable: true,
        }
    ]

  return (
    <DataTable
        title="Compromissos"
        columns={columns}
        data={appointments}
        defaultSortField="date"
        pagination
    >
    </DataTable>
  )
}