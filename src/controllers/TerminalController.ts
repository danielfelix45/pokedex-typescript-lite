import { PokeApiService } from "../services/PokeApiService";
import { CatalogoPokemon } from "../services/CatalogoPokemon";

export class TerminalController {
  constructor(
    private api: PokeApiService,
    private catalogo: CatalogoPokemon
  ) {}

  public async executar(): Promise<void> {
    const pikachu = await this.api.buscarPokemon("pikachu");

    if (pikachu) {
      await this.catalogo.adicionar(pikachu);
    }

    const charmander = await this.api.buscarPokemon("charmander");

    if (charmander) {
      await this.catalogo.adicionar(charmander);
    }

    const duplicado = await this.api.buscarPokemon("pikachu");

    if (duplicado) {
      await this.catalogo.adicionar(duplicado);
    }

    await this.api.buscarPokemon("pokemon-inexistente");

    this.catalogo.listar();

    await this.catalogo.remover(25);

    this.catalogo.listar();
  }
}