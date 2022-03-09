const cliente = {
    nome: 'Pedro',
    idade: 25,
    cpf: '111111111',
    email: 'webpedro@gmail.com',
    fones: ["3333333", "555555555"],
    dependentes: [
    {
        nome: 'sara',
        relação: 'filha',
        idade: 12
    },
    {  
        nome: "Joao",
        relação: 'irmão',
        idade: 23
    }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log (cliente.saldo)
cliente.depositar(30)
console.log (cliente.saldo)