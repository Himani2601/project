import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Cart from './components/Cart/Cart'
import Menu from "./components/Menu/Menu"
import Search from "./components/Search/Search"
import SignIn from './components/SignUp and SignIn/SignIn'

// import PrivateRoute from "./components/PrivateRoute"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <header><Header /></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/myposts" element={<MyPosts />} />
            <Route path="/search" element={<Search />} />
          {/* </Route> */}
          {/* <Route path="/signin" element={<SignInPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
