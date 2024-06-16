import { AppTypeInitialState } from "../../utils/Types";
import { createSlice } from "@reduxjs/toolkit";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";
import { stat } from "fs";
import { pokemonTabs } from "../../utils/Constant";
const initialState : AppTypeInitialState ={
    toasts : [],
    userInfo : undefined,
    currentPokemonTab : pokemonTabs.description,
};

export const AppSlice = createSlice ({
    name : "app",
    initialState,
    reducers : {
        setToast : (state,action) =>{
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts = toasts;
        },
        clearToasts : (state) =>{
            state.toasts = [];
        },

        setUserStatus : (state,action)=>{
            state.userInfo = action.payload
        },

        setPokemonTab : (state,action) =>{
            state.currentPokemonTab = action.payload;
        }
    },
   
})

export const {setToast, clearToasts, setUserStatus, setPokemonTab} =AppSlice.actions;