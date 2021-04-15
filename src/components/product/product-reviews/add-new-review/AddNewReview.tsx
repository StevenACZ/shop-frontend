// React
import React from 'react';

// Styles
import { AddNewReviewStyled, Header, Form } from './Styles';

interface Props {}

const AddNewReview: React.FC<Props> = () => {
  return (
    <AddNewReviewStyled>
      <Header>
        <h2>Write a customer review</h2>
      </Header>

      <Form></Form>
    </AddNewReviewStyled>
  );
};

export default AddNewReview;
