import styled from 'styled-components';

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a {
    color: inherit;
  }
`

export const HeaderCenter = styled.div`
  display: flex;
`

export const HeaderRight = styled.div`
  display: flex;
`

export const Item = styled.div`
  padding: .5rem;
  cursor: pointer;
  border-right: 1px solid lightgray;
  display: flex;
  gap: 1rem;

  &:last-child {
    border-right: none;
  }

  p {
    margin: 0;
    padding: 0;
  }
`