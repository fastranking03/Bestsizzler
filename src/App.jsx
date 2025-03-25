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
import Thankyou from "./pages/Thankyou"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsandConditions from "./pages/TermsandConditions"
import TodaysSpecial from "./pages/TodaysSpecial"
import Orders from "./pages/Orders"
import TrackOrder from "./pages/TrackOrder"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PhoneVarification from "./pages/PhoneVarification"
import EnterCode from "./pages/EnterCode"
import RegSuccessful from "./pages/RegSuccessful"
import Testimonial from "./pages/Testimonial"
import MealDeal from "./pages/MealDeal"
 
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
          <Route path="/thankyou" element={<Thankyou/>} />
          <Route path="/termsandconditions" element={<TermsandConditions/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/todaysspecial" element={<TodaysSpecial/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/trackorder" element={<TrackOrder/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/phone-verification" element={<PhoneVarification />} />
          <Route path="/enter-code" element={<EnterCode />} />
          <Route path="/reg-successful" element={<RegSuccessful />} />
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/mealdeal" element={<MealDeal/>}/>
       </Routes>
     </BrowserRouter>
  )
}

export default App
