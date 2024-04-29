import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Cart from './components/Cart/Cart'
import Menu from "./components/Menu/Menu"
import Search from "./components/Search/Search"
import SignIn from './pages/SignIn'
import SignUp from "./pages/SignUp"
import FooterS from './components/Footer/Footer'
import ForgetPassword from './pages/ForgetPassword'
import PlaceOrder from './components/PlaceOrder/PlaceOrder'

// import PrivateRoute from "./components/PrivateRoute"

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
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<Search />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          {/* <Route path="/myposts" element={<MyPosts />} />
            <Route path="/search" element={<Search />} />
          {/* </Route> */}
          {/* <Route path="/signin" element={<SignInPage />} /> */}
        </Routes>
        <footer><FooterS /></footer>
      </BrowserRouter>
    </>
  )
}

export default App
