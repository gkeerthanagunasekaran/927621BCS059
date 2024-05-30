import axios from 'axios';

const API_BASE_URL = 'http://20.24.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q';

const getProducts = async (company, category, top, minPrice, maxPrice) => {
  const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${category}/products`, {
    params: { top, minPrice, maxPrice }
  });
  return response.data;
};

export { getProducts };
