import ProductCard from '../ProductCard';
import { ProductType } from '../../types';
import './style.css';

function CardsList({ products }: { products: ProductType[] }) {
  const createProductCard = (product: ProductType) => (
    <ProductCard { ...product } testid="" key={ product.productID } />
  );

  return (
    <ul id="ulListCard">
      {products.map(createProductCard)}
    </ul>
  );
}

export default CardsList;
