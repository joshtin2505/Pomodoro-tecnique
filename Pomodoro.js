let horas = 7;
let minutos = 0;
let segundos = 0;
Segundo();
//Defino los segundos
function Segundo(){
    let txtSegundos;
    if (segundos < 0){
        segundos = 59;
    }

    //mostrar segundos
    if (segundos < 10){
        txtSegundos = `0${segundos}`;
    }
    else{
        txtSegundos = segundos;
    }
    document.getElementById("segundos").innerHTML = txtSegundos;
    segundos--;
    Minutos(segundos);
}
//defino los minutos
function Minutos(segundos) {
    let txtMinutos;
    if (segundos == -1 && minutos !== 0){
        setTimeout(()=>{
            minutos--;
        },500)
    }
    else if(segundos == -1 && minutos == 0){
        setTimeout(()=>{
            minutos = 59;
        },500)
    }

    if (minutos < 10) {
        txtMinutos = `0${minutos}`;
    }
    else{
        txtMinutos = minutos;
    }
    document.getElementById("minutos").innerHTML = txtMinutos;
    Horas(segundos,minutos);
}

function Horas(segundos,minutos) {
    let txtHoras;
    if(segundos == -1 && minutos == 0 && horas!== 0){
        setTimeout(()=>{
            horas--;
        },500)
    }
    else if(segundos == -1 && minutos == 0 && horas == 0){
        setTimeout(()=>{
            horas = 2;
        },500)
    }

    if (horas < 10) {
        txtHoras = `0${horas}`;
    }
    else{
        txtHoras = horas;
    }
    document.getElementById("horas").innerHTML = txtHoras;
}
//ejecuto segundos
setInterval(Segundo, 1000)