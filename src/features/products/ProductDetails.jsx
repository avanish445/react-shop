import React from 'react'
import './products.css'

const ProductDetails = ({ product }) => {
  return (
    <div className='product-details'>
      <div>
        <img src={product.thumbnail} alt={product.title} className='product-details_image' />
        <div className='product-details_action-buttons'>
          <button className='cart-button'>Add to cart</button>
          <button className='buy-button'>Buy Now</button>
        </div>
      </div>
      <div className='product-details_info'>
        <h3>{product.brand}</h3>
        <h4>{product.title}</h4>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Price:</strong> ${product.price} (-{product.discountPercentage}% off)
        </p>
        <p>
          <strong>Rating:</strong> {product.rating} ⭐
        </p>
        <p>
          <strong>In Stock:</strong> {product.stock}
        </p>
        <p>
          <strong>SKU:</strong> {product.sku}
        </p>
        <p>{/* <strong>Tags:</strong> {product.tags.join(', ')} */}</p>

        <h3>Dimensions</h3>
        <ul>
          <li>Width: {product?.dimensions?.width} cm</li>
          <li>Height: {product?.dimensions?.height} cm</li>
          <li>Depth: {product?.dimensions?.depth} cm</li>
          <li>Weight: {product?.weight} kg</li>
        </ul>

        <p>
          <strong>Warranty:</strong> {product.warrantyInformation}
        </p>
        <p>
          <strong>Shipping Info:</strong> {product.shippingInformation}
        </p>
        <p>
          <strong>Availability:</strong> {product.availabilityStatus}
        </p>
        <p>
          <strong>Return Policy:</strong> {product.returnPolicy}
        </p>
        <p>
          <strong>Min Order Qty:</strong> {product.minimumOrderQuantity}
        </p>
        <p>
          <strong>Barcode:</strong> {product?.meta?.barcode}
        </p>
        <img src={product?.meta?.qrCode} alt='QR Code' width={100} />

        <h3>Gallery</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          {product?.images?.map((img, idx) => (
            <img key={idx} src={img} alt={`img-${idx}`} width={100} />
          ))}
        </div>

        <h3>Customer Reviews</h3>
        {product?.reviews?.map((r, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <strong>{r.reviewerName}</strong> - {r.rating} ⭐<p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetails
