let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber



alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicado: ' + multi)
alert('Divisão: ' + div)
alert('Porcentagem: ' + restDiv)


let n = sum
let total=n/2;
if(n%2 == 0){
	alert("A soma dos dois números é par");
}else{
	alert("A soma dos dois números é ímpar");
}

if (firstNumber === secondNumber){
	alert("Os dois números são identicos")
}else {
	alert("Os dois números são diferentes")
}