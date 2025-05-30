import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productsSlice'
import ProductCard from './ProductCard'
import './products.css'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const loading = useSelector((state) => state.products.loading)
  // console.log('Products component rendered', products)
  const handleFetchProducts = () => {
    // dispatch(fetchProducts())
    // console.log('Fetching products...')
    dispatch(fetchProducts())
  }
  useEffect(() => {
    handleFetchProducts()
  }, [dispatch])

  if (loading) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='card-container'>
      {products &&
        products.products &&
        products.products.map((product) => (
          // <div>nam</div>

          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Products
