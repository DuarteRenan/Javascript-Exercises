function pega(num) {
    // var salvo =  document.querySelector('input#result').value
    document.querySelector('input#result').value += num
}

function reset() {
    document.querySelector('input#result').value = ""
}

function valor() {
    let resultado = eval(document.querySelector('input#result').value)
    document.querySelector('input#result').value = resultado
}