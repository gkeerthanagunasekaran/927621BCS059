import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();

    const[name, setName] = useState("");
    const[company, setCompany] = useState("");
    const[price, setPrice] = useState("");
    const[discount, setDiscount] = useState("");
    const[availability, setAvailability] = useState("");


    useEffect(() => {
        fetchQuote();
      }, []);
    
      const fetchQuote = async () => {
        try {
          const response = await fetch('http://20.24.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });   
          const data = await response.json();
          if (data.length === 0) {  
            setQuote("No product found");
          } else {
            setName(data[0].name);
            setCompany(data[0].company);
            setPrice(data[0].price);
            setDiscount(data[0].discount);
            setAvailability(data[0].availability);
            console.log(data[0]);
          }
        } catch (error) {
          console.error('Error fetching:', error);
        }
      };
    

  return (
    <div className="p-4">
    <img src="https://via.placeholder.com/150" alt={product.name} />
    <h2>{product.name}</h2>
    <p>Company: {product.company}</p>
    <p>Category: {product.category}</p>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating}</p>
    <p>Discount: {product.discount}%</p>
    <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
    <p>Description: {product.description}</p>
  </div>
  )
}

export default ProductDetails;
