import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Address from "./pages/Address"
import Checkout from "./pages/Checkout"
import Gallery from "./pages/Gallery"

 
function App() {
 

  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/my-cart" element={<Cart/>} />
          <Route path="/my-address" element={<Address/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product-details" element={<ProductDetail/>} />
       </Routes>
     </BrowserRouter>
  )
}

export default App
