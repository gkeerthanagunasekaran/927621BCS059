import React from 'react'
import { useParams } from 'react-router-dom';

const AllProducts = ({ company, category, top, minPrice, maxPrice }) => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        const fetchProducts = async () => {
          const data = await getProducts(company, category, top, minPrice, maxPrice);
          setProducts(data);
        };
        fetchProducts();
      }, [company, category, top, minPrice, maxPrice]);
    
      const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
      };
    
      const handleSortChange = (e) => {
        setSort(e.target.value);
      };
    
      const sortedProducts = [...products].sort((a, b) => a[sort] - b[sort]);



  return (

    <div>
      <div className="mb-4">
        <select name="category" value={filter.category} onChange={handleFilterChange}>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
        </select>
        <input type="number" name="minPrice" placeholder="Min Price" value={filter.minPrice} onChange={handleFilterChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" value={filter.maxPrice} onChange={handleFilterChange} />
        <select name="sort" value={sort} onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="discount">Discount</option>
        </select>
      </div>


    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <img src="https://via.placeholder.com/150" alt={product.name} />
          <h2>{product.name}</h2>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default AllProducts;
