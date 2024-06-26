import React, { useEffect } from 'react'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Background from './components/Background'
import "./scss/index.scss";
import Search from './pages/Search'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Mylist from './pages/Mylist'
import About from './pages/About'
import Compare from './pages/Compare'
import Pokemon from './pages/Pokemon'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from './app/hooks'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from './utils/FirebaseConfig'
import { setUserStatus } from './app/slices/AppSlice'




function App() {
  const {toasts} = useAppSelector(({app}) => app);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (currentUser) =>{
      if(currentUser){
        dispatch(setUserStatus({email : currentUser.email}));
      }

    })
  },[dispatch])

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