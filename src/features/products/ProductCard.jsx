import React from 'react'
import './products.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const handleProductClick = (product) => {
    // Handle product click, e.g., navigate to product details page
    console.log('Product clicked:', product)
    navigate(`/${product.title}/${product.id}`, {
      state: { ...product },
    })
  }

  return (
    <div className='product-card' onClick={() => handleProductClick(product)}>
      <img src={product.images[0]} alt={product.title} className='product-image' />
      <h3 className='product-brand'>{product.brand}</h3>
      <p className='product-title'>{product.title}</p>
      <p className='product-price'>
        <span className='product-discount'>{product.discountPercentage}% off </span>${product.price}
      </p>
      <p className='product-rating'>
        {product.rating}
        <span className='rating-star'>&#9734;</span>
      </p>
      {/* <button className='add-to-cart-button'>Add to Cart</button> */}
    </div>
  )
}

export default ProductCard
