// React
import React, { useEffect, useState } from 'react';

// React Router
import { useParams } from 'react-router';

// Data & Types
import products, { Product } from '../data/products';

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
      <h1>Product</h1>
      {/* <ProductHero /> */}
      {/* <ProductReviews /> */}
      {/* <ProductComments /> */}
    </>
  );
};

export default ProductScreen;
