function calc() {
    let start = document.querySelector('input#ini')
    let res = document.querySelector('select#tab')

    if (start.value.length == 0) {
        window.alert(`Insert a number`)
    } else {
        res.innerHTML = `` // antes de receber os dados e adicionar o resultado da tabuada, a variável recebe um valor limpo, em branco
        let n = Number(start.value)
        for (let c = 1; c <= 10; c++) {
            res.innerHTML += `<option value =${c}> ${c} x ${n} = ${c*n} <br></option>`

        }
    }

}