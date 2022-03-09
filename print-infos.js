const cliente = {
    nome: 'Pedro',
    idade: 25,
    cpf: '166666666',
    email: 'webpedrod@gmail.com'
}

console.log(`Meu email é ${cliente.email}`)
console.log(`Os 3 primeiros dígitos do cpf são: ${cliente.cpf.substring(0,3)}`)