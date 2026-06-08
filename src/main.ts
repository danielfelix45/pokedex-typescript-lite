import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/CatalogoPokemon";
import { BoxService } from "./services/BoxService";

async function main() {
  const api = new PokeApiService();

  const boxService = new BoxService();

  const catalogo = new CatalogoPokemon(boxService);

  await catalogo.carregar();

  const pikachu = await api.buscarPokemon("pikachu");

  if (pikachu) {
    await catalogo.adicionar(pikachu);
  }

  const charmander = await api.buscarPokemon("charmander");

  if (charmander) {
    await catalogo.adicionar(charmander);
  }

  const duplicado = await api.buscarPokemon("pikachu");

  if (duplicado) {
    await catalogo.adicionar(duplicado);
  }

  await api.buscarPokemon("pokemon-inexistente");

  catalogo.listar();

  await catalogo.remover(25);

  catalogo.listar();
}

main();
