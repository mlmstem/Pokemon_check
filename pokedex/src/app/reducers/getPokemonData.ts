import { createAsyncThunk } from "@reduxjs/toolkit";
import { genericPokemonType ,} from "../../utils/Types";
import axios from "axios";
import { images,defaultImages } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/getPokemonTypes";
import { generatedPokemonType } from "../../utils/Types";


export const getPokemonData = createAsyncThunk("pokemon/randomPokemon", 
async(pokemons : generatedPokemonType[]) =>{
    try{
         const pokemonsData: genericPokemonType[] = [];

         for await (const pokemon of pokemons){
            const{data}:{
                data:{
                    id : number;
                    types: { type: genericPokemonType }[];
                }
            } = await axios.get(pokemon.url);
            const types = data.types.map(({type:{name}}:{type : {name : string}})=>({
                // @ts-expect-error
                [name]: pokemonTypes[name],

            })
            )
                
            // @ts-expect-error
            let image: string = images[data.id];
            // console.log({data});
            if(!image){
                //@ts-expect-error
                image = defaultImages[data.id];
            }
            if (image){
                pokemonsData.push({
                    name: pokemon.name,
                    id: data.id,
                    image,
                    types,
                    
                });
            }
         }
    return pokemonsData;

    }catch(err){
        console.log(err);

    }
})