import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from '../../components/ProductCard';

import { getProductById } from '../../services/api';

import { ProductType } from '../../types';

function ProductDetails() {
  const { id: productIdParam } = useParams();

  const [product, setProduct] = useState<ProductType>();

  const requestProductDetails = async () => {
    const {
      id: productID,
      title: name,
      thumbnail: image,
      price,
    } = await getProductById(productIdParam as string);

    setProduct({ productID, name, image, price });
  };

  useEffect(() => {
    requestProductDetails();
  }, []);

  if (!product) return <p>Carregando ...</p>;

  return (
    <ProductCard { ...product } testid="detail-" />
  );
}

export default ProductDetails;
