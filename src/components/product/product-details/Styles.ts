import styled from 'styled-components';

export const ProductDetailsStyled = styled.section``;

export const Header = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr 1fr;
  column-gap: 20px;
  border: 1px solid red;
`;

export const Image = styled.div`
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.div`
  & > div {
    padding: 10px 20px;
  }

  & > div:nth-child(1) {
    font-size: 18px;
    line-height: 40px;
    padding: 20px 20px;
  }

  & > div:nth-child(2) {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;

    & > p {
      margin-left: 10px;
    }
  }

  & > div:nth-child(3) {
    border-bottom: 1px solid black;
    font-size: 14px;
  }

  & > div:nth-child(4) {
    font-size: 14px;
  }
`;
export const AddToCart = styled.div`
  border: 1px solid green;
`;
