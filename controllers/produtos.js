const ProdutoSchema = require('../model/produtoSchema')

module.exports = {
    listarTodos: (req, res) => {
        ProdutoSchema.find((err, produtos) => {
            if (err) {
                return res.send(err, 500)
            }
            res.send(produtos, 200)
        })
    },

    cadastrar: (req, res) => {
        let produto = new ProdutoSchema(req.body)

        produto.save((err, resultado) => {
            if (err) {
                return res.send(err, 500)
            }
            res.send(resultado, 201)
        })
    },

    listarPorId: (req, res) => {
        ProdutoSchema.findById(req.params.id, (err, produto) => {
            if (err) {
                return res.send(err, 500)
            }
            res.send(produto, 200)
        })
    },

    listarPorNome: (req, res) => {
        const regex = new RegExp(req.query.nome, 'i')
        ProdutoSchema.findOne({ nome: regex }, (err, produto) => {
            if (err) {
                return res.send(err, 500)
            }
            res.send(produto, 200)
        })
    },

    deletar: (req, res) => {
        ProdutoSchema.findByIdAndRemove(req.params.id, (err, resultado) => {
            if (err) {
                return res.send(err, 500)
            }
            res.send(resultado, 200)
        })
    },

    atualizar: (req, res) => {
        ProdutoSchema.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, resultado) => {
            if (err) {
                return res.send(err, 500)
            }
            return res.send(resultado, 200)
        })
    }

}