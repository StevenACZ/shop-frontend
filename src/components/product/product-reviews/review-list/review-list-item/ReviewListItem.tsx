// React
import React from 'react';

// Styles
import { ReviewListItemStyled, Header, Comment } from './Styles';

// Antd Components
import { Rate } from 'antd';

interface Props {
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const ReviewListItem: React.FC<Props> = ({
  name,
  rating,
  comment,
  createdAt,
}) => {
  return (
    <ReviewListItemStyled>
      <Header>
        <h4>{name}</h4>
        <Rate disabled allowHalf defaultValue={rating} />
        <p>{createdAt.substring(0, 10)}</p>
      </Header>
      <Comment>
        <p>{comment}</p>
      </Comment>
    </ReviewListItemStyled>
  );
};

export default ReviewListItem;
