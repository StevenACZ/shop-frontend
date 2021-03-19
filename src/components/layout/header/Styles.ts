import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.colorBlack};
  height: 72px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 1000px;

  @media (max-width: 1000px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
  }
`;

export const Logo = styled.div`
  & > a > h2 {
    color: ${color.colorWhite};
  }
`;

export const Search = styled.div`
  & > label > input {
    max-width: 300px;
    width: 300px;
    padding: 11px 0 11px 20px;
    outline: none;
    border-radius: 4px;
    margin-right: 10px;
    border: none;
  }

  & > button {
    background-color: ${color.colorWhite};
    color: ${color.colorBlack};
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Navbar = styled.nav``;
export const Links = styled.div``;

export const Profile = styled.div`
  & > button:first-child {
    margin-right: 10px;
  }

  & > button {
    background-color: ${color.colorWhite};
    color: ${color.colorBlack};
  }

  @media (max-width: 720px) {
    & > button {
      height: 35px;
      width: 80px;
    }
  }
`;
