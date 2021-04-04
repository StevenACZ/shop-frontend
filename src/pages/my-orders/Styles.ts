import styled from 'styled-components';

export const MyOrdersScreenStyled = styled.section`
  padding: 20px 0;

  h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  max-width: 40%;
  margin: 0 auto;

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
