import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { counterReducer } from '../../store/store';

function Header() {
  const counter = useSelector((state) => state.valueState);
  
  return (
    <HeaderDiv>
      <Link to={'/'}>
        <Item>
          <p>Agenda</p>
        </Item>
      </Link>
      <Link to={'/patients'}>
        <Item>
          <p>Pacientes</p>
        </Item>
      </Link>
      <Item>
        <p>Configurações</p>
      </Item>
      <Item>
        <p>Redux Test: {counter}</p>
      </Item>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Item = styled.div`
  padding: .5rem;
  cursor: pointer;
  border-left: 1px solid lightgray;

  &:last-child {
    border-right: 1px solid lightgray;
  }

  p {
    margin: 0;
    padding: 0;
  }
`

export default Header;