import { readFile, writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon";

export class BoxService {
  private readonly filePath = "./pc_box.json";

  public async carregarPokemons(): Promise<PokemonResumo[]> {
    try {
      const data = await readFile(this.filePath, "utf-8");

      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  public async salvarPokemons(pokemons: PokemonResumo[]): Promise<void> {
    await writeFile(this.filePath, JSON.stringify(pokemons, null, 2), "utf-8");
  }
}
