//Exercicio 01
/*
Construa uma página web capaz de solicitar em uma caixa primeiramente o primeiro nome do usuário e, em seguida, 
em uma segunda caixa o seu sobrenome. Por último, exiba em uma nova caixa seu nome completo da pessoa (nome + sobrenome).
Deverá haver um espaço em branco entre o primeiro nome e sobrenome. 
*/

let nome1 = prompt("Digite o seu primeiro nome:");
let sobrenome = null;

if (nome1 != null && nome1 != "")
    sobrenome = prompt("Digite o seu sobrenome:");
if (sobrenome != null && sobrenome != "")
    alert(`Seu nome completo é: ${nome1} ${sobrenome}`);
else
    alert("Você não digitou o seu nome completo!");