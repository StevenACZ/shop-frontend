// React
import React from 'react';

// Styles
import { ReviewListItemStyled, Header, Comment } from './Styles';

// Antd Components
import { Rate } from 'antd';

interface Props {}

const ReviewListItem: React.FC<Props> = () => {
  return (
    <ReviewListItemStyled>
      <Header>
        <h4>Jane Doe</h4>
        <Rate allowHalf defaultValue={2.5} />
        <p>2020-09-27</p>
      </Header>
      <Comment>
        <p>These are great headphone!</p>
      </Comment>
    </ReviewListItemStyled>
  );
};

export default ReviewListItem;
