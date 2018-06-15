//exercicio sobre empréstimo

let idade = Number(prompt("Qual a a sua idade?"));


if (idade < 21) {
    alert("Você nao tem idade suficiente para emprestimo");
}
else if (idade > 55) {
    alert("voce é muito velho para emprestimo");
}
else if (idade > 21 && idade < 55); {
    alert("Voce pode fazer um emprestimo.");
    let salario = Number(prompt("Qual seu salario?"));
    let maxEmprest = salario * 15;
    let dinehiro = Number(prompt("Qual o valor do emprestimo?"));
}

alert("tente quando for mais velho");