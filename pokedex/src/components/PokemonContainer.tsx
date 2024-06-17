import React from 'react'

function PokemonContainer({image} : {image ?: string}) {

  return (
    <div className='circle-container'>
        
        <div className="outer-circle">
            <div className="inner-circle">
            <img src={image} alt="pokemon"/>
            </div>
            <div className="lines">
                <line className="line line-1"></line>
                <line className="line line-2"></line>
            </div>
            </div>
            
            </div>
  )
}

export default PokemonContainer