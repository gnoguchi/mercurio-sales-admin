const OperacaoSchema = require('../model/operacaoSchema')
const ProdutoSchema = require('../model/produtoSchema')

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
    }
    // consultarMaisVendidos: (req, res) => {
    //     console.log('bateu');
    //     OperacaoSchema.find({ tipo: 'venda' }).sort('-quantidade')
    //         .limit(5).exec((err, resultado) => {
    //             if (err) {
    //                 return res.send(err)
    //             }
    //             let resposta = []
    //             for (maisVendido in resultado) {

    //                 ProdutoSchema.findById(maisVendido.produto, (err, produto) => {
    //                     if (err) {
    //                         return res.send(err)
    //                     }

    //                     this.resposta.push({
    //                         nome: produto.nome,
    //                         descricao: produto.descricao,
    //                         valorProduto: produto.valor,
    //                         quantidadeVendido: maisVendido.quantidade
    //                     })

    //                 })
    //             }

    //             res.send(resposta)


    //         })
    // }
}