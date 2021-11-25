import styled from 'styled-components';

export const CardAppointment = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;
`

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const WhatsAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  
  .send-row {
    display: flex;
    gap: .5rem;

    align-items: center;
  }

  .status-row {
    display: flex;
    gap: .5rem;
  }

  .response-row {
    display: flex;
    gap: .5rem;
  }

`