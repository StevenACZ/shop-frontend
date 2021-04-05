import styled from 'styled-components';

export const UserListItemStyled = styled.li`
  border: 1px solid black;
  padding: 10px;
`;

export const Header = styled.div`
  padding-bottom: 10px;

  & > h3 {
    font-weight: bold;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Body = styled.div`
  & > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > p:first-child {
    margin-bottom: 5px;
  }

  & > p > span {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  padding: 10px 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
