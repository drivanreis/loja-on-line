async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = response.json();
  return data;
}

async function getProductsFromCategoryAndQuery(categoryId?: string, query?: string) {
  const categoryParam = categoryId ? `category=${categoryId}` : '';
  const queryParam = query ? `q=${query}` : '';
  const separator = categoryId && query ? '&' : '';

  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?${categoryParam + separator + queryParam}`;
  const response = await fetch(API_URL);
  return response.json();
}

async function getProductById(id: string) {
  const fetchApi = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const product = await fetchApi.json();

  return product;
}

export {
  getCategories,
  getProductsFromCategoryAndQuery,
  getProductById,
};
