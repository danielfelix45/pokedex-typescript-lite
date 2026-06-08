import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/CatalogoPokemon";
import { BoxService } from "./services/BoxService";
import { TerminalController } from "./controllers/TerminalController";

async function main() {
  const api = new PokeApiService();
  const boxService = new BoxService();

  const catalogo = new CatalogoPokemon(boxService);

  await catalogo.carregar();

  const controller = new TerminalController(api, catalogo);

  await controller.executar();
}

main();
