function carrega() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = '_images/morning.png'
        document.body.style.background = '#154878'
        
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = '_images/afternoon.png'
    } else {
        //Boa noite!
        img.src = '_images/night.png'
        document.body.style.background = '#212115'
    }
}