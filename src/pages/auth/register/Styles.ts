import styled from 'styled-components';

export const RegisterScreenStyled = styled.section`
  padding: 20px 0;
`;

export const Form = styled.form`
  max-width: 40%;
  margin: 0 auto;

  & > h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }

  & > button {
    margin-top: 15px;
  }

  @media (max-width: 1000px) {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

export const GoLogin = styled.p`
  margin-top: 20px;

  & > span {
    font-weight: bold;
    cursor: pointer;
    margin-left: 7px;
  }

  & > span:hover {
    text-decoration: underline;
  }
`;
