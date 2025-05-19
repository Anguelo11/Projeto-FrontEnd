import { Route, Routes } from "react-router-dom"

import HomePage from "../Pages/HomePage"
import LoginPage from "../Pages/LoginPage"
import LogonPage from "../Pages/LogonPage"



const Paths = () => {
  return (
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logon" element={<LogonPage/>} />
        </Routes>      
  )
}

export default Paths
