/*
Var
// Seção de Declarações das variáveis 
      valor1, valor2: real
      sairLoop: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      repita
            escreval("Digite dois números para o calcúlo: ")
            leia(valor1)
            leia(valor2)
            escreval("Resultado: ", valor1 + valor2)
            escreval ("Digite S para para o programa")
            leia(sairLoop)
      ate sairLoop == "S"
            

Fimalgoritmo
*/



function acaoBotao() {
    var valor1, valor2, sairLoop

    
    contador = 0
    do{
        valor1 = prompt(" Digite um número: ")
        valor2 = prompt(" Digite outro número: ")
        document.getElementById("p1").innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2))
        sairLoop = prompt("Digite S para sair do programa")
    }while(sairLoop != "S")
}