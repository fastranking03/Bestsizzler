import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"

 
function App() {
 

  return (
     <BrowserRouter>
       <Routes>
          <Route index element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product-details" element={<ProductDetail/>} />
       </Routes>
     </BrowserRouter>
  )
}

export default App
