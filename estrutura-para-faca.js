/*
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      escreva("Digite um número para o calcúlo do fatorial")
      leia(numero)
      resultado := 1
      para i de 1 ate numero faca
           resultado := resultado * i
      fimpara
      escreva("O fatorial de ", numero, "é: ", resultado)
Fimalgoritmo
*/
function acaoBotao() {
    var numero, resultado
    numero = prompt("Digite um número para o calcúlo do fatorial: ")
    resultado = 1
    for(var i=1; i <= numero; i++){
        resultado = resultado * i
    }
    document.getElementById("p1").innerText = "O fatorial de" + numero + " é: " + resultado
   
    
}