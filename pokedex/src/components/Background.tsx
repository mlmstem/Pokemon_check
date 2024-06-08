import React from 'react'
import pokeball1 from "../assets/pokeball.png"
import pokeball2 from "../assets/pokeball2.png"

function Background() {
  return (
    <div className='background'>
        <img src={pokeball1} alt='pokeball' className='pokeball1' />
        <img src={pokeball2} alt='pokeball' className='pokeball2' />

        <img src={pokeball1} alt='pokeball' className='pokeball3' />
        <img src={pokeball2} alt='pokeball' className='pokeball4' />

        <img src={pokeball1} alt='pokeball' className='pokeball5' />
        <img src={pokeball2} alt='pokeball' className='pokeball6' />

    </div>
  )
}

export default Background