// Criar um aplicativo com frases motivacionais

// function statement
function createPhrases() {
    console.log('Estudar é muito bom!');
    console.log('Paciência e persistência!');
    console.log('Revisão é mãe do aprendizado!')
}

// execute, run, call, invoke
createPhrases();

console.log('Fim do programa!')


// function expression
// function anonymous

// parameters
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 34;
let number2 = 25;

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);

//example
function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + ' e ' + fruta2;
}

const copo = fazerSuco('banana', 'maçã');

console.log(copo);

//function scope
let subject = 'create video'
function createThinK(subject) {
    subject = 'study'
    return subject
}

console.log(subject);
console.log(createThinK(subject));


let fruit = "banana";
function getFruit(fruit) {
  fruit = "orange";
  return fruit
}

console.log(fruit); // banana
console.log(getFruit(fruit)); // orange


// function hoisting

sayMyName();

function sayMyName() {
    console.log('Aline');
}


// arrow function
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Aline');


// callback function 
function sayMyName (name) {
    console.log('Antes de executar a função callback')
    
    name()

    console.log('Depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

/*

Function() constructor

* expressão new
* criar um novo objeto
* this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const aline = new Person("Aline");
console.log(aline.walk()); // Aline está andando


