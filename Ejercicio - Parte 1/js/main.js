function businessHours(dayNumber, hourNumber){
if((dayNumber>=1) && (dayNumber<=5) && (hourNumber>=9) && (hourNumber<=18))
{ return true;
} else {
    return false;
}
}

// Instrucciones: Primero, cree una función llamada "businessHours". Similar al ejercicio de clase del día de la semana, esta función debe aceptar dos parámetros: dayNumber y hourNumber.
// Al leer dayNumber y hourNumber, su programa debe imprimir si es horario comercial o no. Debe devolver true si es horario comercial, y false si no.
// function businessHours(dayNumber, hourNumber)
// Obs: considere el horario comercial de 9 a.m. a 6 p.m. Utilice el sistema de reloj de 24 horas (6pm = 18).