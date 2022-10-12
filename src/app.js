var scanf = require('scanf')

console.log("Ingresar Edad: ")
let age = scanf('%d')

isAdult = 18

if(isNaN(age))
    console.log('Debe introducir un numero valido')
else
    if (age >= isAdult)
        console.log("Puede Conducir")
    else
        console.log("No Puede Conducir")



