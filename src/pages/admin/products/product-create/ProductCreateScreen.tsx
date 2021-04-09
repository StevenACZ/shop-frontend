// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { createProduct } from '../../../../actions/product/productCreate';

// Redux - Slices
import { selectUserInfo } from '../../../../slices/user';
import {
  selectProductCreateSuccess,
  selectProductCreateLoading,
  selectProductCreateError,
  productCreateReset,
} from '../../../../slices/product/productCreate';

// React Router
import { useHistory } from 'react-router';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { ProductCreateScreenStyled, Form } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import Button from '../../../../components/button/Button';
import Input from '../../../../components/input/Input';

interface Props {}

const ProductCreateScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const userInfo = useSelector(selectUserInfo) as {
    isAdmin: boolean;
  };
  const success = useSelector(selectProductCreateSuccess);
  const loading = useSelector(selectProductCreateLoading);
  const error = useSelector(selectProductCreateError);

  const { register, errors, handleSubmit } = useForm();

  const handleCreate = handleSubmit((data: { name: string; email: string }) => {
    dispatch(createProduct());
  });

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
      if (!userInfo.isAdmin) {
        history.push('/');
      }
    }
  }, [history, userInfo]);

  useEffect(() => {
    if (success) {
      history.push('/admin/productlist');
    }
  }, [history, success]);

  useEffect(() => {
    return () => {
      dispatch(productCreateReset());
    };
  }, [dispatch]);

  return (
    <ProductCreateScreenStyled>
      <Spin spinning={loading}>
        <Form onSubmit={handleCreate}>
          <h2>Create product</h2>

          <Input
            name="name"
            label="Name"
            placeholder="Enter name"
            error={errors.name?.message}
            ref={register({
              // required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters',
              },
              maxLength: {
                value: 100,
                message: 'Name must not be greater than 200 characters',
              },
            })}
          />
          <Input
            name="email"
            label="Email Address"
            placeholder="Enter email"
            error={errors.email?.message}
            ref={register({
              // required: 'Email is required',
              minLength: {
                value: 3,
                message: 'Email must be at least 3 characters',
              },
              maxLength: {
                value: 200,
                message: 'Email must not be greater than 100 characters',
              },
            })}
          />
          <Button width="100%" type="submit">
            Create product
          </Button>
          <Button width="100%" type="button" onClick={() => history.goBack()}>
            GO BACK
          </Button>
        </Form>
        {error && <Alert message={error} type="error" showIcon banner />}
      </Spin>
    </ProductCreateScreenStyled>
  );
};

export default ProductCreateScreen;
