let separador = "__________________________________";

console.log(`${separador} Nome`);

let nome = "Guilherme";
let sobrenome ="Wolner";
let ultimoNome = "Monte" 
let complemento = "Dias";


console.log(`${nome}`);
console.log(`${nome} ${sobrenome}`);
console.log(`${nome} ${sobrenome} ${complemento}`);
console.log(`${nome} ${sobrenome} ${complemento} ${ultimoNome}`);

let nomeCompleto = `${nome} ${sobrenome} ${complemento} ${ultimoNome}`;

console.log(`Nome: ${nomeCompleto}`);


console.log(`${separador} Sigla`);

let inicialNome = nome.replace(nome,"G");
let inicialSobrenome = sobrenome.replace(sobrenome,"W");
let inicialUltimoNome = ultimoNome.replace(ultimoNome,"M");
let inicialComplemnto = complemento.replace(complemento,"D");

console.log(`${inicialNome}`);
console.log(`${inicialNome}${inicialSobrenome}`);
console.log(`${inicialNome}${inicialSobrenome}${inicialComplemnto}`);
console.log(`${inicialNome}${inicialSobrenome}${inicialComplemnto}${inicialUltimoNome}`);

console.log(`Sigla: ${inicialNome}${inicialSobrenome}${inicialComplemnto}${inicialUltimoNome}`);

console.log(`${separador} Continua...`);