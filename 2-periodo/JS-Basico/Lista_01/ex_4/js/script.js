//Exercicio 04
/*
Solicite ao usuário as notas do 1º e 2º bimestres e, em seguida, informe se ele foi aprovado/reprovado na disciplina. 
Um aluno será aprovado se a soma das notas for maior ou igual a 60,0 pontos. 
Caso ele tenha sido reprovado informe a quantidade de pontos faltantes para ele ter sido aprovado. 
*/

let nota1 = prompt("Informa a nota do 1 bimestre:");
let nota2 = prompt("Informe a note do 2 bimestre:");
let resultado = Number(nota1) + Number(nota2);

if (resultado >= 60)
    alert("Parabéns! Você foi aprovado.")
else
    alert(`Você não obteve a pontuação necessária para aprovação, faltaram ${60 - resultado} pontos.`);