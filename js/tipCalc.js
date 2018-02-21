document.getElementById('calc').onchange = function () {
    var bill = Number(document.getElementById('billTotal').value),
        tipPercent = Number(document.getElementById('tipInput').value),
        split = Number(document.getElementById('splitInput').value),
        tipValue = bill * (tipPercent / 100),
        newBillEach = (bill + tipValue) / split,
        tipEach = tipValue / split;
    
    document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2) + " (Inc. tip)";
    document.getElementById('tipEach').innerHTML = "$" + tipEach.toFixed(2);
};