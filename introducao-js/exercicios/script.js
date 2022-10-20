// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a varíavel acima?
console.log(typeof weight);

/*

3. Declare uma variável e atribua valores para cada um dos dados    
*name: String    
*age: Number (integer)    
*stars: Number(float)    
* isSubscribed: Boolean

*/

let name = 'Aline';
let age = 34;
let stars = 4.9;
let inSubscribed = true;

/*
4. A variável student abaixo é de qual tipo de dados?
4.1 Atribua a ela as mesmas propriedades e valores do exercício 3
4.2 Mostre no console a seguinte mensagem:

<name> de idade <age> pesa <weight> kg.

Atenção, substitua <name>, <age> e <weight> pelos valores de cada objeto

*/

// tipo de dado: object
let student = {
    name: 'Aline', 
    age: 34,
    weight: 62
} 

console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.weight} kg.`)


// 5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor
// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Inserir ele no array.)
// 7. Coloque no console o valor da posição zero do array acima
// 8. Crie um novo student e coloque na posição 1 do Array students

let students = [];
students = [
    student
];

console.log(students[0]);

const john = {
    name: 'John', 
    age: 36,
    weight: 82
}

students = [
    student,
    john
]

console.log(students[1]);


