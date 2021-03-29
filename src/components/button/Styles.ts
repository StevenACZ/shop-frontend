import styled from 'styled-components';
import { color } from '../../theme/variables';

interface Props {
  height?: string;
  width?: string;
  loading?: boolean;
}

export const ButtonStyled = styled.button<Props>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  cursor: ${(p) => (p.loading ? 'not-allowed' : 'pointer')};
  background-color: ${color.colorBlack};
  color: ${color.colorWhite};
  border: none;
  outline: none;

  & > div {
    height: 100%;

    & > .ant-spin-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  &:disabled {
    background-color: black;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;