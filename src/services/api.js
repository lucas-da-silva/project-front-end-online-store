async function fetchData(url) {
  const object = await fetch(url);
  const json = object.json();
  return json;
}

export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetchData(url);
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetchData(url);
  return data;
}
