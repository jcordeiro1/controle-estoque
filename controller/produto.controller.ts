import { ProdutoDto } from "../model/produto.dto";
import { ProdutoController } from "./produto-controller.interface";
import { ProdutoService } from "../business/produto-service.interface";
import { ProdutoServiceImpl } from "../business/produto.service";

export class ProdutoControllerImpl implements ProdutoController {
    readonly produtoService: ProdutoService;

    constructor() {
        this.produtoService = new ProdutoServiceImpl();
    }

    cadastrarProduto(produtoDto: ProdutoDto): void {
        const produtoCadastrado = this.produtoService.cadastrarProduto(produtoDto);
        console.log(produtoCadastrado);
    }
}
