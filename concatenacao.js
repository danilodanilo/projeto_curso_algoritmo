/*
Var
// Seção de Declarações das variáveis 
        nome : caractere
        numero : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Informe o nome e número")
   leia(nome)
   leia(numero)
   
   escreval(nome, " : ", numero)
*/
var caractere, numero
nome = prompt("Digite o seu nome: ")
numero = prompt("Digite um numero: ")
document.getElementById("p1").innerText = nome + " : " + numero