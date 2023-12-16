function horaAgora() {
    var P = window.document.getElementById('hora')
    var h = new Date().getHours().toString().padStart(2, '0')
    var m = String(new Date().getMinutes()).padStart(2, '0')
    P.innerText = `${h}:${m}`    
}

setInterval(horaAgora, 1000)