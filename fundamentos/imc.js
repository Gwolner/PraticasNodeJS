//Entrada de dados via terminal! 

const colors = require('colours');
const read = require('readline-sync');

console.clear();

console.log(" ___ __  __  ___ ");
console.log("|_ _|  \\/  |/ __|");
console.log(" | || |\\/| | (__ ");
console.log("|___|_|  |_|\\___|");
console.log("");

let nome = read.question("Digite seu nome: ");
let peso = Number(read.question("Digite seu peso (Kg): ").replace(",","."));
let altura = Number(read.question("Digite sua altura (m): ").replace(",","."));
let imc = peso/(altura*altura);

console.log("______________________________");
console.log(`${nome} está com IMC de ${imc.toFixed(2)}`);

let condicao;

if(imc < 0.5){
    condicao = "Abaixo do peso".cyan;
}else if(imc < 0.7){
    condicao = "Peso normal".green;
}else if(imc < 0.9){
    condicao = "Acima do peso".yellow;
}else if(imc < 1.1){
    condicao = "Obesidade I".yellow;
}else if(imc < 1.5){
    condicao = "Obesidade II (severa)".red;
}else{
    condicao = "Obesidade III (mórbida)".red.bold;
}

console.log(`O que significa que está com ${condicao}`);