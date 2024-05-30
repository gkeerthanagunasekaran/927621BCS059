import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();

    const product = {

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
