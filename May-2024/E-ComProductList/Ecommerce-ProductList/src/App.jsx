
import './App.css'
import FilterCategories from './Components/FilterCategories'
import NavbarComponent from './Components/NavbarComponent'
import Product from './Components/Product'
import {Route, Routes} from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
function App() {


  return (
    <div className='m-10'>
     <NavbarComponent/>
     <Routes>
      <Route path='/' element={<Product/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
     </Routes>
   
    </div>
  )
}

export default App
