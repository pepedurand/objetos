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


function oferecerSeguro(objeto) {
    const propsClientes = Object.keys(objeto)
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de segura para ${objeto.nome}`)
    }
}

console.log(Object.values(cliente))
oferecerSeguro (cliente)

//let gmail = "webpedro@gmail.com"
//if (gmail.includes("@" && ".com")) {
//    console.log("Email presta")
//} else {
//    console.log("Email não presta")
//}
