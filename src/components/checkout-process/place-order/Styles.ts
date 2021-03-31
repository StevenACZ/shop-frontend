import styled from 'styled-components';

export const PlaceOrderStyled = styled.section`
  display: grid;
  grid-template-columns: 60% 1fr;
  column-gap: 40px;

  @media (max-width: 1000px) {
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 30px;
  }
`;

export const Details = styled.div`
  width: 100%;

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  & > div:first-child {
    padding-top: 0px;
  }

  & > div {
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid black;
  }

  & > div:last-child {
    padding-bottom: 0px;
    border-bottom: none;
  }
`;

export const OrderList = styled.ul`
  padding: 0 25px;
`;

export const OrderItem = styled.li`
  display: grid;
  grid-template-columns: 8% 1fr 30%;
  grid-auto-rows: 30px;
  grid-column-gap: 30px;
  padding: 8px 20px;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const OrderImage = styled.div`
  width: 100%;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OrderName = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > p:hover {
    text-decoration: underline;
  }
`;

export const OrderCant = styled.div`
  display: flex;
  align-items: center;
`;

export const OrderSummary = styled.div`
  & > div {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div:nth-child(1) {
    & > h2 {
      text-transform: uppercase;
    }

    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }

  & > div:nth-child(2),
  div:nth-child(3),
  div:nth-child(4),
  div:nth-child(5),
  div:nth-child(6) {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`;
