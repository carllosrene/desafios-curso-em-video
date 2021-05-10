let celsius = document.querySelector('.celsius'.replace(',', '.'))
let fahrenheit = Number(celsius.value) * 1.8 + 32
let kelvin = Number(celsius.value) + 273.15
let result = document.querySelector('.result')

function convert() {
    if (celsius.value == '') {
        alert('Por favor, digite um valor de temperatura!')
    } else {
        result.innerHTML = `<p><strong>A temperatura de ${celsius.value.replace('.', ',')}ºC, corresponde a...</strong></p>`
        result.innerHTML += `<p>${kelvin.toFixed(2).replace('.', ',')}ºK (Kelvin)</p>`
        result.innerHTML += `<p>${fahrenheit.toFixed(2).replace('.', ',')}ºF (Fahrenheit)</p>`
    }
    
    celsius.value = ''
    celsius.focus()
}