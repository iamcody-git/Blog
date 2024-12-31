import Form from "./Pages/Auth/Form"
import Login from "./Pages/Auth/Login"
// import Register from "./Pages/Auth/Register"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Blog/Home"
import Createblog from "./Pages/Blog/createblog"
import Editblog from "./Pages/Blog/Editblog"
import {Provider} from 'react-redux'
import store from "../Store/store"
import Protected from "../Protected"
import { lazy, Suspense } from "react"

const Register = lazy(()=>import('./Pages/Auth/Register'))


function App() {
  
  return (
    <>
   <Provider store={store}>
   <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element ={<Register/>} />
      <Route path="/blog/add" element={<Protected>< Createblog/></Protected>}/>
      <Route path="/blog/edit" element={<Protected>< Editblog/></Protected>} />
    </Routes>
    </Suspense>
    </BrowserRouter>
   </Provider>
    </>
  )
}

export default App
