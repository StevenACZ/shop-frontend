// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { deleteUser } from '../../../../../actions/user';

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
import { Alert, Popconfirm, message } from 'antd';

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

  const handleDelete = (userId: string) => {
    dispatch(deleteUser(userId));
    message.success('User Deleted');
  };

  const handleGoToUpdate = (userId: string) => {
    history.push(`/admin/${userId}/edit`);
  };

  return (
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
          title="Are you sure to delete this user?"
          onConfirm={() => handleDelete(_id)}
          okText="Yes"
          cancelText="No"
        >
          <Button width="48%">Delete</Button>
        </Popconfirm>
      </ActionsContainer>
    </ProductListItemStyled>
  );
};

export default ProductListItem;
