// Requisito 01 - Inicio
// Função para obter categorias do Mercado Livre
async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json(); // Aguarde a conversão da resposta para JSON
  return data;
}

// Função para obter produtos com base em uma categoria e consulta
async function getProductsFromCategoryAndQuery(categoryId?: string, query?: string) {
  const categoryParam = categoryId ? `category=${categoryId}` : '';
  const queryParam = query ? `q=${query}` : '';
  const separator = categoryId && query ? '&' : '';

  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?${categoryParam + separator + queryParam}`;
  const response = await fetch(API_URL);
  const data = await response.json(); // Aguarde a conversão da resposta para JSON
  return data;
}
// Requisito 01 - Fin

// Função para obter detalhes de um produto por ID
async function getProductById(id: string) {
  const fetchApi = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const product = await fetchApi.json(); // Aguarde a conversão da resposta para JSON
  return product;
}

export {
  getCategories,
  getProductsFromCategoryAndQuery,
  getProductById,
};
