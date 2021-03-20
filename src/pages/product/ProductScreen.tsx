// React
import React, { useEffect, useState } from 'react';

// React Router
import { useParams } from 'react-router';

// Axios
import axios from '../../axios';

// Styles
import { ProductScreenStyled } from './Styles';

// Types
import { Product } from '../../data/products';

// Antd Components
import { Spin } from 'antd';

// Components
import ProductDetails from '../../components/product/product-details/ProductDetails';

interface Props {}

const ProductScreen: React.FC<Props> = () => {
  const { productID } = useParams() as { productID: string };

  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Product>();

  const fetchProduct = async (productID: string) => {
    const { data } = await axios.get(`/api/products/${productID}`);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct(productID);
  }, [productID]);

  return (
    <Spin spinning={loading} delay={500}>
      <ProductScreenStyled>
        <h1>Product Details</h1>

        {product && <ProductDetails {...product} />}
        {/* <ProductReviews /> */}
        {/* <ProductComments /> */}
      </ProductScreenStyled>
    </Spin>
  );
};

export default ProductScreen;
