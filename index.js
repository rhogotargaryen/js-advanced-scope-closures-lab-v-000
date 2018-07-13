function produceDrivingRange(range) {
    return function(x, y) {
        let a = parseInt(x.slice(0, 2))
        let b = parseInt(y.slice(0, 2))
        let c = Math.abs(a - b)
        return range >= c ? `within range by ${Math.abs(c - range)}` : `${Math.abs(c - range)} blocks out of range`
    }
}

function produceTipCalculator(tipPerc) {
    return function (bill) {
        return bill * tipPerc
    }
}