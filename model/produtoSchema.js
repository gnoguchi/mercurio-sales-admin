const mongoose = require('mongoose')

const produtoSchema = mongoose.model('Produto',
    {
        nome: { type: String, required: true },
        descricao: String,
        quantidade: Number,
        valor: { type: Number, required: true }
    }
)

module.exports = produtoSchema;