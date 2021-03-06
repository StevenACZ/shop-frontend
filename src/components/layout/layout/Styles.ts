import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const Container = styled.main`
  max-width: 1000px;
  padding: 30px 0;
  margin: 0 auto;
  background-color: ${color.colorWhite};

  @media (max-width: 1000px) {
    padding: 30px 20px;
  }
`;
