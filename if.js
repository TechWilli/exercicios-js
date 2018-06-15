//saber a situação da nota

let nota = prompt("Qual foi a nota do aluno?");

nota = Number(nota);

if (isNaN(nota)) {
    alert("ERRO: VALOR INVÁLIDO");
}
else if (nota < 5) {
    alert("Você esta reprovado");
    }
else if (nota >= 7) {
    alert("Aprovado")
    }
else {
    alert("Exame (Recuperação)");
    }



//adicionar comentarios