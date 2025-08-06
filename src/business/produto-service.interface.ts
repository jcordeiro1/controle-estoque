import { ProdutoDto } from "../model/produto.dto";

export interface ProdutoService {
    cadastrarProduto(produtoDto: ProdutoDto): ProdutoDto;
}
