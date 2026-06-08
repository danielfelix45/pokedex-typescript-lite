import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

import { APIError } from "../models/CustomErrors";

export class PokeApiService {
  private readonly baseURL: string;

  constructor(baseURL: string = "https://pokeapi.co/api/v2") {
    this.baseURL = baseURL;
  }

  public async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
      const response = await fetch(`${this.baseURL}/pokemon/${nomeOuId}`);

      if (!response.ok) {
        throw new APIError(`Pokémon não encontrado: ${nomeOuId}`);
      }

      const pokemon: PokemonApiResponse = await response.json();

      return {
        id: pokemon.id,
        nome: pokemon.name,
        altura: pokemon.height,
        peso: pokemon.weight,
        tipos: pokemon.types.map((item) => item.type.name),
      };
    } catch (error) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);

      return null;
    }
  }
}
