function sorteio(minimo, maximo) {
    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return aleatorio; 
}



let lista = ["jooj","jiij","juuj","jaaj","jeej"];


let i = 0;
while ( i < 10){
    console.log(lista[sorteio(0, lista.length-1)]); //esse sorteio na lista pega um indice da mesma de forma aleatoria
    i++;
}
  

// outro jeito de escrever função 
// Arrow Function
// const sorteio = (minimo=0, maximo=10) => {
//     return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
// }


// let numero1 = Math.floor(Math.random() * 11);
// let numero2 = Math.floor(Math.random() * 51);
// let numero3 = Math.floor(Math.random() * 22) + 15 ; //um numero entre 15 e 35 tem 22 numeros, no final soma +15 pois começa no 15

