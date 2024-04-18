
import { useState } from 'react';
import './App.css'

function App() {

  const [formData, setFormData] = useState();

  const handllechange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }
  return (
    <>
      <div>
        <h1 style={{ fontSize: "20px" }}>Username</h1>
        <input id='usernme' onChangeCapture={handllechange} />
        <br />
        <input id='name' onChangeCapture={handllechange} />
        <hr />
      </div>
    </>
  )
}

export default App
