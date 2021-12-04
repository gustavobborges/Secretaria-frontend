import styled from 'styled-components';

export const Patients = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 2rem;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px) {
    padding: 1.5em 0;
  };
`

export const PatientTableContent = styled.div`
  border-radius: 5px 5px 0 0;

  @media(max-width: 800px) {
    width: 100%;
  };

  div nav {
    border-radius: 0 0 5px 5px;
  }
`

export const NewPatientButton = styled.div`
  button {
    background-color: white;
    border: 0;
    color: black;
  }
`