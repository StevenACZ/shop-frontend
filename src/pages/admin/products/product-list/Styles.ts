import styled from 'styled-components';

export const ProductListScreenStyled = styled.section``;

export const Header = styled.div`
  & > h2 {
    text-transform: uppercase;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & > button {
    width: auto;
    padding: 0 20px;
  }
`;
