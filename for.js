// for que equivale a um while
// // VARIAVEIS DE CONTADOR SAO MAIS USADAS E POR CONVENÇÃO i j ou k para identifica-los
// // usar while quando vamos repetir código.

//  let i = 1;

// while (i <= 10) {
//      console.log(i);
//      i++;
// }

// console.log("-----------------------")

// // agora em for
// //o mesmo resultado em menos linhas e mais identado para entendimento
// // usar contadores, a resposta é FOR

// for (let i = 1; i <= 10; i++) {
//     for ( let j = 10; j>0; j--){
//         console.log(i, j);
//     }   
// }

// for on e for in
//

let lista = ["maicon", "jose", "isabela", "maradona", "mamae"];

for(let item in lista){
    console.log(item);
}

console.log("------------------");

//  FOR OF faz com que a variavel interna assuma um VALOR DOS indices da lista a cada execução
for(let item of lista){
    console.log(item);
}

// obs: o resto dos exemplos de for estao no github da estacaohack5 feitos pelo prof Renan como explicação
