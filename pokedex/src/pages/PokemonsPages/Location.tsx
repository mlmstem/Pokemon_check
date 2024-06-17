import React from 'react'
import {useAppSelector } from '../../app/hooks';


function Location() {
    const pokemonData = useAppSelector(
        ({ pokemon: { currentPokemon } }) => currentPokemon
      );
  console.log(pokemonData?.encounters);
  return (
    <div className='pokemon-locations'>
        <ul className='pokemon-location-list'>
            
            {pokemonData?.encounters?.map((encounter : string) => (
                <li key = {encounter} className='pokemon-location'>
                    {encounter}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Location