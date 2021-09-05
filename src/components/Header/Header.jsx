import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const counter = useSelector((state) => state.valueState);
  const userName = useSelector((state) => state.user.name);
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

  return (
    <S.HeaderDiv>
      <S.HeaderCenter>
        <Link to={'/'}>
          <S.Item>
            <p>Agenda</p>
          </S.Item>
        </Link>
        <Link to={'/table'}>
          <S.Item>
            <p>Tabela</p>
          </S.Item>
        </Link>
        <Link to={'/patients'}>
          <S.Item>
            <p>Pacientes</p>
          </S.Item>
        </Link>
        <S.Item>
          <p>Configurações</p>
        </S.Item>
        <S.Item>
          <p>Redux Test: {counter}</p>
        </S.Item>
      </S.HeaderCenter>

      <S.HeaderRight>
        <Link to={'/login'}>
          <S.Item>
            <p>Bem vindo, {userName}</p>
            <p onClick={HandleLogout}><b>Sair</b></p>
          </S.Item>
        </Link>
      </S.HeaderRight>
    </S.HeaderDiv>
  )
}