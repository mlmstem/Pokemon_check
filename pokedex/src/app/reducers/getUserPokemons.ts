import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { userInfo } from "os";
import { pokemonListRef } from "../../utils/FirebaseConfig";
import { where, query, getDocs } from "firebase/firestore";
import { userPokemonsType } from "../../utils/Types";
import { defaultImages } from "../../utils/getPokemonImages";

export const getUserPokemons = createAsyncThunk(
    "pokemon/userList",
    async(args, {getState}) =>{
        try{
            const {app : {userInfo},} = getState() as RootState;
            if(!userInfo?.email){
                return;
            }
            const friestoreQuery = 
                query(pokemonListRef, 
                where("email",  "==", userInfo.email));

            const fetchedPokemons = await getDocs(friestoreQuery);

            if (fetchedPokemons.docs.length){
                const getUserPokemons : userPokemonsType[] = [];
                fetchedPokemons.forEach(async (pokemon) =>{
                    const pokemons = await pokemon.data().pokemon;
                    //@ts-ignore
                    let image = images[pokemon.id]
                    if (!image){
                        //@ts-ignore
                        image = defaultImages[pokemon.id];
                    }
                    // @ts-ignore
                    const types = pokemon.types.map((name : string) =>(
                        //@ts-ignore
                        {[name]: pokemon[name],}
                    ));

                    getUserPokemons.push({
                        ...pokemons,
                        firebaseId : pokemon.id,
                        image,
                        types,   
                    });
                    
                });
                return getUserPokemons;
            }
            return[];



        }catch(err){
            console.log(err);
        }
        
    }
);