const OperacaoSchema = require('../model/operacaoSchema')
const ProdutoSchema = require('../model/produtoSchema')

module.exports = {
    comprarProdutos: (req, res) => {
        const compra = new OperacaoSchema(req.body)
        compra.tipo = 'compra'
        compra.data = Date.now()

        compra.save((err, resultado) => {

            ProdutoSchema.findById(req.body.produto, (err, produto) => {

                if (produto) {
                    let quantidadeSomada = produto.quantidade
                    quantidadeSomada += req.body.quantidade

                    ProdutoSchema.update(req.body.produto, { $set: { quantidade: quantidadeSomada } }, (err, produtoAtualizado) => {
                        if (err) {
                            res.send(err, 500)
                        }
                        return res.send('Compra computada com sucesso!', 201)

                    })
                } else {
                    return res.send('Produto não cadastrado na base', 403)
                }
            })
        })
    },

    venderProdutos: (req, res) => {
        const venda = new OperacaoSchema(req.body)
        venda.tipo = 'venda'
        venda.data = Date.now()

        venda.save((err, resultado) => {

            ProdutoSchema.findById(req.body.produto, (err, produto) => {

                if (produto) {
                    let quantidadeSubtraida = produto.quantidade
                    quantidadeSubtraida -= req.body.quantidade

                    ProdutoSchema.update(req.body.produto, { $set: { quantidade: quantidadeSubtraida } }, (err, produtoAtualizado) => {
                        if (err) {
                            res.send(err, 500)
                        }
                        return res.send('Venda computada com sucesso!', 201)

                    })
                } else {
                    return res.send('Produto não cadastrado na base', 403)
                }
            })

        })
    }

}