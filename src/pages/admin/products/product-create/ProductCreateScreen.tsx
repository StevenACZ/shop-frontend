// React
import React, { useEffect, useState } from 'react';

// Axios
import axios from '../../../../axios';

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
      dispatch(
        createProduct({
          name,
          price: Number(price),
          image,
          brand,
          countInStock: Number(countInStock),
          category,
          description,
        })
      );
    }
  );

  const [image, setImage] = useState();

  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);
      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

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
            placeholder="Enter price"
            error={errors.price?.message}
            ref={register({
              required: 'Price is required',
            })}
          />
          <Input
            name="image"
            label="Image"
            placeholder="Enter image"
            value={image}
            error={errors.image?.message}
            ref={register({
              required: 'Image is required',
            })}
          />
          <Input
            type="file"
            name="imageUpload"
            label="Image Upload"
            onChange={uploadFileHandler}
            placeholder="Enter imageUpload"
            error={errors.imageUpload?.message}
            ref={register({})}
          />
          <Input
            name="brand"
            label="Brand"
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
            placeholder="Enter count in stock"
            error={errors.countInStock?.message}
            ref={register({
              required: 'Count In Stock is required',
            })}
          />
          <Input
            name="category"
            label="Category"
            placeholder="Enter category"
            error={errors.category?.message}
            ref={register({
              required: 'Category is required',
            })}
          />
          <Input
            name="description"
            label="Description"
            placeholder="Enter description"
            error={errors.description?.message}
            ref={register({
              required: 'Description is required',
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
