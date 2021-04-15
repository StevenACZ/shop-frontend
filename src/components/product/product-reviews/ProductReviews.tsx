// React
import React from 'react';

// Styles
import { ProductReviewsStyled, Header } from './Styles';

// Components
import ReviewList from './review-list/ReviewList';
import AddNewReview from './add-new-review/AddNewReview';

interface Props {}

const ProductReviews: React.FC<Props> = () => {
  return (
    <ProductReviewsStyled>
      <ReviewList />
      <AddNewReview />
    </ProductReviewsStyled>
  );
};

export default ProductReviews;
