//acessa o mongoose
const mongoose = require('mongoose');
//cria uma const schema
const UserSchema = mongoose.model('user',{
  nome: {type: String, required: true},
  renda: {type: String, required: true},
  email: {type: String, required: true},
  senha: {type: String, required: true},
  adm: false,
  emprestimos: []
});
//exporta como um modulo o UserSchema.
module.exports = UserSchema;
