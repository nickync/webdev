

function conversion() {
    let num = document.getElementById("inputNumber").value
    let meter = (num/3.281).toPrecision(5)
    let feet = (num * 3.281).toPrecision(5)
    let liter = (num*3.785).toPrecision(5)
    let gallon = (num/3.785).toPrecision(5)
    let kilogram = (num/2.205).toPrecision(5)
    let pounds = (num * 2.205).toPrecision(5)
    document.getElementById("meter").textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
    document.getElementById("volumn").textContent = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters`
    document.getElementById("mass").textContent = `${num} kilograms = ${pounds} pounds | ${num} pounds = ${kilogram} kilograms `
   
}

