import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import * as S from './styles';

const PagesLogin = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password])

  const HandleSubmitLogin = async () => {
    try {
      const user = await axios.post('http://localhost:8000/user/login', {
      }, {
        auth: {
          username: email,
          password: password
        }
      });  
      const payloadUser = {
        session: user.data.token,
        name: user.data.user.name,
        id: user.data.user.id,
        email: user.data.user.email
      }
      dispatch({ type: 'LOGIN', payload: payloadUser });
      history.push('/');
      
    } catch (error) {
      console.log(`deu ruim.. erro: ${error}`)
    }
  }

  return (
    <S.LoginPage>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onBlur={(e) => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            Nós não compartilharemos seu email com ninguém.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" onBlur={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar de mim" />
        </Form.Group>
        <Button variant="primary" onClick={HandleSubmitLogin}>
          Entrar
        </Button>
      </Form>
    </S.LoginPage>

  )
}

export default PagesLogin;