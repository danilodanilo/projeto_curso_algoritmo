/* 
Var
// Seção de Declarações das variáveis 
   valor1, valor2, resultado: real;
   operacao: caractere;
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

       escreva("Entre um numero: ")
       leia(valor1)
       escreva("Entre com outro numero: ")
       leia(valor2)
       escreva("Digite a operacao. Ex +, -, *, /")
       leia(operacao)
       
       se operacao = "+" entao
          resultado := valor1 + valor2
       senao
          se operacao = "-" entao
          resultado := valor1 - valor2
          senao
               se operacao = "*" entao
                  resultado := valor1 * valor2
                senao
                     se operacao = "/" entao
                     resultado := valor1 / valor2
                     fimse
                fimse
          fimse
       fimse
       
       escreva("resultado = ", resultado)
*/

function acaoBotao() {
    var valor1, valor2, resultado, operacao
    valor1 = prompt("Digite o primeiro numero: ")
    valor2 = prompt("Digite o segundo numero: ")
    operacao = prompt("Digite a operacao. Ex +, -, *, / ")

    switch(operacao){
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
            
    }

/*
    if (operacao == "+") {
        resultado = parseInt(valor1) + parseInt(valor2)
        
    }else if(operacao == "-"){
        resultado = parseInt(valor1)  - parseInt(valor2)
    }else if(operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
    }else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }
*/

    document.getElementById("p1").innerText = resultado
}