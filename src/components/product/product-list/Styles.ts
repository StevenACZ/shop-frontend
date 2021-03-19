import styled from 'styled-components';

export const ProductListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;
