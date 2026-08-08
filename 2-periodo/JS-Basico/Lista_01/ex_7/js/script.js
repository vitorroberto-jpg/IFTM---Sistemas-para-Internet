//Exercicio 07
/*
Construa uma página web capaz de solicitar ao usuário três valores numéricos diferentes, correspondentes aos valores RGB, nesta ordem. 
Informe na caixa de diálogo que cada valor deverá estar dentro do intervalo [0,255]. 
Após a leitura dos três valores, o texto “Fundamentos de Web Design II” deverá ser exibido ao usuário no corpo do documento da página 
com a cor informado pela usuário.  
*/
let RGB_1 = prompt("Digite o valor do primeiro componente RGB (0 a 255):");
let RGB_2 = prompt("Digite o valor do segundo componente RGB (0 a 255):");
let RGB_3 = prompt("Digite o valor do terceiro componente RGB (0 a 255):");

document.write(`<h3 style="color: rgb(${RGB_1}, ${RGB_2}, ${RGB_3})">Fundamentos de Web Design II</h3>`);