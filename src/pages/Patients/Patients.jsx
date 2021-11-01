import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BsSearch, BsFillTrashFill } from 'react-icons/bs';
import getPatients from '../../services/patients';
import PatientsTable from '../../components/Table/Table';
import * as S from './styles';


export default function PagesPatients() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const userId = useSelector((state) => state.user.id);

  return (
    <>
      <S.Patients className="col-lg-8 col-sm-1">

        {/* {showForm && (
          <S.DashboardTop className="col-lg-8 col-sm-12">
            <FormAppointment />
          </S.DashboardTop>
        )} */}
        <PatientsTable />
      </S.Patients>
    </>
  )
}