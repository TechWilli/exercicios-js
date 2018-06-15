//elevador troll

let andar = 5;
let subindo = false;

//loop para executar a condição até satisfaze-la
while (andar !== 0) {
    alert(`Espera mais um pouco. andar atual: ${andar}`);
    
    if (andar === 1) {
        subindo = true;
    }

    if (andar === 5) {
        subindo = false;
    }

    if (subindo) {
        andar++;}
    else {
        andar--;
    }
  
}

alert("Pode sair, cara, tu já chegou!!!!");