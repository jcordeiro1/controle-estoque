export class Produto {
    constructor(
        public nome: string,
        public quantidade: number,
        public preco: number
    ) {}

    entrada(quantidade: number): void {
        if (quantidade <= 0) throw new Error("Quantidade de entrada deve ser positiva.");
        this.quantidade += quantidade;
    }

    saida(quantidade: number): void {
        if (quantidade <= 0) throw new Error("Quantidade de saída deve ser positiva.");
        if (quantidade > this.quantidade) throw new Error("Estoque insuficiente.");
        this.quantidade -= quantidade;
    }
}
