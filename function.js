function cal_tax(income, tax_percent) { // define function (parameters)
    let tax = income * (tax_percent/100)
    //console.log(tax);
    return {tax:tax, num:12};
}

let cal_tax2 = (income, tax_percent) => { // es6 function, arrow function
    let tax = income * (tax_percent/100)
    //console.log(tax);
    return tax;
}

function printHello(n) {
    // loop
    for(let i=0; i<n; i++) {
        console.log("hello");
    }
}

let result1 = cal_tax(800000, 7); // call function (arguments)
let result2 = cal_tax(200000, 3);
let result3 = cal_tax2(1000000, 5);
printHello(4);

console.log(result1["tax"]);
//total_tax = result1+result2+result3
//console.log(total_tax);