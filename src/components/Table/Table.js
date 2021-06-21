import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

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
        },
        {
            name: "Ações",
            cell:(row)=><Link to={`/edit/${row._id}`} class="btn btn-info">Detalhes</Link>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ]

  return (
    <DataTable
        title="Agenda"
        columns={columns}
        data={appointments}
        defaultSortField="date"
        pagination
    >
    </DataTable>
  )
}