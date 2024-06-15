

import { signOut } from 'firebase/auth'
import React from 'react'
import {MdOutlinePowerSettingsNew} from "react-icons/md"
import { firebaseAuth } from '../utils/FirebaseConfig'
import { useActionData } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { setToast, setUserStatus } from '../app/slices/AppSlice'


function Footer() {
  const dispatch = useAppDispatch();
  const handleLogout = () =>{
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined));
    dispatch(setToast("Logged out successfully from Firebase."));
  }
  return (
    <footer>
        <div className="blcok"></div>
        <div className="data"></div>
        <div className="block">
            <MdOutlinePowerSettingsNew onClick={handleLogout}/>
        </div>

    </footer>
  )
}

export default Footer