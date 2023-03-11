//Criação de uma promise pendente  
function calculoDemorado(numero){
    return new Promise (function(resolve,reject){
        let res = 0
        for(let i=1; i<=numero; i++){
            res +=i;
        }
        resolve(res)
    })
}
calculoDemorado(10).then((resultado)=> {
    console.log(resultado)
})


// Criação de uma promise completa
function calculoRapido(numero){
    return Promise.resolve((numero * (numero + 1))/2)
}
calculoRapido(10).then((resultado)=>{
    console.log(resultado)
})


// Criação de uma promise com situação rejeitada
function calculoComVerificacao(numero){
    return numero > 0 
        ?Promise.resolve((numero*numero+1)/2)
        :Promise.reject("Utilize valores positívos")
}

// Primeiro teste
calculoComVerificacao(10).then((resultado)=>{
    console.log(resultado)
})
.catch((erro)=>{
    console.log(erro)
})

// Segundo teste
calculoComVerificacao(-10)
.then((resultado)=>{
    console.log(resultado)
})
.catch((erro)=>{
    console.log(erro)
})