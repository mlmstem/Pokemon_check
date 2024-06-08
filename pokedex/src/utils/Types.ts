export interface AppTypeInitialState{}
export interface PokemonTypeInitialState {
    allPokemon : undefined | genericPokemonType[];
    randomPokemons : undefined | genericPokemonType[];
}
export interface genericPokemonType{
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
