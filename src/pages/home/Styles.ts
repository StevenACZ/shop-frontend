import styled from 'styled-components';

export const HomeScreenStyled = styled.section``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & > h2 {
    text-transform: uppercase;
  }

  & > button {
    width: auto;
    padding: 0 20px;
  }
`;
