const contagem = document.querySelector('div#contagem')
var n = 1
var intervalo;
var limpa = document.querySelector('p#press')

function soma1() {
  contagem.innerHTML += `${n++}, `
}

function mouseDown() {
  intervalo = setInterval(soma1, 500)
  limpa.style.opacity = `0`
}

function mouseUp() {
  clearInterval(intervalo)
  limpa.style.opacity = `100`
}

function limpar() {
  contagem.innerHTML = ``
  n = 1
}
