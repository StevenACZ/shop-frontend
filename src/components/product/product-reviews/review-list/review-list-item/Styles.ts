import styled from 'styled-components';

export const ReviewListItemStyled = styled.li`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  & > h4 {
    font-size: 20px;
    font-weight: bold;
  }

  & > p {
    padding-top: 5px;
  }
`;

export const Comment = styled.div`
  padding: 15px 0;
`;
