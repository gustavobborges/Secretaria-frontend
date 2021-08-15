import React from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

export default function Header() {
  let history = useHistory();

  function HandleClick(){
    history.push('/');
  }
  
  return (
    <HeaderDiv>
      <Link to={'/'}>
        <Item>
          <p>Agenda</p>
        </Item>
      </Link>
      <Item type="button" onClick={HandleClick}>
        <p>Pacientes</p>
      </Item>
      <Item>
        <p>Configurações</p>
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