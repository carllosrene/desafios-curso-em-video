function convert() {
    let currencyValue = document.querySelector('#currency_value').value
    let result = document.querySelector('.result')
    let currency01 = document.querySelector('#currency_01')
    let currency02 = document.querySelector('#currency_02')

    let option = currency01.options[currency01.selectedIndex].text
    let option02 = currency02.options[currency02.selectedIndex].text

    if (currencyValue == '') {
        alert('[ERRO] Insira o valor que deseja converter.')
    } else if (option == 'Real' && option02 == 'Dólar') { // Verifica qual opção de moeda foi selecionada e executa a conversão da moeda
        let convertedValue = currencyValue / 5.55 // Cotação dólar dia 19/04/2021

        result.innerHTML = `R$${Number(currencyValue).toFixed(2).replace('.', ',')} reais equivale à $${convertedValue.toFixed(2).replace('.', ',')} dólares.`
        result.style.border = '3px dotted black'
    } else if (option == 'Dólar' && option02 == 'Real') {
        let convertedValue2 = currencyValue * 5.55 // Cotação dólar dia 19/04/2021

        result.innerHTML = `$${Number(currencyValue).toFixed(2).replace('.', ',')} dólares equivale à R$${convertedValue2.toFixed(2).replace('.', ',')} reais.`
        result.style.border = '3px dotted black'
    } else {
        alert('[ERRO] Selecione moedas diferentes!!')
    }
}