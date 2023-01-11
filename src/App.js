import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Featured from "./components/Featured";
import NavContainer from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Productcomponent from "./components/Productcomponent";
import Notfound from "./components/Notfound/Notfound";

import Register from "./components/Register";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Jwellary from "./components/Jwellary";
import Women from "./components/Women";
import MenClosing from "./components/MensClosing";
import Electronics from "./components/Electronics";
import Footer from "./components/Footer";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavContainer />
        <Routes>
          <Route path="/featured" element={<Featured />} />
          <Route path="/" element={<Shop />} />
          <Route path="/Ecommerse-React" element={<Shop />} />

          <Route path="/jwellary" element={<Jwellary />} />
          <Route path="/women" element={<Women />} />
          <Route path="/elctronics" element={<Electronics />} />
          <Route path="men" element={<MenClosing />} />
          <Route path="Productcomponent" element={<Productcomponent />}>
            <Route path=":id" element={<Productcomponent />} />
          </Route>
         
          <Route path="cart" element={<Cart />} />
        
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
