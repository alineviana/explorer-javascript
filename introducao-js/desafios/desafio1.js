/*

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

let numberOne = prompt("Digite o primeiro número: ");
let numberTwo = prompt("Digite o segundo número: ");
let sum = (Number((numberOne)) + Number(numberTwo));
let sub = (Number((numberOne)) - Number(numberTwo));
let multi = (Number((numberOne)) * Number(numberTwo));
let div = (Number((numberOne)) / Number(numberTwo));
let restDiv = (Number((numberOne)) % Number(numberTwo));


alert("A soma dos dois números é: " + sum);
alert("A subtração dos dois números é: " + sub);
alert("A multiplicação dos dois números é: " + multi);
alert("A divisão dos dois números é: " + div);
alert("O resto da divisão dos dois números é: " + restDiv);


if((Number((numberOne)) + Number(numberTwo)) % 2 === 0) {
    alert("A soma dos dois números é par!")
} else {
    alert("A soma dos dois números é ímpar!")
}

if((Number((numberOne)) === Number(numberTwo))) {
    alert("Os números inseridos são iguais!")
} else {
    alert("Os números inseridos são diferentes!")
}