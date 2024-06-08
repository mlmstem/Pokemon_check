import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsRoute } from "../../utils/Constant";
import axios from "axios";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async ()=>{
    try{
        const {data} = await axios.get(pokemonsRoute);
        // console.log(data.results);
        return data.results;
    }catch(err){
        console.log(err);

    }
})