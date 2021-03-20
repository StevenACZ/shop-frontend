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

// Components
import ProductDetails from '../../components/product/product-details/ProductDetails';

interface Props {}

const ProductScreen: React.FC<Props> = () => {
  const { productID } = useParams() as { productID: string };

  const [product, setProduct] = useState<Product>();

  const fetchProduct = async (productID: string) => {
    const { data } = await axios.get(`/api/products/${productID}`);
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct(productID);
  }, [productID]);

  return (
    <ProductScreenStyled>
      <h1>Product Details</h1>

      {product && <ProductDetails {...product} />}
      {/* <ProductReviews /> */}
      {/* <ProductComments /> */}
    </ProductScreenStyled>
  );
};

export default ProductScreen;
