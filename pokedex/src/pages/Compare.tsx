import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import CompareContainer from '../components/CompareContainer';



function Compare() {

  const {compareQueue} = useAppSelector(({pokemon}) => (pokemon));

  return (
    <div className='compare'><CompareContainer 
    pokemon = {compareQueue[0]} isEmpty = {compareQueue.length < 1}/>
    <CompareContainer 
    pokemon = {compareQueue[1]} isEmpty = {compareQueue.length < 2}/>
    
    </div>
  )
}

export default Wrapper(Compare)