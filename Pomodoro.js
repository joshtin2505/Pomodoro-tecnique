let segundos = 5;
let minutos = 70;
let horas = 0;

function Segundos() {
    
    document.getElementById('segundos').innerHTML = segundos < 10 
        ? `0${segundos}`
        : segundos;
    

    if (segundos == 0 && minutos == 0 && horas == 0){
        clearInterval(time);   
    }
    else if (segundos == 0 && minutos > 0){
        minutos--;
        segundos = 59;
    }
    else if (segundos == 0 && minutos == 0 && horas > 0){
        horas--;
        minutos = 59;
        segundos = 59;
    }
    else {
        segundos--;
    }

    document.getElementById('minutos').innerHTML = minutos < 10
        //si minutos < 0 entonces se cumplira esta condicion
        ? `0${minutos}`
        //sino esta
        : minutos;

    document.getElementById('horas').innerHTML = horas < 10
        ? `0${horas}`
        : horas;
}

const time = setInterval(Segundos,1000);
//almaseno el set interval dentro de una constante para despues 
//poder pasar un clear interval dentro de la funcion con el parametro 
//del nombre de la constante, demodo que el contador se detenga



//poner la equivalencia de 60 min == 1h