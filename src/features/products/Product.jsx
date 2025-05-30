import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductById } from './productsSlice'
import ProductDetails from './ProductDetails'

const Product = () => {
  const { title, id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.product)
  const loading = useSelector((state) => state.products.loading)
  console.log('Product component rendered')
  console.log('Product details:', product)
  console.log('Loading state:', loading)
  //   console.log('Product title:', title)
  //   console.log('Product id:', id)
  const handleFetchProductById = () => {
    dispatch(fetchProductById(id))
  }
  useEffect(() => {
    handleFetchProductById(id)
  }, [dispatch])

  if (loading) {
    return <div className='loading'>Loading...</div>
  }
  return (
    <div>
      <ProductDetails product={product || {}} />
    </div>
  )
}

export default Product
