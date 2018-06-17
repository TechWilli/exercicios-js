//exercicio sobre empréstimo
//criar um programa que avalia uma proposta de emprestimo:
//o programa recebe idade do cliente, salario e valor do emprestimo;
//REGRAS PARA ACEITAR O EMPRESTIMO:
//idade entre 22 e 55 anos;
//valor a partit de 1000 reais;
//valor nao pode ultrapassar 15x o salario mensal;
//responder: aceita ou nao no final
//
//EXTRA:
//perguntar tambem a qualtidade de parcelas (entre 3 e 20) e calcular juros de 8% ao mes (compsoto)
//responder valor total do emprestimo e valor da parcela.

// obs: \n quebra linha

alert(" 'BANCO DA MOEDA' ")

let nome= prompt("Qual seu nome?");

alert(`Bem vindo, ${nome}! \n\nVamos saber se o pedido de empréstimo feito é válido. \nInsira alguns dados, por favor:`)


let idade = Number(prompt("Qual a sua idade? \n(IDADE ACEITÁVEL ENTRE 21 E 55 ANOS)"));
let salario = Number(prompt("Qual seu salário?"));
let emprestimo = Number(prompt("Qual o valor do empréstimo desejado?"));
let parcela = Number(prompt("Qual o número de parcelas que você deseja? \nParcelas devem ser entre 3 e 20."));
let limiteEmprestimo = salario * 15
let totalParcela

if ((idade > 20 && idade < 56) && (salario >= 1000) && (emprestimo <= limiteEmprestimo) && (parcela >=3 && parcela <=20)) {
    
    let resposta = prompt("Deseja calcular em juros simples ou composto? \nDigite: \n1- Para calcular Juros Simples \n2- Para culcular Juros Composto");

    switch (resposta){
        
        case "1":
    
        alert("Vamos calcular seu Juros Simples...");
    
        let jurosSimples = emprestimo + (emprestimo * 0.08 * parcela);
        
        totalParcela = jurosSimples / parcela
        alert(`O total do empréstimo com JUROS de 8% ao mês é: \nR$${jurosSimples} \n\nVocê pagará em ${parcela} vezes de: \nR$${totalParcela}`);
        alert("Muito obrigado!");    
        break;
        
        case "2":
    
        alert("Vamos calcular seu Juros Composto...");
    
        let jurosComposto = emprestimo * Math.pow((1+0.08), parcela);
        
        totalParcela = jurosComposto / parcela
        alert(`O total do empréstimo com JUROS de 8% ao mês é: \nR$${jurosComposto.toFixed(2)} \n\nVocê pagará em ${parcela} vezes de: \nR$${totalParcela.toFixed(2)}`);
        alert("Muito obrigado!");
    
        break;
    
        default:
        alert("OPS! \nResposta inicial inválida. Você nao escolheu entre juros simples ou composto. \nNão podemos calcular seu empréstimo \n\nTente novamente");
    
    }

}
else {
        alert("OPS! Ocorreu um erro. O que pode ter acontecido: \n\n1- Sua idade nao satisfaz as condições; \n2- Seu salário é menor que R$1000,00; \n3- O valor do seu empréstimo é maior do que você pode pagar; \n4- As parcelas para empréstimo não condizem com nossa política");
        alert("Você pode calcular seu empréstimo novamente, caso suas informações tenham sido inválidas. \nTCHAAAAAAAU");
    }



   

 