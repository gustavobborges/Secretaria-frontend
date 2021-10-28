import styled from 'styled-components';

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: black;

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
  cursor: pointer;
  display: flex;
  gap: 1rem;
  font-size: 14px;

  

  .isSelected { 
    width: 100%;
    background-color: skyblue !important;

    p {
    font-weight: 500;
    }
  }

  &:last-child {
    border-right: none;
  }

  p {
    font-weight: 400;
    margin: 0;
    padding: .5rem;
  }
`