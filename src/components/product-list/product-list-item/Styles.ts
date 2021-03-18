import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const ProductListItemStyled = styled.div`
  border: 1px solid ${color.colorBlack};
  padding: 20px;
`;

export const ProductImage = styled.figure`
  margin-bottom: 20px;

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
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 10px;
    display: inline-block;
  }

  & > div {
    & > span {
      margin-left: 10px;
      font-size: 16px;
    }
  }

  & > h3 {
    display: inline-block;
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 0;
  }
`;
