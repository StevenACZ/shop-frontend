import styled from 'styled-components';

export const CartScreenStyled = styled.section`
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-column-gap: 40px;

  @media (max-width: 1000px) {
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 30px;
  }
`;

export const Left = styled.div`
  & > h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

export const Right = styled.div``;
