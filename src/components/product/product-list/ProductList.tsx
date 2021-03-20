// React
import React, { useEffect, useState } from 'react';

// Axios
import axios from '../../../axios';

// Styles
import { ProductListStyled } from './Styles';

// Types
import { Product } from '../../../data/products';

// Antd Components
import { Spin } from 'antd';

// Components
import ProductListItem from './product-list-item/ProductListItem';

interface Props {}

const ProductList: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get('/api/products');
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Spin spinning={loading} delay={500}>
      <ProductListStyled>
        {products.map((product: Product) => (
          <ProductListItem key={product._id} {...product} />
        ))}
      </ProductListStyled>
    </Spin>
  );
};

export default ProductList;
