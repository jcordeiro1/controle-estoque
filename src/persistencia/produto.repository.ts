import { Produto } from "../model/produto";
import { ProdutoRepository } from "./repository.interface";

export class ProdutoRepositoryImpl implements ProdutoRepository {
    private produtos: Produto[] = [];

    salvar(produto: Produto): void {
        const index = this.produtos.findIndex(p => p.nome === produto.nome);
        if (index !== -1) {
            this.produtos[index] = produto;
        } else {
            this.produtos.push(produto);
        }
    }

    buscarPorNome(nome: string): Produto | undefined {
        return this.produtos.find(p => p.nome === nome);
    }

    listarTodos(): Produto[] {
        return this.produtos;
    }
}
