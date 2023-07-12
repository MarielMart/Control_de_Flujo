function businessHours(dayNumber, hourNumber)

function getDayNumber(janFirstDayNumber, yearDayNumber)


// Parte 3
// Instrucciones: cree una función que, a partir de yearDayNumber (int, 0-365) y hourNumber (int, 0-23), devuelva true si es en horario comercial.

function horarioComercial(yearDayNumber, hourNumber) {
    let day= getDayNumber(0, yearDayNumber);
    return businessHours(day, hourNumber);
}

console.log(
    horarioComercial(78,17)
);