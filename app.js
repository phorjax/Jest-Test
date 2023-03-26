const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInEuro * 127.9;
    //return the dollar value
    return valueInYen;
}

const fromEuroToPounds = function(valueInEuro){
    let valueInPounds = valueInEuro * 0.8;
    return valueInPounds;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPounds };