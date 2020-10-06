function checker() {
    //var date = new Date()       //metodo para pegar data atual do sistema, hora, ano etc
    var year = new Date().getFullYear() //fullyear pega o ano completo, os 4 dígitos
    var fyear = document.querySelector('input#yearofb')
    var res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year || fyear.value == 0) {
        window.alert('ERRO: Verify the data and try again')

    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value) // convertendo o valor entre parenteses para number, numero
        var genre = ''
        var img = document.createElement('img') //criando uma variável com o mesmo nome do elemento através de javascript
        img.setAttribute('id', 'pic') //criando atributo id com o nome pic, para o novo elemento img
        if (fsex[0].checked) {
            genre = 'Male'
            if (age >= 0 && age < 12) {
                //kid
                img.src = '_images/kidm.png'
            } else if (age < 21) {
                //teen
                img.setAttribute('src', '_images/teenm.png')
            } else if (age < 55) {
                //adult
                img.setAttribute('src', '_images/adultm.png')
            } else {
                //old
                img.setAttribute('src', '_images/oldm.png')
            }
        } else {
            genre = "Feminine"
            if (age >= 0 && age < 12) {
                //kid
                img.setAttribute('src', '_images/kidf.png')
            } else if (age < 21) {
                //teen
                img.setAttribute('src', '_images/teenf.png')
            } else if (age < 55) {
                //adult
                img.setAttribute('src', '_images/adultf.png')
            } else {
                //old
                img.setAttribute('src', '_images/oldf.png')
            }
        }
        res.style.textAlign = 'center' //forçando centralização
        res.innerHTML = `We detected a ${genre} with ${age} years old.`
        res.appendChild(img)
    }

}