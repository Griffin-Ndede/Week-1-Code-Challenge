// input prompt for user to enter gross salary
// calculations of the paye(tax)
// calculations o NHIF deductions
// include NSSF deduction rate
//  final calculation of net salary
let gross =parseFloat(prompt("Enter your gross salary"));

let paye;
if (gross <= 24,000){
    paye = 10
}
else if(gross > 24,000 && gross <= 32,333){
    paye = 25
}else {
    paye = 30
}
let tax = (gross * (paye/100))

let nhif
if (gross <= 5,999){
    nhif =150
} else if(gross >= 6,000 && gross <= 7,999){
    nhif = 300
} else if (gross >= 8,000 && gross <= 11,999 ){
    nhif = 400
} else if (gross >= 12,000 && gross <= 14,999){
    nhif = 500
} else if (gross >= 15,000 && gross <= 19,999){
    nhif = 600
} else if (gross >= 20,000 && gross <= 24,999){
    nhif =750
} else if (gross >= 25,000 && gross <= 29,999){
    nhif = 850
} else if (gross >= 30,000 && gross <= 34,999){
    nhif = 900
} else if (gross >= 35,000 && gross <= 39,999){
    nhif = 950
} else if (gross >= 40,000 && gross <= 44,999){
    nhif = 1,000
} else if (gross >= 45,000 && gross <= 49,999){
    nhif = 1,100
} else if (gross >= 50,000 && gross <= 59,999){
    nhif = 1,200
} else if (gross >= 60,000 && gross <= 69,999){
    nhif = 1,300
} else if ( gross >= 70,000 && gross <= 79,999){
    nhif = 1,400
} else if ( gross >= 80,000 && gross <= 89,999){
    nhif = 1,500
} else if (gross >= 90,000 && gross <= 99,999){
    nhif = 1,600
} else if (gross >= 100,000){
    nhif = 1,700
}

nssf = 400

let netSalary = (gross - (tax + nhif + nssf));
console.log( "Net salary is: " + netSalary )
window.alert( "Your Net salary is:" + netSalary)