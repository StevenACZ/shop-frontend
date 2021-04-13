import styled from 'styled-components';

export const SearchBoxStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  & > form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    & > input {
      height: 100%;
      max-width: 200px;
      width: 300px;
      padding: 0px 0 0px 15px;
      outline: none;
      border-radius: 4px;
      margin-right: 10px;
      border: none;
    }

    & > button {
      background-color: white;
      color: black;
      width: auto;
      padding: 0 20px;
      height: 100%;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
