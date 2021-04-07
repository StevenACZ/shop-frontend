import styled from 'styled-components';
import { color } from '../../../../theme/variables';

export const ProductListItemStyled = styled.li`
  border: 1px solid ${color.colorBlack};
  padding: 10px;
`;

export const ProductImage = styled.figure`
  margin-bottom: 20px;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    display: inline-block;
    cursor: pointer;
  }

  & > div {
    & > ul {
      font-size: 12px;
    }
    & > span {
      margin-left: 10px;
      font-size: 12px;
    }
  }

  & > h3 {
    display: inline-block;
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
  }
`;
