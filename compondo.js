const cliente = {
    nome: 'Pedro',
    idade: 25,
    cpf: '111111111',
    email: 'webpedro@gmail.com',
    fones: ["3333333", "555555555"]
}

cliente.dependentes = {
    nome: 'sara',
    relação: 'filha',
    idade: 12
}

cliente.dependentes.idade = 'Pedro Jr.'

console.log (cliente.dependentes.idade)
