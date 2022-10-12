let scanf = require('scanf')

console.log("Ingresar Edad: ")
let edad = scanf('%d')

if(Number(edad) === edad){
    if(edad >= 18){
        console.log("Puede Conducir")
    }else{
        console.log("No puede conducir. ")
    }
}else{
    console.log('Debe introducir un numero valido')
}