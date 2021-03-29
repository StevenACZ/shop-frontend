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
  height: 40px;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  & > label {
    height: 100%;
    display: inline-block;

    & > input {
      height: 100%;
      max-width: 200px;
      width: 300px;
      padding: 0px 0 0px 15px;
      outline: none;
      border-radius: 4px;
      margin-right: 10px;
      border: none;
    }
  }

  & > button {
    background-color: ${color.colorWhite};
    color: ${color.colorBlack};
    width: auto;
    padding: 0 20px;
    height: 100%;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DrawerStyled = styled.div`
  display: none;

  & > button {
    background: white;
    color: black;
    width: auto;
    padding: 0 20px;
  }

  @media (max-width: 720px) {
    display: block;
  }
`;

export const Navbar = styled.nav`
  height: 100%;
  display: flex;

  button {
    height: 100%;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Profile = styled.div`
  & > button:first-child {
    margin-right: 10px;
  }

  & > button {
    background-color: ${color.colorWhite};
    color: ${color.colorBlack};
  }
`;
