function on(){
    document.getElementById("lamp").src="on.png";
}

function off(){
    document.getElementById("lamp").src="off.png";
}

function blink(){
    var intervalo = 0;
    var contador = 0;

    while(contador < 10){
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='on.png';",intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src='off.png';",intervalo);
        contador++
    }

}