import ProductCard from '../ProductCard';
import { TipodeProduto } from '../../types';
import './style.css';

// O componente CardsList recebe uma lista de produtos e renderiza uma lista de cartões de produtos.
function CardsList({ products }: { products: TipodeProduto[] }) {
  // Função que cria um cartão de produto com base nos dados do produto.
  const createProductCard = (product: TipodeProduto) => (
    <ProductCard { ...product } testid="" key={ product.productID } />
  );

  return (
    // Renderiza uma lista não ordenada (ul) com cartões de produto.
    <ul id="ulListCard">
      {products.map(createProductCard)}
    </ul>
  );
}

export default CardsList;
