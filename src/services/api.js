function fetchData(url) {
  return fetch(url)
    .then((object) => object.json())
    .then((response) => response);
}

export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetchData(url);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetchData(url);
}

export async function getProductsFromCategories(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  return fetchData(url);
}

export async function getProduct(productId) {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  return fetchData(url);
}

export async function getProductsFromID(ProductId) {
  const url = `https://api.mercadolibre.com/items/${ProductId}`;

  return fetchData(url);
}
