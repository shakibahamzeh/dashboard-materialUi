import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import NewProduct from './pages/newProduct/NewProduct';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
const App=()=> {
  return (
    <div className="App">
      
     <Navbar/>
     <div className="container">
       
       <Sidebar/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/users" element={<UserList/>}/>
       <Route path="/user/:userId" element={<User/>}/>
       <Route path="/newUser" element={<NewUser/>}/>
       <Route path="/products" element={<ProductList/>}/>
       <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/newProduct" element={<NewProduct/>}/>
       </Routes>
     </div>
     
    </div>
  );
}

export default App;
