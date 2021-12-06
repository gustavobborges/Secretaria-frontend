import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

const initialValue = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: ""
}

const PagesSingup = () => {
  const [values, setValues] = useState(initialValue);
  const dispatch = useDispatch();
  const history = useHistory();

  const HandleSubmitSingup = async () => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password
    };

    if (values.password === values.passwordConfirmation) {
      try {
        const { data } = await axios.post('http://localhost:8000/user', values);  
        
        const payloadUser = {
          name: data.user.name,
          email: data.user.email,
          id: data.user.id,
          session: data.token
        }
        console.log('payloadUser', payloadUser);
        dispatch({ type: 'LOGIN', payload: payloadUser });
        localStorage.setItem('session', data.token);
        localStorage.setItem('name', data.user.name);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('id', data.user.id);
        history.push('/');
        
      } catch (error) {
        alert('O usuário não pode ser criado');
      }
    } else {
      alert('As senhas não conferem');
    }
  }


  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <S.LoginPage>

      <S.Title>
        <p>NOVO USUÁRIO</p>
      </S.Title>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="name" placeholder="Nome" value={values.name} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" value={values.email} onChange={onChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" name="password" placeholder="Senha" value={values.password} onChange={onChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control type="password" name="passwordConfirmation" placeholder="Confirme sua senha" value={values.passwordConfirmation} onChange={onChange}/>
        </Form.Group>
        <Button className="login-button" variant="primary" onClick={() => HandleSubmitSingup()}>
          Salvar
        </Button>
      </Form>

      <div className="login-actions" onClick={() => history.push('/')}>
          <p>Voltar</p>
      </div>
    </S.LoginPage>

  )
}

export default PagesSingup;