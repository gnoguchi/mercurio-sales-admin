const OperacaoSchema = require('../model/operacaoSchema')
const ProdutoSchema = require('../model/produtoSchema')
const produtos = require('./produtos')

module.exports = {
    comprarProdutos: (req, res) => {
        const compra = new OperacaoSchema(req.body)
        compra.tipo = 'compra'

        compra.save((err, resultado) => {
            if (err) {
                return res.send(err, 500)
            }
            ProdutoSchema.findById(req.body.produto, (err, produto) => {
                if (err) {
                    return res.send(err, 500)
                }
                let quantidadeSomada = produto.quantidade
                quantidadeSomada += req.body.quantidade

                ProdutoSchema.update(req.body.produto, { $set: { quantidade: quantidadeSomada } }, (err, produtoAtualizado) => {
                    if (err) {
                        res.send(err, 500)
                    }
                    return res.send('Compŕa computada com sucesso!', 201)

                })
            })
            return res.send('Produto não cadastrado na base', 403)
        })
    },

    venderProdutos: (req, res) => {
        const venda = new OperacaoSchema(req.body)
        venda.tipo = 'venda'

        venda.save((err, resultado) => {
            if (err) {
                return res.send(err, 500)
            }
            ProdutoSchema.findById(req.body.produto, (err, produto) => {
                if (err) {
                    return res.send(err, 500)
                }
                let quantidadeSubtraida = produto.quantidade
                quantidadeSubtraida -= req.body.quantidade

                ProdutoSchema.update(req.body.produto, { $set: { quantidade: quantidadeSubtraida } }, (err, produtoAtualizado) => {
                    if (err) {
                        res.send(err, 500)
                    }
                    return res.send('Venda computada com sucesso!', 201)

                })
            })
            return res.send('Produto não cadastrado na base', 403)

        })
    }

}