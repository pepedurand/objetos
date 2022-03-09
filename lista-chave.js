const cliente = {
    nome: 'Pedro',
    idade: 25,
    cpf: '111111111',
    email: 'webpedro@gmail.com'
}

const chaves =['nome', 'idade', 'cpf', 'email']

//console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))