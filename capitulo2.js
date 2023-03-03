// //Uma pessoa que se chama João e que tem 17 anos
// //Objeto JSON: Javascript Object Notation 
// const pessoa = {
//     nome: "João",
//     idade: 17
// }

// //Operador de acessos a membro: .
// console.log(pessoa.nome)
// //Operador []
// console.log("Tenho "+pessoa["idade"]+ " anos.")


// const pessoa = {
//     nome:"Maria",
//     idade:21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121
//     }
// }

// console.log(pessoa.endereco.logradouro)
// console.log(pessoa.endereco.numero)


const conc = {
    cnpj: 5573823,
    endereco:{
        logradouro: "Rua X",
        numero: 3,
        CEP: 04567
    },
    carros:[
        {
            marca:'Ford',
            modelo:'Ecosport',
            anoFab:2018
        },
        {
            marca:'Chevrolet',
            modelo:'Onix',
            anoFab:2020
        },
        {
            marca:'Volks',
            modelo:'Nivus',
            anoFab: 2020
        }
    ]
       
}
console.log(conc.carros[0].marca, conc.carros[0].anoFab, conc.carros[0].modelo)

for(let i=0; i<conc.carros.length; i++){
    console.log(conc.carros[i].anoFab)
    console.log(conc.carros[i].marca)
    console.log(conc.carros[i].modelo)
}


