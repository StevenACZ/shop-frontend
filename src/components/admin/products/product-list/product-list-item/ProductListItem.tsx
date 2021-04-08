// React
import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { deleteProduct } from '../../../../../actions/productDelete';

// Redux - Slices
import {
  selectLoading,
  selectError,
} from '../../../../../slices/productDelete';

// React Router
import { useHistory } from 'react-router';

// Styles
import {
  ProductListItemStyled,
  Header,
  Body,
  Footer,
  ActionsContainer,
} from './Styles';

// Antd Components
import { Alert, Spin, Popconfirm } from 'antd';

// Components
import Button from '../../../../button/Button';

interface Props {
  _id: string;
  name: string;
  price: number;
  category: boolean;
  brand: string;
  countInStock: number;
}

const ProductListItem: React.FC<Props> = ({
  _id,
  name,
  price,
  category,
  brand,
  countInStock,
}) => {
  // History
  const history = useHistory();

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = (productId: string) => {
    dispatch(deleteProduct(productId));
  };

  const handleGoToUpdate = (productId: string) => {
    history.push(`/admin/${productId}/edit`);
  };

  return (
    <Spin spinning={loading}>
      <ProductListItemStyled>
        <Header>
          <h3>{_id}</h3>
        </Header>
        <Body>
          <p>
            <span>Name:</span> {name}
          </p>
          <p>
            <span>Price:</span> ${price}
          </p>
          <p>
            <span>Category:</span> {category}
          </p>
          <p>
            <span>Brand:</span> {brand}
          </p>
          <p>
            <span>Stock:</span> {countInStock}
          </p>
        </Body>
        <Footer>
          {countInStock === 0 ? (
            <Alert message="Out of Stock" type="error" showIcon />
          ) : (
            <Alert message="In Stock" type="success" showIcon />
          )}
        </Footer>
        <ActionsContainer>
          <Button width="48%" onClick={() => handleGoToUpdate(_id)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button width="48%">Delete</Button>
          </Popconfirm>
        </ActionsContainer>
      </ProductListItemStyled>

      {error && <Alert message={error} type="error" showIcon banner />}
    </Spin>
  );
};

export default ProductListItem;
