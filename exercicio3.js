//Desenhar uma escadinha no console usando console.log();
//Perguntar ao usuário o tamanho da escadinha;
//
//EXTRA: perguntar tambem ao usuario qual o caractere (material) para construir a escadinha
//
//ex: com @ # $ & ect..
//
//

let tamanho = Number(prompt("qual o tamanho da escadinha?"));
let material = prompt("qual o material da escada?");
let escadinha = "";
let contador = 0;

while (contador < tamanho) {
    escadinha = escadinha + material;
    console.log(escadinha);
    contador++;
}