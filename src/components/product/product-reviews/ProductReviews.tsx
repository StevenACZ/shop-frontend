// React
import React from 'react';

// Styles
import { ProductReviewsStyled, Header } from './Styles';

// Components
import ReviewList from './review-list/ReviewList';

interface Props {}

const ProductReviews: React.FC<Props> = () => {
  return (
    <ProductReviewsStyled>
      <Header>
        <h2>Reviews</h2>
      </Header>
      <ReviewList />
      {/* <AddNewReview/> */}
    </ProductReviewsStyled>
  );
};

export default ProductReviews;
