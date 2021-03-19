import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const Container = styled.main`
  max-width: 1000px;
  margin: 30px auto;
  background-color: ${color.colorWhite};

  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;
