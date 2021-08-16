import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const counter = useSelector((state) => state.valueState);
  
  return (
    <S.HeaderDiv>
      <Link to={'/'}>
        <S.Item>
          <p>Agenda</p>
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
    </S.HeaderDiv>
  )
}