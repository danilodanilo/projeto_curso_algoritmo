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