import styled from 'styled-components';

export const ProductListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
`;
