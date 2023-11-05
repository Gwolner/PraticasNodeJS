/**
 * Funções sem passagem de parâmetros
 */

console.clear();

//Função 1
function func1(){
    console.log("Função 1 OK!");
}

func1();


//Função 2 
const func2 = function(){ 
    console.log("Função 2 OK!");
}

func2();


//Função 3
const func3 = () => {
    console.log("Função 3 OK!");
}

func3();


//Função 4
const func4 = _ => (console.log("Função 4 OK!"));

func4();