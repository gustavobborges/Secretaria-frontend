import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const userName = useSelector((state) => state.user.name);
  const selectedMenu = useSelector((state) => state.selectedMenu);
  const dispatch = useDispatch();

  const HandleLogout = () => {
    localStorage.clear();
    const payload = {
      session: '',
      name: '',
      id: '',
      email: ''
    }
    dispatch({ type: 'LOGIN', payload: payload });
  }

  const HandleChangePage = (page) => {
    console.log(page)
    dispatch({ type: 'SET_SELECTED_MENU', payload: page });
  }

  return (
    <S.HeaderDiv>
      <S.HeaderCenter>
        <Link to={'/'}>
          <S.Item  onClick={() => HandleChangePage('appointments')}>
            <div className={selectedMenu === 'appointments' ? 'isSelected' : ''}>
              <p>Meus compromissos</p>
            </div>
          </S.Item>
        </Link>
        <Link to={'/patients'}>
          <S.Item onClick={() => HandleChangePage('patients')}>
            <div className={selectedMenu === 'patients' ? 'isSelected' : ''}>
              <p>Pacientes</p>
            </div>
          </S.Item>
        </Link>

      </S.HeaderCenter>

      <S.HeaderRight>
        <S.Item>
          <p>Bem vindo, {userName}</p>
          <p onClick={HandleLogout}><b>Sair</b></p>
        </S.Item>
      </S.HeaderRight>
    </S.HeaderDiv>
  )
}