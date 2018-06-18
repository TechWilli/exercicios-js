//Criar duas listas de script, uma com 5 meninos e outra com 5 meninas;
//ex: let meninos = [ "joao", "rafael", "jose", etc]
//
//Usar combinações de pares entre meninos e meninas
//
//USE o console.log() para mostrar todas as duplas possiveis entre meninos e meninas.
//
//
//
//
// usar while dentro de while nesse caso
//
let meninos = ["jose", "marcos", "moises", "pericles", "kazim"];
let meninas = ["leticia", "wanda", "carla", "rafaela", "rafaela"];
let i = 0;
let j = 0;
let numeroCasal = 1;

while (i < meninos.length) {
    j = 0;
    while (j < meninas.length) {
        console.log(`Casal ${numeroCasal}: ${meninos[i]} e ${meninas[j]}`);
        j++;
        numeroCasal++;
    }
    i++;
}
