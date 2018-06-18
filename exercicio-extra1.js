// ao terminar os exercicios, ver se da pra substituir por algum for (tradicional, in, of) para praticar
// se der pra substituir, fazer aqui

// while exercicio escada transformado em for

let tamanho = Number(prompt("qual o tamanho da escada?"));
let material = prompt("qual o material da escada?");
let escadinha = "";

for (let i= 0; i < tamanho; i++) {
    escadinha = escadinha + material;    
    console.log(escadinha);
}