let op = document.querySelector('select#valor')
let num = document.querySelector('input#numero')
let res = document.querySelector('div#resultado')
var array = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){ //
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1 ){ // se o valor for encontrado na lista, ou seja diferente de -1, ele faz a ação. TRUE
        return true
    }else{
        return false
    }
}


function adicionar() {
    if (num.value.length == 0 || num.value >= 101) {
        window.alert('Valor invalido ou repetido')
    } else {
        let n = Number(num.value)
        array.push(n)

        op.innerHTML += `<option>Numero ${n} adicionado <br></option>`
        res.innerHTML = ``
    }
}

function contas() {
    if (num.value.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        array.sort()
        let total = Number(array.length)
        let soma = 0
        for (let c in array) {
            soma += array[c++]
        }


        res.innerHTML = `O maior valor adicionado ${array[array.length-1]}<br>
                        O menor valor adicionado ${array[0]}<br>
                        Quantidade de Números adicionados ${total}<br>
                        A soma de todos os números ${soma}<br>
                        A média entre eles ${(soma/total).toFixed(2).replace('.',',')}<br>`                          
    }
}