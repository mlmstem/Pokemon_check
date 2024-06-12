import React, { useEffect } from 'react'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Wrapper from './sections/Wrapper'
import Background from './components/Background'
import "./scss/index.scss";
import Search from './pages/Search'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Mylist from './pages/Mylist'
import About from './pages/About'
import Compare from './pages/Compare'
import Pokemon from './pages/Pokemon'
import { ToastContainer, ToastOptions, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from './app/hooks'




function App() {
  const {toasts} = useAppSelector(({app}) => app);
  const dispatch = useAppDispatch();

  useEffect (() =>{
    if(toasts.length){
      

      toasts.forEach((message : string) =>{
        toast(message);
      })
    }
  },[toasts, dispatch])
  return (
    <div className='main-container'>
      <Background />
      <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/list" element={<Mylist />} />
        <Route path="/about" element={<About />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/pokemon/1" />} />
        </Routes>
        <Footer />
        {/* <ToastContainer /> */}

      </div>
      </BrowserRouter>
    </div>
  )
}

export default App