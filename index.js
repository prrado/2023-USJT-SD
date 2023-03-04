// function demorada(){
//     const atualMais2Segundos = new Date().getTime()+2000;

//     // Loop até que os 2 segundos sejam atingidos para que a loop termine
//     while(new Date().getTime() <= atualMais2Segundos);
//     const d = 8+4 
//     return d 
// }

// const a = 2 + 3
// const b = 5 + 9

// // setTimeout joga a função para o final do código
// setTimeout(function(){

//     const d = demorada()
//     console.log(d)
// },0)

// const e = 2 + a + b
// console.log(e)

// setTimeout(function(){
//     console.log("Dentro do time out")
// },0)
// const a = new Date().getTime() + 2000
// while(new Date().getDate<=a);

// console.log("Fora do time out")

// ?
const fs = require("fs");
const abrirArquivo = function (nomeArquivo){
    const exibirConteudo = function(erro, conteudo){
        if(erro){
            console.log("Deu erro:" + erro)
        }else{
            console.log(conteudo.toString());
        }
    };
    fs.readFile(nomeArquivo,exibirConteudo)
}
abrirArquivo("arquivo.txt");