import { PokemonType } from "../types/PokemonType";

const BASE_URL = 'http://localhost:5000';

export async function  fetchPokemonList(): Promise<PokemonType[]> {
    const responde = await fetch(`${BASE_URL}/pokemon`);
    const data = responde.json();

    return data;
}

export async function  fetchPokemonDetail(id: number): Promise<PokemonType> {
    const responde = await fetch(`${BASE_URL}/pokemon/${id}`);
    const data = responde.json();

    return data;
}