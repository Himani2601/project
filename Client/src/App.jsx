import React from "react"
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <header><Header /></header>
      </BrowserRouter>
    </>
  )
}

export default App
