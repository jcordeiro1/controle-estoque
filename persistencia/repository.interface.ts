import { Produto } from "../model/produto";

export interface ProdutoRepository {
    salvar(produto: Produto): void;
    buscarPorNome(nome: string): Produto | undefined;
    listarTodos(): Produto[];
}
