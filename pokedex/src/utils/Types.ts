export interface AppTypeInitialState{
    toasts : string[],
    userInfo : undefined | {email : string},
    currentPokemonTab :string,
    
}
export interface currentPokemonType{
    id : number,
    name : string,
    types : pokemonTypeInterface[];
    image : string;
    stats : pokemonStatType[];
    encouters : string[];
    evolution : {level : number; pokemon :{name : string; url : string}}[];
    pokemonAbilities : {abilities : string[], moves : string[]};
}
export interface PokemonTypeInitialState {
    allPokemon : undefined | generatedPokemonType[];
    randomPokemons : undefined | genericPokemonType[];
    compareQueue : genericPokemonType[];
    userPokemons : userPokemonsType[];
    currentPokemon : currentPokemonType | undefined;
    
}
export interface generatedPokemonType{
    name : string;
    url : string;
}
export interface genericPokemonType{
    name:string;
    id:number;
    image:string;
    // types:string;
        types : pokemonTypeInterface[]

}

export interface pokemonTypeInterface{
    [key : string] :{
        image : string;
        resistance : string[];
        strength : string[];
        weakness : string[];
        vulnerable : string[]
    }
}

export interface userPokemonsType extends genericPokemonType{
    firebaseId?: string;
    
}
export type pokemonStatType =
| "vulnerable"
| "weakness"
| "strength"
| "resistance";

export interface pokemonStatsType{
    name : string,
    value : string,

}
