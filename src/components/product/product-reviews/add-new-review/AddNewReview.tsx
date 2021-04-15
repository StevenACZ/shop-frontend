// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { createProductReview } from '../../../../actions/product/productCreateReview';

// Redux - Slices
import {
  selectProductCreateReviewLoading,
  selectProductCreateReviewError,
  productCreateReviewReset,
} from '../../../../slices/product/productCreateReview';
import { selectUserInfo } from '../../../../slices/user';

// React Router
import { useParams } from 'react-router';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { AddNewReviewStyled, Header, Form } from './Styles';

// Antd Components
import { Alert, Spin, Rate } from 'antd';

// Components
import Input from '../../../../components/input/Input';
import Button from '../../../../components/button/Button';

interface Props {}

const AddNewReview: React.FC<Props> = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const userInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectProductCreateReviewLoading);
  const error = useSelector(selectProductCreateReviewError);

  const { productId } = useParams() as { productId: string };

  const { register, errors, handleSubmit, reset } = useForm();
  const [rate, setRate] = useState(1);

  const handleSignIn = handleSubmit((data: { comment: string }) => {
    dispatch(
      createProductReview(productId, {
        ...data,
        rating: rate,
      })
    );

    reset();
  });

  useEffect(() => {
    return () => {
      dispatch(productCreateReviewReset());
    };
  }, [dispatch]);

  return (
    <Spin spinning={loading}>
      <AddNewReviewStyled>
        <Header>
          <h2>Write a customer review</h2>
        </Header>

        <Form onSubmit={handleSignIn}>
          <Rate
            allowHalf
            defaultValue={rate}
            value={rate}
            onChange={(e: number) => setRate(e)}
          />

          <Input
            name="comment"
            label="Comment"
            placeholder="Your comment"
            error={errors.comment?.message}
            ref={register({
              required: 'Comment is required',
            })}
          />

          <Button disabled={!userInfo} width="100%">
            Submit
          </Button>
        </Form>

        {error && <Alert message={error} type="error" showIcon banner />}
      </AddNewReviewStyled>
    </Spin>
  );
};

export default AddNewReview;
