const fmr = document.getElementById('fmr')
const resultado = document.getElementById('resultado')
let aa = document.getElementById('a')
let bb = document.getElementById('b')


function calcula(Aa, Bb) {
    return (parseInt(Aa) < parseInt(Bb))
}


function verifica(valor) {
    if (valor) {
        resultado.innerHTML = `OK<br>O valor A: ${aa.value} é menor que o valor B: ${bb.value}`
        resultado.className = 'msg-ok'
        resultado.style.display = 'block'
    } else {
        resultado.innerHTML = `ERRO<br>O valor A: ${aa.value} não é menor que o valor B: ${bb.value}<br>Tente novamente`
        resultado.className = 'msg-erro'
        resultado.style.display = 'block'
    }

}


function valida(campoA, campoB) {
    if (aa.value == '') {
        resultado.innerHTML = `AVISO<br>Informe o Campo A`
        resultado.className = 'msg-aviso'
        resultado.style.display = 'block'
        aa.focus()
        return false
    } if (bb.value == '') {
        resultado.innerHTML = `AVISO<br>Informe o Campo B`
        resultado.className = 'msg-aviso'
        resultado.style.display = 'block'
        bb.focus()
        return false
    } else {
        resultado.style.display = 'none'
        return true
    }
}


fmr.addEventListener('submit', function (e) {
    e.preventDefault()
    if (valida(aa.value, bb.value)) {
        verifica(calcula(aa.value, bb.value))
        aa.value = ''
        bb.value = ''
    }

})

