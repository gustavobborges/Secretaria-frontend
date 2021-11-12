import React, { useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const userName = useSelector((state) => state.user.name);
  const selectedMenu = useSelector((state) => state.selectedMenu);
  const screenSize = useSelector((state) => state.screenSize);
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
    dispatch({ type: 'SET_SELECTED_MENU', payload: page });
    dispatch({ type: 'SET_SHOW_FORM', payload: false });
    dispatch({ type: 'SET_SELECTED_PATIENT', payload: {} });
    dispatch({ type: 'SET_SELECTED_APPOINTMENT', payload: {} });
  }

  useEffect(() => {
    console.log(selectedMenu);
  })

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  useEffect(() => {
    if (!screenSize !== {}) {
      const data = getWindowDimensions();
      dispatch({ type: 'SET_SCREEN_SIZE', payload: data });
    }
  }, [])

  return (
    <S.HeaderDiv>
      <S.HeaderCenter>
        <Link to={'/'}>
          <S.Item onClick={() => HandleChangePage('appointments')}>
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
          {screenSize.width > 700 && (
            <p>olá, {userName}</p>
          )}
          <p onClick={HandleLogout}><b>Sair</b></p>
        </S.Item>
        

      </S.HeaderRight>
    </S.HeaderDiv>
  )
}