/*
Var
// Seção de Declarações das variáveis 
   resultado, valor01, valor02, valor03: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Entre com os 3 valores")
   leia(valor01)
   leia(valor02)
   leia(valor03)
  // resultado := (valor01 - valor02) / valor03
  //resultado := (valor01 + valor02) * valor03
  resultado := ((valor01 + valor02 + valor02) / valor03) % 2
   escreva("Resultado", resultado)
*/
var resultado, valor01, valor02, valor03;

valor01 = 10
valor02 = 10
valor03 = 10

resultado = ((valor01 + valor02 + valor02) / valor03) % 2
alert("Resultado: " + resultado);