function formatMoney(value){
    value = Math.ceil(value * 100) / 100 //arredonda o valor para mais
    value = value.toFixed(2) //fixa o valor decimal em 2 casas
    return '$ ' + value
}

function formatSplit(value){ //retorna person quando 1 pessoa e people quando mais pessoas
    if (value == 1) return value + ' person'
    return value + ' people'
}

function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split) 
    document.getElementById('billEach').innerHTML = formatMoney(billEach)

}