import { createAsyncThunk } from "@reduxjs/toolkit";
import { types } from "util";
import { pokemonStatsType, pokemonTypeInterface, userPokemonsType } from "../../utils/Types";
import { RootState } from "../store";
import { setToast } from "../slices/AppSlice";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";

export const addPokemonToList = createAsyncThunk("pokemon/addPokemon", async(pokemon :
    {id : number; name:string; 
        types : pokemonTypeInterface[] | string [];  stats?: pokemonStatsType[]}, {getState, dispatch})=>
    {
        try{
            const {app:{userInfo}, pokemon : {userPokemons}} = getState() as RootState;
            if (!userInfo?.email){
                console.log('please login to add ')
                return dispatch(setToast("please login in order to add pokemon to your collection"))
            }
            const index = userPokemons.findIndex((userPokemon: userPokemonsType) =>{
                return userPokemon.name === pokemon.name;
            });
            if (index === -1){
                let types : string[] = [];
                types = pokemon.types as string[];
                await addDoc(pokemonListRef, {pokemon : {id : pokemon.id, name : pokemon.name, types}, });
                console.log(`${pokemon.name} added to your collection`);
                return dispatch(setToast(`${pokemon.name} added to your collection`));  
            }else{
                console.log(`${pokemon.name} Already part of your collection`);
                return dispatch(setToast(`${pokemon.name} Already part of your collection`));
            }
        
        }catch(err){
            console.log(err);
        }
    }, 
    
    )