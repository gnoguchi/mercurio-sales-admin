const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OperacaoSchema = mongoose.model('Operacao',
    {
        tipo: { type: String, required: true },
        produto: { type: Schema.ObjectId, required: true },
        quantidade: { type: Number, required: true },
        data: { type: Number, required: true }
    }
)