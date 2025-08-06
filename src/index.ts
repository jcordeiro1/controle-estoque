import { ProdutoControllerImpl } from "./controller/produto.controller";

const controller = new ProdutoControllerImpl();

try {
    controller.cadastrarProduto({ nome: "Camiseta", quantidade: 10, preco: 29.90 });
    controller.cadastrarProduto({ nome: "Tênis", quantidade: 5, preco: 149.90 });
} catch (e: any) {
    console.error("Erro:", e.message);
}
