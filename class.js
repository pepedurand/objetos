class Cliente{
    constructor(nome,email,cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}
class ClientePoupanca extends Cliente {
    constructor (nome,email,cpf, saldo,saldoPoupanca){
        super(nome,email,cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPopanca(valor){
        this.saldoPoupanca += valor
    }
}

const pedro = new ClientePoupanca ('Pedro', 'pedro@gmailc.ocm','2255222', 30000, 30000)
console.log(pedro)

pedro.depositar(30000)
pedro.depositarPopanca(30000)
console.log(pedro)