import { faker } from "@faker-js/faker"
import { PokemonType } from "../types/PokemonType"
import { fetchPokemonDetail, fetchPokemonList } from "./PokemonServices";

globalThis.fetch = vi.fn();

function createFetchResponse(data: any) {
    return {json: ()=> new Promise((resolve)=> resolve(data)) }; 
}

describe("testa o PokemonService", ()=> {
    test ("Verifica se foi feito o get list para a url correta", async ()=>{
        const pokemonListResponse: PokemonType[] = [
            {
                id: 1,
                name: faker.animal.bear.name,
                image: faker.image.urlPlaceholder(),
                type: faker.animal.type(),
            },
            {
                id: 2,
                name: faker.animal.bear.name,
                image: faker.image.urlPlaceholder(),
                type: faker.animal.type(),
            },
        ];

        fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));

        const pokemonList = await fetchPokemonList();

        expect(fetch).toHaveBeenCalledWith("http://localhost:5000/pokemon");
        expect(pokemonList).toStrictEqual(pokemonListResponse)
    })

    test ("Verifica se foi feito o get list para a url correta", async ()=>{
        const pokemonDetailResponse: PokemonType= 
            {
                id: 1,
                name: faker.animal.bear.name,
                image: faker.image.urlPlaceholder(),
                type: faker.animal.type(),
            };
        
        fetch.mockResolvedValue(createFetchResponse(pokemonDetailResponse));

        const pokemonList = await fetchPokemonDetail(1);

        expect(fetch).toHaveBeenCalledWith("http://localhost:5000/pokemon/1");
        expect(pokemonList).toStrictEqual(pokemonDetailResponse)
    })
})