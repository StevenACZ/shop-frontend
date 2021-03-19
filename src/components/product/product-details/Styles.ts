import styled from 'styled-components';

export const ProductDetailsStyled = styled.section``;

export const Header = styled.div`
  margin-bottom: 15px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr 1fr;
  column-gap: 40px;

  @media (max-width: 1000px) {
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 30px;
  }
`;

export const Image = styled.div`
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  & > div {
    padding: 10px 20px;
  }

  & > div:nth-child(1) {
    font-size: 18px;
    line-height: 35px;
    padding: 0 20px 20px;
  }

  & > div:nth-child(2) {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;

    & > ul {
      font-size: 15px;
    }

    & > p {
      margin-left: 15px;
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
  & > div {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div:nth-child(1) {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  & > div:nth-child(2) {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  & > div:nth-child(3) {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  & > div:nth-child(4) {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`;
