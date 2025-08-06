import { ProdutoService } from "./produto-service.interface";
import { ProdutoDto } from "../model/produto.dto";
import { Produto } from "../model/produto";
import { ProdutoRepositoryImpl } from "../persistencia/produto.repository";

export class ProdutoServiceImpl implements ProdutoService {
    private repository = new ProdutoRepositoryImpl();

    cadastrarProduto(produtoDto: ProdutoDto): ProdutoDto {
        const existente = this.repository.buscarPorNome(produtoDto.nome);
        if (existente) throw new Error("Produto já existe.");

        const produto = new Produto(produtoDto.nome, produtoDto.quantidade, produtoDto.preco);
        this.repository.salvar(produto);
        return produtoDto;
    }
}
