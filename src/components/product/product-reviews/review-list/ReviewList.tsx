// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Redux - Slices
import {
  selectProductDetailsProduct,
  selectProductDetailsLoading,
  selectProductDetailsError,
} from '../../../../slices/product/productDetails';

// Styles
import { ReviewListStyled } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import ReviewListItem from './review-list-item/ReviewListItem';

interface Props {}

const ReviewList: React.FC<Props> = () => {
  // Selector
  const product = useSelector(selectProductDetailsProduct) as any;
  const loading = useSelector(selectProductDetailsLoading);
  const error = useSelector(selectProductDetailsError);

  return (
    <Spin spinning={loading}>
      <ReviewListStyled>
        {product &&
          product.reviews.map((review: any) => (
            <ReviewListItem key={review._id} {...review} />
          ))}
      </ReviewListStyled>
      {product && product.reviews.length === 0 && (
        <Alert message="No Reviews" type="warning" />
      )}
      {error && <Alert message={error} type="error" showIcon banner />}
    </Spin>
  );
};

export default ReviewList;
