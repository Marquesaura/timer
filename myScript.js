let segundos = 0
let intervalo;

function formatar(segundos){
    const h = String(Math.floor(segundos/3600));
    const m = String(Math.floor((segundos % 3600)/60));
    const s = String(segundos % 60);
    return `${h}:${m}:${s}`;
}
function atualizarTimer(){
    document.getElementById("timer").innerText = formatar(segundos);
}
function iniciar(){
    if(!intervalo){
        intervalo = setInterval(() =>{
            segundos++;
            atualizarTimer();
        }, 1000)
    }
}