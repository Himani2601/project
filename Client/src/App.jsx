import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./pages/Home"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <header><Header /></header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/allposts" element={<Posts />} />
            <Route path="/myposts" element={<MyPosts />} />
            <Route path="/addposts" element={<AddPosts />} />
            <Route path="/search" element={<Search />} />
            <Route path="/messages" element={<ChatPage />} />
          </Route> */}
          {/* <Route path="/signin" element={<SignInPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
