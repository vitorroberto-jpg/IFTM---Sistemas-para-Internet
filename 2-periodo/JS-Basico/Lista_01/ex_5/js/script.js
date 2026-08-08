//Exericio 05
/*
Construa uma página web capaz de solicitar ao usuário o nome completo dele e, em seguida, 
escreva no corpo do documento a quantidade de caracteres contida no nome informado. 
*/

let nomeContador = prompt("Digite seu nome completo:");
let contador = 0;

for (let i = 0; i < nomeContador.length; i++) {
    if (nomeContador[i] !== " ") {
        contador++;
    }
}
alert(`O seu nome contém ${contador} caracteres, desconsiderando espaços.`);