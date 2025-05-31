import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../features/products/Product'
import Login from '../login/Login'
import Cart from '../cart/Cart'
const Home = lazy(() => import('../home/Home'))
const About = lazy(() => import('../about/About'))
const Contact = lazy(() => import('../contact/Contact'))


const Routers = () => {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:title/:id' element={<Product />} />
                <Route path='*' element={<div>404 Not Found</div>} />
            </Routes>
        </Suspense>
    )
}

export default Routers