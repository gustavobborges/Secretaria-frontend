import styled from 'styled-components';

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: inherit;
  }
`

export const Item = styled.div`
  padding: .5rem;
  cursor: pointer;
  border-left: 1px solid lightgray;

  &:last-child {
    border-right: 1px solid lightgray;
  }

  p {
    margin: 0;
    padding: 0;
  }
`