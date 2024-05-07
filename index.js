function formatMoney(value) {
    value = Math.ceil(value * 100) / 100; //arredonda o valor para mais
    value = value.toFixed(2); //fixa o valor decimal em 2 casas
    return '$ ' + value;
}

function formatSplit(value) { //retorna person quando 1 pessoa e people quando mais pessoas
    if (value == 1) {
        return value + ' person';
    }

    return value + ' people';
}

function update() {
    let bill = Number(document.getElementById('your_bill').value);
    let tip_percent = document.getElementById('tip_input').value;
    let split = document.getElementById('split_input').value;

    let tip_value = bill * (tip_percent / 100);
    let bill_total = bill + tip_value;
    let bill_each = bill_total / split;

    document.getElementById('tip_percent').innerHTML = tip_percent + ' %';
    document.getElementById('tip_value').innerHTML = formatMoney(tip_value);
    document.getElementById('total_with_tip').innerHTML = formatMoney(bill_total);
    document.getElementById('split_value').innerHTML = formatSplit(split);
    document.getElementById('bill_each').innerHTML = formatMoney(bill_each);
}