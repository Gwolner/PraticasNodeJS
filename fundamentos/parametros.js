// *** Forma 1 com parâmetros ***
function vezes1(num1, num2){
    console.log(num1 * num2);    
}

vezes1(2,4);

// *** Forma 2 com parâmetros ***
const multiplicacao = function(num1, num2){
    console.log(num1 * num2);    
}

multiplicacao(5,4);

// *** Forma 3 com parâmetros ***
const mult = (num1, num2) => {
    console.log(num1 * num2);   
}

mult(3,7);

// *** Forma 4 com parâmetros ***
const resultado = (num1, num2) => (console.log(num1 * num2));

resultado(8,9);