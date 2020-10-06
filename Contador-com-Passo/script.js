function checar() {
    let start = document.querySelector('input#ini') //recebendo valor do formulário HTML via querySelector
    let end = document.querySelector('input#fim')
    let pass = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if (start.value.length == 0 || pass.value.length == 0 || end.value.length == 0) { //Fazendo uma verificação simples para ver se os dados foram preenchidos e não permitir dados vazios
        window.alert('ERRO: Verify the data and try again')
    } else {
        res.innerHTML = `Contando...`
        let s = Number(start.value) //Criando uma variável para converter o valor da variável inicial de String para Number
        let p = Number(pass.value)
        let e = Number(end.value)
        if (p <= 0) {
            window.alert('Invalid pass. Considered pass 1')

        }
        if (s < e) { //contagem progressiva

            for (let c = s; c <= e; c += p) { // Criando o contador. var c recebe valor de var s. Faz o teste lógico e depois o incremento.
                res.innerHTML += ` ${c}\uD83D\uDE00`
            }

        } else { // fazendo contagem regressiva
            for (let c = s; c >= e; c -= p) { // criando um for com a variavel contadora. Enquanto o contador for menor que o valor final, ela faz o valor do contador menos o valor do passo
                res.innerHTML += ` ${c}\uD83D\uDE00`
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }
}