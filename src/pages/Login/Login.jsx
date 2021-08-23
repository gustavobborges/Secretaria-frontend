import React from 'react';
import { Form, Button } from 'react-bootstrap';

import * as S from './styles';

const PagesLogin = () => {

  return (
    <S.LoginPage>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            Nós não compartilharemos seu email com ninguém.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar de mim" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </S.LoginPage>

  )
}

export default PagesLogin;