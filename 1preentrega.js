//calculador de cuotas con intereses

//funciones
function calcularinteres (cantidadcuotas) {
    let interes = 0

    switch (true){
        case (cantidadcuotas >= 18):
            interes = 0.30
            break;

        case (cantidadcuotas >= 12):
            interes = 0.20
            break;

        case (cantidadcuotas >= 6):
            interes = 0.10
            break;

        default:
            interes = 0
    }

    return interes;
}

function opciones (){
    return `Opciones de cuotas disponibles:\n
    1-6 cuotas: Sin interés (0%)\n
    7-12 cuotas: 10% de interés\n
    13-18 cuotas: 20% de interés\n
    Más de 18 cuotas: 30% de interés\n`;
}

//inicion del programa

alert (opciones ())
let montototal = prompt("ingrese el monto total:")
let cantidadcuotas = parseInt(prompt("ingrese la cantidad de cuotas que desea:"))
let interes = calcularinteres (cantidadcuotas)
let total = 0

// Ciclo para calcular el total con interés
for (let i = 1; i <= cantidadcuotas; i++) {
    total += (montototal / cantidadcuotas) + ((montototal / cantidadcuotas) * interes);
}

console.log(`El monto total a pagar en ${cantidadcuotas} cuotas es de: $ ${total.toFixed(2)} `);
console.log(`El monto de cada cuota es de: $ ${(total / cantidadcuotas).toFixed(2)} `);