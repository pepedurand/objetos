function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar= function(valor){
        this.saldo += valor
    }
}

function ClientePoupança(nome, cpf, email, saldo, saldoPoupanca) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoupanca = saldoPoupanca
}

const ju = new ClientePoupança('Ju', '333333333', 'ju@gmail.com', 100, 200)
const andre = new Cliente('Andre', '11111111', 'andre@gmail.com', 100)
console.log (ju)
console.log (andre)

ClientePoupança.prototype.depositarPoupanca = function(valor) {
    this.saldoPoupanca += valor
}

ju.depositarPoupanca(30)
console.log(ju.saldoPoupanca)