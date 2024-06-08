import { AppTypeInitialState } from "../../utils/Types";
import { createSlice } from "@reduxjs/toolkit";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";
const initialState : AppTypeInitialState ={};

export const AppSlice = createSlice ({
    name : "app",
    initialState,
    reducers : {},
   
})

export const {} =AppSlice.actions;