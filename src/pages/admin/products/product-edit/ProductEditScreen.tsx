// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { listProductDetails } from '../../../../actions/product/productDetails';

// Redux - Slices
import { selectUserInfo } from '../../../../slices/user';
import {
  selectLoading,
  selectProduct,
} from '../../../../slices/product/productDetails';
import {
  selectSuccess,
  selectError,
  productCreateReset,
} from '../../../../slices/product/productCreate';

// React Router
import { useHistory, useParams } from 'react-router';

// React Hook Form
import { useForm } from 'react-hook-form';

// Styles
import { ProductEditScreenStyled, Form } from './Styles';

// Antd Components
import { Alert, Spin } from 'antd';

// Components
import Button from '../../../../components/button/Button';
import Input from '../../../../components/input/Input';

interface Props {}

const ProductEditScreen: React.FC<Props> = () => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const userInfo = useSelector(selectUserInfo) as {
    isAdmin: boolean;
  };
  const product = useSelector(selectProduct);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const { productId } = useParams() as { productId: string };

  const { register, errors, handleSubmit } = useForm();

  const handleCreate = handleSubmit(
    ({
      name,
      price,
      image,
      brand,
      countInStock,
      category,
      description,
    }: {
      name: string;
      price: number;
      image: string;
      brand: string;
      countInStock: number;
      category: string;
      description: string;
    }) => {
      // dispatch(listProductDetails(data));
      const h = {
        name,
        price: Number(price),
        image,
        brand,
        countInStock: Number(countInStock),
        category,
        description,
      };

      console.log(h);
    }
  );

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
      if (!userInfo.isAdmin) {
        history.push('/');
      }
    }
  }, [history, userInfo]);

  // useEffect(() => {
  //   if (success) {
  //     history.push('/admin/productlist');
  //   }
  // }, [history, success]);

  // useEffect(() => {
  //   return () => {
  //     dispatch(productCreateReset());
  //   };
  // }, [dispatch]);

  return (
    <ProductEditScreenStyled>
      <Spin spinning={loading}>
        {product && (
          <Form onSubmit={handleCreate}>
            <h2>Edit product</h2>

            <Input
              name="name"
              label="Name"
              defaultValue={product.name}
              placeholder="Enter name"
              error={errors.name?.message}
              ref={register({
                required: 'Name is required',
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
              type="number"
              name="price"
              label="Price"
              defaultValue={product.price}
              placeholder="Enter price"
              error={errors.price?.message}
              ref={register({
                required: 'Price is required',
              })}
            />
            <Input
              name="image"
              label="Image"
              defaultValue={product.image}
              placeholder="Enter image"
              error={errors.image?.message}
              ref={register({
                required: 'Image is required',
              })}
            />
            <Input
              name="brand"
              label="Brand"
              defaultValue={product.brand}
              placeholder="Enter brand"
              error={errors.brand?.message}
              ref={register({
                required: 'Brand is required',
              })}
            />
            <Input
              type="number"
              name="countInStock"
              label="Count In Stock"
              defaultValue={product.countInStock}
              placeholder="Enter count in stock"
              error={errors.countInStock?.message}
              ref={register({
                required: 'Count In Stock is required',
              })}
            />
            <Input
              name="category"
              label="Category"
              defaultValue={product.category}
              placeholder="Enter category"
              error={errors.category?.message}
              ref={register({
                required: 'Category is required',
              })}
            />
            <Input
              name="description"
              label="Description"
              defaultValue={product.description}
              placeholder="Enter description"
              error={errors.description?.message}
              ref={register({
                required: 'Description is required',
              })}
            />
            <Button width="100%" type="submit">
              Update
            </Button>
            <Button width="100%" type="button" onClick={() => history.goBack()}>
              Go Back
            </Button>
          </Form>
        )}
        {error && <Alert message={error} type="error" showIcon banner />}
      </Spin>
    </ProductEditScreenStyled>
  );
};

export default ProductEditScreen;
