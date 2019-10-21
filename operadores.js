/**
 * = operador de atribuição
 * == operador de comparação de valor
 * === operador de comparação de valor e de type
 */

const a =  1
const b = "1"

console.log(a === b)

/**
 * ! operador de negação
 */

const variavelBoolean = true
console.log(!variavelBoolean === true)


if(!variavelBoolean){
    console.log("Entrou no if")
}else{
    console.log("Entrou no else")
}

/**
 * Os seguintes valores são sempre falsos :

    false
    0 (zero)
    ''ou ""(string vazia)
    null
    undefined
    NaN
 * 
    OS seguintes valores são sempre verdadeiros:
    '0' (uma sequência contendo um único zero)
    'false' (uma sequência que contém o texto "false")
    [] (uma matriz vazia)
    {} (um objeto vazio)
    function(){} (uma função "vazia")
 */
const valorObject = undefined// {}// { nomeAtributo: "Valor Atributo"}
console.log(!!valorObject)


/**
 * + soma / converte um valor de string para number
 * -
 * *
 * /
 * %
 * 
 */

const result = 12 % 5
console.log(result)


const resultEquacao = 2 * (5 + 2)
console.log(resultEquacao)  

const numero = "sssss10"

console.log(typeof +numero)

console.log(parseInt(numero))

const funcao1 = function(){

}

console.log(typeof funcao1)