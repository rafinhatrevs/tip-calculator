function formatMoney(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return '$ ' + value;
}

function formatSplit(value) {
    if (value == 1) {
        return value + ' person';
    }

    return value + ' people';
}

function update() {
    let bill = Number(document.getElementById('your-bill').value);
    let tipPercent = document.getElementById('tip-input').value;
    let split = document.getElementById('split-input').value;

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    document.getElementById('tip-percent').innerHTML = tipPercent + ' %';
    document.getElementById('tip-value').innerHTML = formatMoney(tipValue);
    document.getElementById('total-with-tip').innerHTML = formatMoney(billTotal);
    document.getElementById('split-value').innerHTML = formatSplit(split);
    document.getElementById('bill-each').innerHTML = formatMoney(billEach);
}
