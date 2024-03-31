
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

import CartPage from './pages/CartPage'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage'
import ProductDetailPage from './pages/ProductDetailPage'
import NavBar from './features/navbar/Navbar'
import ProductList from './features/product-list/components/ProductList'
import Layout from './Layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>, // Wrap Home component with Layout
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/cart',
    element: <Layout><CartPage /></Layout>, // Wrap CartPage component with Layout
  },
  {
    path: '/checkout',
    element: <Layout><CheckoutPage /></Layout>, // Wrap CheckoutPage component with Layout
  },
  {
    path: '/product-detail',
    element: <Layout><ProductDetailPage /></Layout>, // Wrap ProductDetailPage component with Layout
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
