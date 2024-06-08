import React from 'react'
import { userPokemonsType } from '../utils/Types'

function PokemonCardGrid({pokemons}: {pokemons : userPokemonsType[]}) {
  return (
    <div className='pokemon-card-grid-container'>
        { pokemons && pokemons.length > 0 && pokemons?.map((data:any)=>{
            return <div className="pokemon-card" key ={data.id}>
                <div className="pokemon-card-list"></div>
                <div className="pokemon-card-compare"></div>
                <h3 className='pokemon-card-title'>{data.name}</h3>
                <img src={data.image} alt="pokemon" className='pokemon-card-image' />
            </div>
        })

        }
    </div>
  )
}

export default PokemonCardGrid