let product = document.querySelector('.product_input')
let price = document.querySelector('.price_input')
let result = document.querySelector('.result')

function calculate() {
    if (product.value == '' && price.value == '') {
        alert('Por favor, digite o nome e preço do produto.')
    } else {
        let discount = price.value / 10
        let final_price = price.value - discount

        result.innerHTML = `<h2>Calculando desconto de 10% para ${product.value}</h2>`
        result.innerHTML += `<p>O preço original era R$${Number(price.value).toFixed(2).replace('.', ',')}</p>`
        result.innerHTML += `<p>Você acaba de ganhar R$${discount.toFixed(2).replace('.', ',')} de desconto (-10%).</p>`
        result.innerHTML += `<p>No fim, você vai pagar R$${final_price.toFixed(2).replace('.', ',')} no produto <strong>${product.value}</strong>.</p>`

        product.value = ''
        price.value = ''
        product.focus()
    }
}