// React
import React, { useEffect, useState } from 'react';

// Axios
import axios from '../../../axios';

// Styles
import { ProductListStyled } from './Styles';

// Types
import { Product } from '../../../data/products';

// Components
import ProductListItem from './product-list-item/ProductListItem';
import Spinner from '../../spinner/Spinner';

interface Props {}

const ProductList: React.FC<Props> = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get('/api/products');
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListStyled>
      {products.length > 0 ? (
        <>
          {products.map((product: Product) => (
            <ProductListItem key={product._id} {...product} />
          ))}
        </>
      ) : (
        <Spinner height={50} width={50} />
      )}
    </ProductListStyled>
  );
};

export default ProductList;
