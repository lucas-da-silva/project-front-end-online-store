const getProductsStorage = () => {
  const allItems = JSON.parse(localStorage.getItem('products'));
  if (allItems) return allItems;
  return [];
};

const setProductsStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};

export { getProductsStorage, setProductsStorage };
