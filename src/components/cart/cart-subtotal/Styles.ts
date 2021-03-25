import styled from 'styled-components';

export const CartSubtotalStyled = styled.div`
  border: 1px solid black;
`;
export const Summary = styled.div`
  border-bottom: 1px solid black;
  padding: 10px 20px;

  & > h3 {
    font-size: 25px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

export const Checkout = styled.div`
  padding: 10px 20px;

  & > button {
    text-transform: uppercase;
  }
`;
