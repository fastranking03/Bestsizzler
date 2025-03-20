import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"
import Card from "./pages/Card"
import Address from "./pages/Address"
import Checkout from "./pages/Checkout"
import Gallery from "./pages/Gallery"
import Thankyou from "./pages/Thankyou"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsandConditions from "./pages/TermsandConditions"

 
function App() {
 

  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/my-card" element={<Card/>} />
          <Route path="/my-address" element={<Address/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product-details" element={<ProductDetail/>} />
          <Route path="/thankyou" element={<Thankyou/>} />
          <Route path="/termsandconditions" element={<TermsandConditions/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
       </Routes>
     </BrowserRouter>
  )
}

export default App
