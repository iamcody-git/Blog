import Form from "./Pages/Auth/Form"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Blog/Home"
import Createblog from "./Pages/Blog/createblog"
import Editblog from "./Pages/Blog/Editblog"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element ={<Register/>} />
      <Route path="/add/id" element={< Createblog/>}/>
      <Route path="/edit/id" element={< Editblog/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
