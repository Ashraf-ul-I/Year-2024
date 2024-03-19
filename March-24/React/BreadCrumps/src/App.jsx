import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing.jsx'
import ProductDetails from './pages/ProductDetails'
import './App.css'
import BreadCrumbs from './Components/BreadCrumbs.jsx'
const App = () => {


  return (
    <BrowserRouter>
      <div className='App'>

        { /** BreadCrumbs  */}


        <BreadCrumbs />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
// const ProductDetailsWithBreadcrumbs = () => {
//   const { pathname } = useLocation();

//   return (
//     <div>
//       <p>Current In : {pathname}</p>
//       <ProductDetails />
//     </div>
//   );
// };

export default App