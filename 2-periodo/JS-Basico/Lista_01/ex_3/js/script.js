//Exercicio 03
/*
Crie uma página web capaz de solicitar ao usuário o nome completo dele. Em seguida, peça a ele para informar a idade. 
Por último, informe-o, através de uma mensagem de diálogo, se ele já possui idade suficiente para tirar carteira de motorista.
Utilize o formato para exibir a mensagem final: 
FULANO, você já POSSUI idade para tirar carteira ou FULANO, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) X anos. 
*/

let nome = prompt("Digite seu nome completo:");

if (nome != null && nome != "") {
    let idade = Number(prompt("Digite a sua idade:"));

    if (idade != null && idade != "") {
        if (idade >= 18)
            alert(`${nome.toUpperCase()}, você já POSSUI idade para tirar carteira.`);
        else
            alert(`${nome.toUpperCase()}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18 - idade} anos.`);
    }

} else {
    alert("Digite o seu nome!");
}