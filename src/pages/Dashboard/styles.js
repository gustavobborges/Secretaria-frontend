import styled from 'styled-components';

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 2rem;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px) {
    padding: 1.5em 0;

    .rbc-toolbar {
      display: flex;
      gap: .1rem;
      margin-bottom: .5rem;
    }

    .rbc-btn-group {
      width: 100%;
      text-align: center;
    }   
  };
`
