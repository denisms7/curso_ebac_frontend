// EXERCICIO MODULO 24
// Crie uma classe de uma abstração;
// Crie pelo menos duas classes que sejam  herdeiras da classe criada anteriormente;
// Crie pelo menos três instâncias de objetos;


function Produto(nome, unidade, categoria) {
    this.nome = nome
    this.unidade = unidade
    this.categoria = categoria

    this.dados_produto = function() {
        console.log('Produto: ' + this.nome + ', Categoria: ' + this.categoria + ', Unidade: ' + this.unidade)
        console.log('_________________________________________')
    }
}

function Estoque(nome, unidade, categoria, quantidade) {
    Produto.call(this, nome, unidade, categoria)
    this.quantidade = quantidade

    this.dados_estoque = function() {
        console.log('Produto: ' + this.nome)
        console.log('Categoria: ' + this.categoria)
        console.log('Un: ' + this.unidade)
        console.log('Qnt: ' + this.quantidade)
        console.log('_________________________________________')
    }
}

function Entrada_Produto(nome, unidade, categoria, quantidade, fornecedor) {
    Estoque.call(this, nome, unidade, categoria, quantidade)
    this.fornecedor = fornecedor

    this.entrada_produto = function() {
        console.log('Produto: ' + this.nome)
        console.log('Categoria: ' + this.categoria)
        console.log('Un: ' + this.unidade)
        console.log('Qnt: ' + this.quantidade)
        console.log('Fornecedor: ' + this.fornecedor)
        console.log('_________________________________________')
    }
}


const produto1 = new Entrada_Produto('Abacaxi','un','Fruta', 150, 'Ceasa')
const produto2 = new Entrada_Produto('Tomate ','un','Fruta', 10, 'Ceasa')
const produto3 = new Entrada_Produto('Creme de Leite ','un','Creme', 50, 'MixCampeão - Atacado e Distribuidor')

produto1.entrada_produto()
produto2.entrada_produto()
produto3.entrada_produto()