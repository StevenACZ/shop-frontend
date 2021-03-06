import styled from 'styled-components';

export const CartListItemStyled = styled.li`
  display: grid;
  grid-template-columns: 15% 1fr 10% 15% 15%;
  grid-column-gap: 20px;

  padding: 10px 0;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 15% 27% 18% 15% 1fr;
    grid-column-gap: 10px;
  }
`;

export const Image = styled.div`
  cursor: pointer;
  overflow: hidden;

  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > h3 {
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & > h3 {
      font-size: 11px;
      line-height: 16px;
      cursor: pointer;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const Remove = styled.div`
  padding: 15px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
