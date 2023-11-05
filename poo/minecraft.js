// Classe PAI
class Bloco{

    //Atributos
    constructor(textura, resistencia){
        this.textura = textura;
        this.resistencia = resistencia;
    }

    //Métodos
    criarBloco(){
        console.log("----------------------------");
        console.log("Bloco criado");
        console.log(`Textura de ${this.textura}`);
        console.log(`Resistência: ${this.resistencia}`);
    }

    colocar(){
        console.log(`~ Bloco de ${this.textura} colocado ~`);
    }

    minerar(){
        console.log("~ Minerando ~");
    }
}

//Classe FILHA
class Enxada extends Bloco{

    //Atributos
    constructor(textura, resistencia, coletado){
        super(textura, resistencia);
        this.coletado = coletado;
    }

    //Métodos
    defender(){
        console.log(`~ Defendido com enxada de ${this.textura} ~`);
    }

    //Polimorfismo
    minerar(){
        console.log(`~ Ataque com enxada de ${this.textura} ~`);
    }
}

// ####################### MUNDO DO MINECRAFT ###########################

console.clear();
