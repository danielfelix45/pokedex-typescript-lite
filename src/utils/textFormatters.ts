import { PokemonResumo } from "../models/Pokemon";

export function createSeparator(size: number = 40): string {
  return "-".repeat(size);
}

export function formatPokemon(pokemon: PokemonResumo): string {
  return `
${createSeparator()}
#${pokemon.id} - ${pokemon.nome}
Tipos: ${pokemon.tipos.join(", ")}
Altura: ${pokemon.altura}
Peso: ${pokemon.peso}
${createSeparator()}
`;
}
