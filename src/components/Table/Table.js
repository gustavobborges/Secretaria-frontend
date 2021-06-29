import React,  { useState, useEffect }  from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { BsSearch, BsFillTrashFill } from 'react-icons/bs';
import './Table.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

export default function Table({ appointments }) {

    async function DeleteAppointment(id) {
        await axios.delete(`http://localhost:3004/appointments/${id}`).then((response) => {
            console.log('excluido com sucesso');
        })
        window.location.href = "http://localhost:3000";
    } 
    
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
            cell:(row)=>[
                <div className="col_action" key={row.id}>
                    <Link to={`/edit/${row.id}`} className="btn btn-primary"><BsSearch/></Link>
                    <Button onClick={() => DeleteAppointment(row.id)} className="btn btn-danger" ><BsFillTrashFill/></Button>
                </div>        
            ],
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