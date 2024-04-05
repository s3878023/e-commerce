// import './App.css';
// import { Navbar } from './Components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Shop from './Pages/Shop'; 
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';

// function App() {
//   return (
//       <div>
//         <BrowserRouter>
//         <Navbar/>
//         <Routes>
//           <Route path= '/' element = {<Shop/>}/>
//           <Route path= '/mens' element = {<ShopCategory category = "men"/>}/>
//           <Route path= '/womens' element = {<ShopCategory category = "women" />}/>
//           <Route path= '/kids' element = {<ShopCategory category = "kid" />}/>
//           <Route path= '/product' element = {<Product/>}/>
//             <Route path = ':productId' element={<Product/>} />
//         </Routes>
//         <Route path = '/cart' elemnet={<Cart/>}/>
//         <Route path = '/login' elemnet={<LoginSignup/>}/>

//         </BrowserRouter>
        
//       </div>
//   );
// }

// export default App;
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'; 
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes> {/* Wrap all Route components in Routes */}
          <Route path= '/' element = {<Shop/>}/>
          <Route path= '/mens' element = {<ShopCategory category = "men"/>}/>
          <Route path= '/womens' element = {<ShopCategory category = "women" />}/>
          <Route path= '/kids' element = {<ShopCategory category = "kid" />}/>
          <Route path= '/product' element = {<Product/>}/>
          <Route path = ':productId' element={<Product/>} />
          <Route path = '/cart' element={<Cart/>}/> {/* Move Cart route inside Routes */}
          <Route path = '/login' element={<LoginSignup/>}/> {/* Move LoginSignup route inside Routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
