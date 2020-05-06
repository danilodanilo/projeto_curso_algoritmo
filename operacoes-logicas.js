var nome, nota01, nota02, media, passou=false;
nome = prompt("Digite o nome do aluno: ");
nota01 = prompt("Digite a nota 1");
nota02 = prompt("Digite a nota 2");
media = (parseInt(nota01) + parseInt(nota02))/2;
if(media >= 5)
    passou = true;

if (passou)
    alert("Aprovado" + nome)
else
    alert("Reprovado" + nome)
 