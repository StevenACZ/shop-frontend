// React
import React, { useEffect, useState } from 'react';

// React Router
import { useParams } from 'react-router';

// Types
import products, { Product } from '../data/products';

// Components
import ProductDetails from '../components/product/product-details/ProductDetails';

interface Props {}

const ProductScreen: React.FC<Props> = () => {
  const params = useParams() as { productID: string };

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const prod = products.find((product) => product._id === params.productID);
    setProduct(prod);
  }, [params]);

  return (
    <>
      <h1>Product Details</h1>

      {product && <ProductDetails {...product} />}
      {/* <ProductReviews /> */}
      {/* <ProductComments /> */}
    </>
  );
};

export default ProductScreen;
