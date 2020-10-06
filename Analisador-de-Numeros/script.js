let op = document.querySelector('select#valor')
let num = document.querySelector('input#numero')
let res = document.querySelector('div#resultado')
var array = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){ //função is numero verifica se é um numero. o n é o parametro que receberá os valores da próxima função 
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
    if (isNumero(num.value) /*o num.value é o valor que será passado para a variável n criada na função. está sendo passado como parâmetro*/  && !inLista (num.value, array )) { // ele só adiciona se os dois forem TRUE.
        array.push(Number(num.value))
        let item = document.createElement('option') /*Criando o elemento option */
        item.text = `Valor ${num.value} adicionado`
        op.appendChild(item)
        res.innerHTML=``
    } else {
        window.alert('Valor invalido ou repetido')   
    }
    num.value = ''
    num.focus()
}

function contas() {
    if (array.length == 0) {
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