import Form from "./Pages/Auth/Form"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Blog/Home"
import Createblog from "./Pages/Blog/createblog"
import Editblog from "./Pages/Blog/Editblog"
import {Provider} from 'react-redux'
import store from "../Store/store"

function App() {
  
  return (
    <>
   <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element ={<Register/>} />
      <Route path="/blog/add" element={< Createblog/>}/>
      <Route path="/blog/edit" element={< Editblog/>} />
    </Routes>
    </BrowserRouter>
   </Provider>
    </>
  )
}

export default App
