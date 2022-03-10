const clientes = [
    {
    nome: 'Pedro',
    idade: 25,
    cpf: '111111111',
    email: 'webpedro@gmail.com',
    fones: "3333333",
    dependentes: [{
        nome: 'Sara',
        parentesco: 'irma',
        idade: 15,
        }]
},
    {
    nome: 'Jaq',
    idade: 26,
    cpf: '2222222',
    email: 'jaq@gmail.com',
    fones: "4444444",
    dependentes: [{
        nome: 'carol',
        parentesco: 'irma',
        idade: 13,
        }]
    }
]

const listaDepedentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log (listaDepedentes)

//JSON.parse(): converte JSON para um objeto JavaScript;
//JSON.stringify(): converte um objeto JavaScript para o formato JSON.