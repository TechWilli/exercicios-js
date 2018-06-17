//ADIVINHE O NUMERO
//
//criar uma variavel com um numero entre 0 e 50;
//
//criar um prompt para que o usuario tente adivinhar o numero
//se ele acertou, dar os parabens e encerrar;
//se for numero baixo, responder que é MAIOR;
//se for numero alto, responder que é MENOR ;
//
//EXTRA: pesquisar codigo para gerar numero secreto aleatoriamente.




//Math.floor(Math.random() * 50) esse codigo gera numeros aleatorios entre 0 e 50
let numero = Math.floor(Math.random() * 50);
let chances = 1;
console.log(numero);
let palpite = 25; //"palpite inicial"

alert("vamos adivinhar seu numero. \nVocê tem 10 chances");

while (palpite !==numero && chances <= 10) {
    
    let palpite = prompt("Qual seu palpite?");
    
    if (palpite > numero) {
        alert("O numero é MENOR!");
    }
    else if (palpite < numero) {
        alert("O numero é MAIOR!");
    }
    else {
        alert("Você acertou, mizeravi");
        chances = 10;
    }
    chances++;
}

alert("Quer tentar a sorte de novo em uma nova rodada? aperte F5");



