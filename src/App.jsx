import Form from "./Pages/Auth/Form"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Blog/Home"
import Createblog from "./Pages/Blog/createblog"
import Editblog from "./Pages/Blog/Editblog"
import SingleBlog from "./Pages/Blog/SingleBlog"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element ={<Register/>} />
      <Route path="/blog/add" element={< Createblog/>}/>
      <Route path="/blog/edit" element={< Editblog/>} />
      <Route path="/blog/:id" element={< SingleBlog/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
