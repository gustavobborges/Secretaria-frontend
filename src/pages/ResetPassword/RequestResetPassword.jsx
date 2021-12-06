import{ useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendEmailReset } from '../../services/mailer';

import * as S from './styles';

const initialValue = {
  email: "",
}

const PagesRequestResetPassword = () => {
  const [values, setValues] = useState(initialValue);
  const dispatch = useDispatch();
  const history = useHistory();

  const HandleSendEmail = async () => {
    try {
      const payload = {
        email: values.email,
      };

      console.log('payload', payload);
      const { data } = await axios.post('http://localhost:8000/user/getByEmail', payload);
      console.log('data', data);
      const userId = data.id;

      console.log('userId', userId);
      if (userId !== 'error') {
        const responseEmail = await sendEmailReset(values.email, userId);
        console.log('responseEmail', responseEmail);
      } else {
        alert('Não existe usuário para este email')
      }
    } catch (error) {
      alert('Não foi possível obter os dados do usuário');
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
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" value={values.email} onChange={onChange}/>
        </Form.Group>
        <Button className="login-button" variant="primary" onClick={() => HandleSendEmail()}>
          Enviar email
        </Button>
      </Form>
      <div className="login-actions" onClick={() => history.push('/')}>
          <p>Voltar</p>
      </div>
    </S.LoginPage>
  )
}

export default PagesRequestResetPassword;