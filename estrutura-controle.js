/*
   escreva("Digite o Nome do aluno: ")
   leia(nome)
   escreva("Informa a nota da P1: ")
   leia(nota01)
   escreva("Informa a nota da P2: ")
   leia(nota02)
   media := (nota01 + nota02) / 2
   escreval("A media foi: ", media)
   
   se media >= 5 entao
      escreval("Aluno Aprovado ", nome)
   senao
      escreval("Aluno Reprovado ")
   fimse
*/

var nome, nota01, nota02, media;
nome = prompt("Digite o nome do aluno: ");
nota01 = prompt("Digite a nota 1");
nota02 = prompt("Digite a nota 2");
media = (parseInt(nota01) + parseInt(nota02))/2;
if(media >= 5)
    alert("Aprovado!" + nome);
else
    alert("Reprovado!" + nome)
