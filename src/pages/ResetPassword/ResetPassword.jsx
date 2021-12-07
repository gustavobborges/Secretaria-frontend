import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

const initialValue = {
  password: "",
  passwordConfirmation: ""
}

const PagesResetPassword = () => {
  const [values, setValues] = useState(initialValue);
  const dispatch = useDispatch();
  const history = useHistory();

  const url = window.location.href;
  const urlArray = url.split('/reset/');
  const userId = urlArray[1];

  const HandleSubmitSingup = async () => {

    if (values.password !== "") {
      if (values.password === values.passwordConfirmation) {
        const payload = {
          password: values.password,
        };
        try {
          const { data } = await axios.put(`http://localhost:8000/user/${userId}`, payload);  
          alert('Senha alterada com sucesso!');
          history.push('/');
        } catch (error) {
          alert('Ocorreu um erro ao alterar a senha. ', error);
        }
      } else {
        alert('As senhas não conferem.');
      }
    } else {
      alert('A senha precisa ter pelo menos um caracter.');
    }
  }


  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <S.LoginPage>

      <S.Title>
        <p>RECUPERAÇÃO DE SENHA</p>
      </S.Title>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nova senha</Form.Label>
          <Form.Control type="password" name="password" maxLength="55" placeholder="Senha" value={values.password} onChange={onChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirme sua nova senha</Form.Label>
          <Form.Control type="password" name="passwordConfirmation" maxLength="55" placeholder="Confirme sua senha" value={values.passwordConfirmation} onChange={onChange}/>
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

export default PagesResetPassword;