let num = document.querySelector('#input_number')
let numberList = document.querySelector('#number_list')
let result = document.querySelector('#result')

let listValue = []
let randomNumbers = []
let score = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 60) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addNumber() {
    if (isNumber(num.value) && !inList(num.value, listValue)) {
        listValue.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado.`
        numberList.appendChild(item)

        if (listValue.length == 6) {
            let buttonAdd = document.querySelector('.btn_add')
            buttonAdd.disabled = true
            num.disabled = true
            result.innerHTML = `6 números adicionados. Clique em finalizar para verificar o sorteio!`
        }

    } else {
        alert('[ERRO] Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (listValue.length == 0 || listValue.length < 6) {
        alert('[ERRO] Lista vazia ou incompleta!')
    } else {
        for (let i = 0; i < 6; i++) {
            let randomNumber = Math.floor(Math.random() * 60) + 1
            randomNumbers.push(randomNumber)

            if (randomNumbers.indexOf(randomNumber) == -1) {
                randomNumbers.push(randomNumber)
            } else if (randomNumbers.indexOf(listValue[i]) > -1) {
                score.push(listValue[i])
            }
        }

        if (score.length === 6) {
            result.innerHTML = `<p>Você ganhou! Todos os números estão corretos!</p>`
            result.innerHTML += `<p>Seus números: ${listValue}</p>`
            result.innerHTML += `<p>Números sorteados: ${listValue}</p>`

        } else {
            result.innerHTML = `<p>Você acertou ${score.length} números.</p>`
            result.innerHTML += `<p>Números adicionados: ${listValue}</p>`
            result.innerHTML += `<p>Números sorteados: ${randomNumbers}</p>`

            let buttonFinish = document.querySelector('.btn_finish')
            buttonFinish.disabled = true

            result.innerHTML += `<button class="btn_tryAgain" type="button" onclick="location.reload()">Tentar Novamente</button>`

            console.log(listValue)
            console.log(randomNumbers)
            console.log(score)
        }
    }
}

num.focus()