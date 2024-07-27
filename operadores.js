/*
alguns principais operadores em JavaScript:


aritméticos
atribuição 
relacionais 
lógicos
ternário

*/

/*
RELACIONAIS

>
<
>=
<=
==
!=

*/

/* const operadores = {
    maiorQUE:  5 > 2, 
    menorQUE:  7 < 4,
    maiorOUigual: 8 >= 8,
    menorOUigual: 9 <= 7,
    igualQUE: 5 == 5,
    diferenteQUE: 4 != 4
};

// iterar através de cada chave-valor no objeto operadores
for (let key in operadores) { 
    // pegue o valor booleano da chave atual
    let value = operadores[key];

    // printe a chave, o valor (resultado booleano) e a operação correspondente

    console.log(`${key}: ${value} (${key.substring(0, key.length - 3)} ${key.substring(key.length - 3)})`);
}

*/

const operadores = { 
    maiorQUE: { num1: 5, num2: 2, op: '>'},
    menorQUE: { num1: 7, num2: 4, op: '<'},
    maiorOUigual: { num1: 8, num2: 8, op: '>='},
    menorOUigual: { num1: 9, num2: 7, op: '<='},
    igualQUE: { num1: 5, num2: 5, op: '=='},
    diferenteQUE: { num1: 4, num2: 4, op: '!='}
};

// Iterar através de cada chave-valor no objeto operadores

for (let chaves in operadores) { 
    // Pega o valor dos números e operadores da chave(key) atual 
    let {num1, num2, op} = operadores[chaves];
    // Pega o resultado booleano da chave(key) atual 
    let resultado = eval(`${num1} ${op} ${num2}`)

    console.log(`${num1} ${op} ${num2} = ${resultado} (${chaves}))`);
}

/*
Operadores de Identidade

5 == 5 -> true
5 == '5' -> true
5 === '5' -> false (mesmo valor, mas tipos diferentes)
5 === 5 -> true

*/

/*
Operadores Lógicos

! negação 
&& conjunção 
|| disjunção

NEGAÇÃO

!true = false
!false = true

CONJUNÇÃO

true && true -> true 
true && false -> false
false && true -> false
false && false -> false

DISJUNÇÃO

true || true -> true
true || false -> true
false || true -> true 
false || false -> false

> var a = 5
undefined
> var b = 8 
undefined
> a > b && b % 2 == 0
false
> a > b && b % 2 == 0
false
> a <= b || b / 2 == 2
true

OBS.: (Ordem de precedência)

1°: OPERADORES ARITMÉTICOS
2°: OPERADORES RELACIONAIS
3°: OPERADORES LÓGICOS

*/

// + Exemplos: 

var idade = 20
var estado = 'RJ'
var salário = 1800
var sexo = 'F'

idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
estado  == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
salário > 1500 && sexo != 'M' // o salário é acima de 1500 e não é homem? 

// Como solicitar input
// e printar o resultado?

// ORDEM DE PRECEDÊNCIA: 

// 1º ARITMÉTICOS:
// () ** / ... 
// 2º RELACIONAIS:
// > < >= ... 
// 3º LÓGICOS
// -> 3.1°: !
// -> 3.2°: &&
// -> 3.3°: ||


// OPERADOR TERNÁRIO: 

// teste ? true : false 
// média >= 7.0 ? "Aprovado" : "Reprovado"

var média = 5.5 
console.log(média > 7 ? 'APROVADO':'REPROVADO')
var média = 8 
console.log(média > 7 ? 'APROVADO':'REPROVADO')

var x = 8 
var res = x % 2 == 0 ? 5: 9
console.log(res)

var idade = 19 
var r = idade >= 18 ? 'MAIOR' : 'MENOR'
console.log(r)

