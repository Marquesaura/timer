function atualizarRelogio(){
    const agora = new Date();
    const horas = agora.getHours().toString();
    const minut = agora.getMinutes().toString();
    const segun = agora.getSeconds().toString();

    document.getElementById("relogio").innerText = `${horas}:${minut}:${segun}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();