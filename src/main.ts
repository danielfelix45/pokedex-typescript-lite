import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/CatalogoPokemon";

async function main() {
  const api = new PokeApiService();

  const catalogo = new CatalogoPokemon();

  const pikachu = await api.buscarPokemon("pikachu");

  if (pikachu) {
    catalogo.adicionar(pikachu);
  }

  const charmander = await api.buscarPokemon("charmander");

  if (charmander) {
    catalogo.adicionar(charmander);
  }

  const duplicado = await api.buscarPokemon("pikachu");

  if (duplicado) {
    catalogo.adicionar(duplicado);
  }

  await api.buscarPokemon("pokemon-inexistente");

  catalogo.listar();

  catalogo.remover(25);

  catalogo.listar();
}

main();
