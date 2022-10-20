/*
    Prototype
    * prototype-based language
    * prototype chain
    * __proto__

 */

// splice, length


// Type Conversion(typecasting) vs Type Coersion
// Alteração de um tipo de dado para outro tipo 

console.log('9' + 5) // concatenação 95 - type coersion

console.log(Number('9') + 5) // 14 - type conversion


// Manipulando Strings e Números

// Transformar string em número e número em string
let string = "123";
console.log(Number(string)); // 123

let number = 321;
console.log(String(number)); // 321 como String

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length); // 14

let number = 1234;
console.log(String(number).length); // 4

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 435.3342356;
console.log(number.toFixed(2).replace(".", ",")); // 435,33

// Transforme letras minúsculas em maiúsculas e vice-versa
let word = "Programar é muito bacana!";
console.log(word.toUpperCase()); // PROGRAMAR É MUITO BACANA!
console.log(word.toLowerCase()); // programar é muito bacana!

// Separe um texto que contem espaçoes em um novo array onde cada texto é uma posição do array.
// Depois disso transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver a vida!"
let myArray = phrase.split(" ");
console.log(myArray); // [ 'Eu', 'quero', 'viver', 'a', 'vida!' ]

let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore); // Eu_quero_viver_a_vida!

// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor")); // false

// Criar um array com construtor
let myArray = new Array('a', 'b', 'c');
console.log(myArray); // [ 'a', 'b', 'c' ]

// Contar elementos de um array
console.log(["a", "b", "c"].length); // 3

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação";
console.log(Array.from(word)); 
/* [
  'm', 'a', 'n', 'i',
  'p', 'u', 'l', 'a',
  'ç', 'ã', 'o'
]
*/

// Manipulando arrays

let techs = ["html", "css", "js"]
// add um item no fim
techs.push("nodejs"); // [ 'html', 'css', 'js', 'nodejs' ]

// add no início
techs.unshift("sql"); // [ 'sql', 'html', 'css', 'js', 'nodejs' ]

// remover do fim
techs.pop(); // [ 'sql', 'html', 'css', 'js' ]

// remover do começo
techs.shift() // [ 'html', 'css', 'js' ]

// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3)) // [ 'css', 'js' ]

// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1) // [ 'html', 'js' ]

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs);

/* 

    new
    * left-hand-side expression
    * criar um novo objeto

*/
let name = new String('Aline');
name.surName = "Viana";
let age = new Number(26);
console.log(name.surName, age); // Viana [Number: 26]


// Operadores unários | typeOf, delete
const person = {
    name: 'Mayk',
    age: 25
}

delete person.age
console.log(person); // { name: 'Mayk' }

/*
    Operadores Aritméticos
    * Soma
    * Subtração
    * Multiplicação
    * Divisão
    
    * Resto da divisão
    * Incremento
    * Decremento
    * Exponencial
*/

// Soma
console.log(3+3);

// Subtração
console.log(9-3);

// Multiplicação
console.log(3.2*2);

// Divisão
console.log(12/2);

// Resto da divisão
console.log(15%2);

// Incremento
let increment = 0;
increment++
console.log(increment);

// Decremento
let decrement = 7;
decrement--
console.log(decrement);

// Exponencial
console.log(3**3);


// Grouping operator ()
let total = (2 + 3) * 5
console.log(total);


// Operadores de Comparação
// Irá comparar valores e retornar um boolean como resposta da comparação

// == igual a 
let one = 1;
let two = 2; 

console.log( two == 1 ); // false
console.log( one == "1" ); // true

// != diferente de 
console.log(one != two); // true
console.log(one != 1); // false
console.log(one != "1"); // false

// === estritamente igual a 
console.log(one === "1"); // false
console.log(one === 1); // true

// estritamente diferente de 
console.log(two !== "2"); // true
console.log(two !== 2); // false

// > Maior que  
console.log(one > two); // false

// <= Maior ou igual a 
console.log(one >= 1); // true
console.log(two >= 1); // true

// < Menor que
console.log(one < two); // true

// <= Menor ou igual a 
console.log(one <= two); // true
console.log(one <= 1); // true
console.log(one <= 0); // false

// Operadores de atribuição
let x

// Assignment 
x = 1

// Addition assignment
x += 2

// Subtraction assignment
x -=1

// Multiplication assignment
x *= 2

// Division assignment
x /= 2

// remainder, exponetiation
x %= 2 
x **=2

console.log(x);


// Operadores lógicos (logical operators)
// 2 valores booleanos quando verificados resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo); // true

// OR ||
console.log(pao || queijo); // true

// NOT !
console.log(!pao); // false


// Operador Condicional Ternário
// Dependendo da condição, podemos receber valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Café da manhã top
 let cafe = true
 let cake = false

 const niceBreakfast = cafe && cake ? 'Café top' : 'Café ruim';
 console.log(niceBreakfast);

 // Maior de 18 anos
 let age = 16;
 const canDrive = age >= 18 ? 'Can Drive' : 'Cannot drive';
 console.log(canDrive);


// String Operator
// Comparation
console.log('a' === 'a');

// Concatenation
// Retorna a união de duas strings
let alpha = 'alpha';
console.log(alpha + 'bet');

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
    false
    0
    -0
    ""
    null
    undefinde
    NaN
*/

console.log(true ? 'verdadeiro' : 'falso');

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(true ? 'verdadeiro' : 'false');


/* Operator precedence 
* grouping                         ( )
* negação e incremento             ! ++ --
* multiplicação e divisão          * /
* adição e subtração               + -
* relacional                       < <= > >=
* igualdade                        == !== === !==
* AND (lógico)                     &&
* OR  (lógico)                     ||
* condicional                      ? :
* assignment                       = += -= *=
*/

console.log(2 + 5 * 10);

console.log(3 > 2 && 2 > 1);