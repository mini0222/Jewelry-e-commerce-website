
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Favorite from './Pages/Favorite';
import Footer from './Components/Footer/Footer';
import ShopSpecial from './Pages/ShopSpecial';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Shop/>}/>
        <Route path='/bestsellers' element= {<ShopSpecial special="bestsellers"/>}/>
        <Route path='/newarrivals' element= {<ShopSpecial special="newarrivals"/>}/>
        <Route path='/earrings' element= {<ShopCategory category="earrings"/>}/>
        <Route path='/necklace' element= {<ShopCategory category="necklace"/>}/>
        <Route path='/braclet' element= {<ShopCategory category="braclet"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId'element={<Product/>}/>
        </Route>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
