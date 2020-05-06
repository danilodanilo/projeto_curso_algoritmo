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