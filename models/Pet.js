const { Schema, model, Types } = require('mongoose');

const petSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
  species: { type: String, required: true, enum: ['dog', 'cat', 'parrot'] },
  birthDate: { type: Date },
  owner: { type: Types.ObjectId, ref: 'User' }, // Referencia para o dono do PET (ID do dono que estiver gravada no banco)
},
{
  timestamps: true,
});

// Mongoose criar dentro do Mongo uma coleção de "Pets" que respeitem o Schema que declaramos na variável petSchema
const Pet = model('Pet', petSchema);

module.exports = Pet;
