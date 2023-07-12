function getDayNumber(janFirstDayNumber, yearDayNumber){
    return (yearDayNumber+(yearDayNumber-1))%7;
}

console.log(getDayNumber(0,10));

// Instrucciones: Ahora, cree la función getDayNumber.Debe aceptar dos parámetros: janFirstDayNumber y yearDayNumber.
// El yearDayNumber será un int que va de 0 a 365.
// janFirstDayNumber será un int que va de 0 a 6, que representa el día de la semana del 1 de enero.
// Su función debe calcular y devolver el día de la semana correspondiente al añoDayNumber pasado.
// Sugerencia: use el operador restante (%), dividiendo su yearDayNumber por 7.