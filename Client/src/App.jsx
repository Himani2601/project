import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./pages/Header"
import Home from "./pages/Home"
import Cart from './components/Cart/Cart'
import Menu from "./components/Menu/Menu"
import SignIn from './pages/SignIn'
import SignUp from "./pages/SignUp"
import FooterS from "./pages/Footer"
import ForgetPassword from './pages/ForgetPassword'
import PlaceOrder from "./components/Cart/PlaceOrder"
import PrivateRoute from './pages/PrivateRoutes'
import Dashboard from "./components/Admin/Dashboard"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <header><Header /></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset" element={<ForgetPassword />} />
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
          </Route>
        </Routes >
        <footer><FooterS /></footer>
      </BrowserRouter >
    </>
  )
}

export default App
