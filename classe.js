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

const pedro = new Cliente('Pedro', 'pedro@gmail.com', '11111111', 10000)
pedro.exibirSaldo()
console.log(pedro)