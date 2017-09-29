const OperacaoSchema = require('../model/operacaoSchema')
const ProdutoSchema = require('../model/produtoSchema')
const calculos = require('../functions/calculoOperacoes')

module.exports = {

    consultarMaisVendido: (req, res) => {
        OperacaoSchema.findOne({ tipo: 'venda' }).sort('-quantidade').exec((err, resultado) => {
            if (err) {
                return res.send(err)
            }

            ProdutoSchema.findById(resultado.produto, (err, produto) => {
                if (err) {
                    return res.send(err)
                }
                let resposta = {
                    nome: produto.nome,
                    descricao: produto.descricao,
                    valorProduto: produto.valor,
                    quantidadeVendido: resultado.quantidade
                }

                res.send(resposta, 200)
            })


        })
    },

    consultarMenosVendido: (req, res) => {
        OperacaoSchema.findOne({ tipo: 'venda' }).sort('quantidade').exec((err, resultado) => {
            if (err) {
                return res.send(err)
            }

            ProdutoSchema.findById(resultado.produto, (err, produto) => {
                if (err) {
                    return res.send(err)
                }
                let resposta = {
                    nome: produto.nome,
                    descricao: produto.descricao,
                    valorProduto: produto.valor,
                    quantidadeVendido: resultado.quantidade
                }

                res.send(resposta, 200)
            })

        })
    },

    consultarVendas: (req, res) => {
        OperacaoSchema.find({ tipo: 'venda' }, (err, vendas) => {
            if (err) {
                return res.send(err)
            }
            let resposta = []
            for (let i = 0; i < vendas.length; i++) {
                ProdutoSchema.find({ _id: vendas[i].produto }, (err, produtos) => {
                    resposta.push({
                        nome: produtos[0].nome,
                        descricao: produtos[0].descricao,
                        valorProduto: produtos[0].valor,
                        quantidadeVendido: vendas[i].quantidade
                    })
                    console.log(produtos);

                })
            }
            res.send(resposta, 200)
        })
    },

    quantidadeVenda: (req, res) => {
        OperacaoSchema.find({ tipo: 'venda' }, (err, vendas) => {
            let qtVendas = 0;

            if (err) {
                return res.send(err)
            }
            for (resultVendas of vendas) {

                qtVendas += resultVendas.quantidade
            }
            res.send(200, { qtTotal: qtVendas })

        })
    },

    quantidadeCompra: (req, res) => {
        OperacaoSchema.find({ tipo: 'compra' }, (err, compras) => {
            let qtCompras = 0;

            if (err) {
                return res.send(err)
            }
            for (resultCompras of compras) {

                qtCompras += resultCompras.quantidade
            }
            res.send(200, { qtTotal: qtCompras })

        })
    },

    valorTotalCompra: (req, res) => {
        OperacaoSchema.find({ tipo: 'compra' }, (err, compras) => {
            let valorCompras = 0;
            let valorProdutos = 0;

            if (err) {
                return res.send(err)
            }
            for (resultCompras of compras) {

                ProdutoSchema.find((err, produtos) => {
                    for (resultProdutos of produtos) {
                        valorProdutos += resultProdutos.valor
                    }
                    valorCompras = calculos.calcularValorOperacao(valorProdutos, resultCompras.quantidade)
                    res.send(200, { valorTotal: valorCompras })
                })
            }

        })
    },

    valorTotalVenda: (req, res) => {
        OperacaoSchema.find({ tipo: 'venda' }, (err, vendas) => {
            let valorVendas = 0;
            let valorProdutos = 0;
            if (err) {
                return res.send(err)
            }
            for (resultVendas of vendas) {

                ProdutoSchema.find((err, produtos) => {
                    for (resultProdutos of produtos) {
                        valorProdutos += resultProdutos.valor
                    }
                    valorVendas = calculos.calcularValorOperacao(valorProdutos, resultVendas.quantidade)
                    res.send(200, { valorTotal: valorVendas })
                })
            }

        })
    },

    listaVendas: (req, res) => {
        OperacaoSchema.find({ tipo: 'venda' }, (err, vendas) => {
            if (err) {
                return res.send(err)
            }

            res.send(vendas, 200)
        })
    },

    listaCompras: (req, res) => {
        OperacaoSchema.find({ tipo: 'compra' }, (err, compras) => {
            if (err) {
                return res.send(err)
            }

            res.send(compras, 200)
        })
    }
}