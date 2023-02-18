const nomes = ["Ana","Antonio","Cristina","Alex","Rodrigo"]
//Filtrar nomes que começam com A 


const nomesComA = nomes.filter((n)=>n.startsWith("A"))
console.log(nomesComA)

const iniciais = nomes.map((nome)=>nome.charAt(0))
console.log(iniciais)

//Testa se todas as palavras do vetor começa com a letra A
const teste = nomes.every((nome)=>nome.startsWith("A"))
console.log(teste)


const numeros = [1,2,3,4,5]
var soma = 0
for(let i=0; i<numeros.length; i++){
    soma = soma + numeros[i]
}
console.log(soma)

//Soma o valor do index ja existente com o incremento i
const resultado = numeros.reduce((acum,atual)=>acum + atual)
console.log(resultado)

