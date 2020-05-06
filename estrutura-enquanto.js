/* 
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite a quantidade de vezes que será verificado a idade: ")
   leia (limite)
   contador := 0
   enquanto contador < limite faca
            escreva("Digite o nome da pessoa: ")
            leia(nome)
            escreva("Digite a idade do ", nome, ": ")
            leia (idade)
            
            se idade >= 18 entao
               escreval(nome, " você é maior de idade!")
            senao
               escreval(nome, " você é menor de idade")
            fimse
            contador := contador + 1
   fimenquanto


Fimalgoritmo
*/
var nome, idade, limite, contador

function acaoBotao() {
    

    limite = prompt(" Digite a quantidade de vezes que será verificado a idade: ")
    contador = 0
    while(contador < limite){
        nome = prompt(" Digite o nome da pessoa: ")
        idade = prompt(" Digite a idade do " + nome + ":")
        if(idade >= 18)
            alert(nome + " é maior de idade")
            //prompt(nome + " é maior de idade")
        else
            alert(nome + " é menor de idade")
           // document.getElementById("p1").innerText = nome + " Você é menor de idade "
        contador++
    }
}