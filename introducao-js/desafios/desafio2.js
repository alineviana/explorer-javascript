/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
    {
        name: "Aline",
        testScore1: 10,
        testScore2: 9
    },
    {
        name: "Maria",
        testScore1: 8,
        testScore2: 9
    },
    {
        name: "João",
        testScore1: 5,
        testScore2: 4
    },
    {
        name: "Bruno",
        testScore1: 2,
        testScore2: 3
    },
]

function printMedia(student) {
       
    if((Number(student.testScore1) + Number(student.testScore2)) / 2 >= 7) {
        return `
        A média do(a) aluno(a) ${student.name} é: ${(Number(student.testScore1) + Number(student.testScore2)) / 2}.
        Parabéns ${student.name}! Você foi aprovado(a) no concurso.`

    } else {
        return `
        A média do(a) aluno(a) ${student.name} é: ${Number(student.testScore1) + (student.testScore2) / 2}.
        Não foi dessa vez, ${student.name}! Tente novamente!`
    }
}

for (let student of students) {
    let media = printMedia(student);
    alert(media);
}
