import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  background-color: skyblue;

  @media(max-width: 800px) {
    justify-content: flex-start;
  };

  form {
    width: 20rem;
  }

  .login-actions {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 3rem;
    cursor: pointer;

    p:hover {
      color: white;
    }
  }
`

export const Title = styled.div`
  font-size: 36px;
  margin-bottom: 3rem;
  text-shadow: white 1px 1px;

  @media(max-width: 800px) {
    margin-top: 2rem;
  };
`