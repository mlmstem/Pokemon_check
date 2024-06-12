import React from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Login from '../components/Login';

function Mylist() {

  const {userInfo} = useAppSelector(({app}) => app);

  return (
    <div className='list'>
      <Login />

    </div>
  )
}

export default Wrapper(Mylist)