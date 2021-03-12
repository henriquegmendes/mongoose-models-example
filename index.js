const mongoose = require('mongoose');

const User = require('./models/User');
const Pet = require('./models/Pet');

const newUser = {
  name: 'He',
  email: 'henrique@henriqueee.com.br',
  password: '123456',
  birthDate: new Date(4, 20, 1988),
};

mongoose.connect('mongodb://localhost/pet-shop-database').then(() => {
  console.log('Conectado no banco de dados');

  Pet.find().populate('owner').then(pets => {
    console.log(pets)
  })

  User.create(newUser).then(() => console.log('Usuário criado!!!')).catch(e => console.log(e));

  // User.findOne({ email: 'henrique@henrique.com.br' }).then(user => {
  //   console.log(user);

  //   const newPet = {
  //     name: 'Kika',
  //     species: 'dog',
  //     owner: user._id,
  //   }

  //   Pet.create(newPet).then(() => {
  //     console.log('Novo pet criado!!!')
  //   }).catch(e => {
  //     console.log('Erro ao criar Pet ===> ', e);
  //   });
  // }).catch(err => {
  //   console.log('Erro ao Criar Usuario ===> ', err);
  // });

}).catch(error => {
  console.log(error);
});
