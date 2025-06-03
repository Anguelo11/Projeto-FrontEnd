import { Route, Routes } from "react-router-dom"

import HomePage from "../Pages/HomePage"
import LoginPage from "../Pages/LoginPage"
import LogonPage from "../Pages/LogonPage"
import ProductListingPage from "../Pages/ProductListingPage"
import ProductViewPage from "../Pages/ProductViewPage"
import NotFoundPage from "../Pages/NotFOundPage"



const Paths = () => {
  return (
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/logon" element={<LogonPage/>}/>
          <Route path="/produtos" element={<ProductListingPage/>}/>
          <Route path="/product/:id" element={<ProductViewPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>      
  )
}

export default Paths
