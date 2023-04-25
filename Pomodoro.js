let segundos = 0;
let minutos = 0;
let horas = 0;

//Debo reparar un error que da aqui NaN
let seg = document.getElementById('segundos').valueAsNumber;
    let min = document.getElementById('minutos').valueAsNumber;
    let hours = document.getElementById('horas').valueAsNumber;
    segundos = Number(seg);
    minutos = Number(min);
    horas = Number(hours);


function Segundos() {

    const time = setInterval(Segundos,1000);
    
    let pause = document.getElementById('pause');
    pause.addEventListener('click', function(){
        clearInterval(time);
    });
    
    let stop = document.getElementById('stop');
    stop.addEventListener('click', function(){
        segundos = 0; minutos = 0; horas = 0;
    });



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


//almaseno el set interval dentro de una constante para despues 
//poder pasar un clear interval dentro de la funcion con el parametro 
//del nombre de la constante, demodo que el contador se detenga



//poner la equivalencia de 60 min == 1h