import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import UploadForm from './components/UploadForm.jsx'
import Upload from './pages/Upload.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>} />
            <Route path='upload' element={<Upload/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='login' element={<Login/>}/>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={route}></RouterProvider>
   </StrictMode>,
)
