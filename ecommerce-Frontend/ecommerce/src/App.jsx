import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  // const user = true;
  return (
      <Router>
           <Routes>
               <Route exact path="/" element={<Home/>}> 
                   
               </Route>
               <Route path="/products/:catergory" element={<ProductList/>}>

               </Route>
               <Route path="/product/:id" element={<Product/>}>
                 
               </Route>
                   {/* <Route path="/register" element={user? <Navigate to="/register"/> : <Register/>}>

                   </Route>

                   <Route path="/login" element= {user ? <Navigate to="/login"/> : <Login/>}>
                         
                   </Route> */}
                   <Route path= "/register" element={<Register/>}/>
                   <Route path= "login" element={<Login/>}/>
                <Route path="/cart" element = {<Cart/>}>
                         
                </Route>
           </Routes>
      </Router>
  );
}

export default App;
