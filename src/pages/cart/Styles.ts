import styled from 'styled-components';

export const CartScreenStyled = styled.section`
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-column-gap: 40px;
`;

export const Left = styled.div`
  & > h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

export const Right = styled.div``;
