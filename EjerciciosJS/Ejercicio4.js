//tarifas por hora
const tarifaDiurna = 12000;
const tarifaNocturna = 16000;
const incrementoDomingoDiurno = 2000;
const incrementoDomingoNocturno = 3000;

//empleado 1
const empleado1 = {
    nombre: "Empleado 1",
    diasTrabajo: [
        { dia: "Lunes", turno: "nocturno" },
        { dia: "Martes", turno: "nocturno" },
        { dia: "Miércoles", turno: "nocturno" },
        { dia: "Jueves", turno: "diurno" },
        { dia: "Viernes", turno: "diurno" }
    ],
    pagoDiario: [],
    totalSemanal: 0
};

//empleado 2
const empleado2 = {
    nombre: "Empleado 2",
    diasTrabajo: [
        { dia: "Martes", turno: "nocturno" },
        { dia: "Miércoles", turno: "nocturno" },
        { dia: "Jueves", turno: "nocturno" },
        { dia: "Domingo", turno: "diurno" }
    ],
    pagoDiario: [],
    totalSemanal: 0
};

//empleado 3
const empleado3 = {
    nombre: "Empleado 3",
    diasTrabajo: [
        { dia: "Miércoles", turno: "diurno" },
        { dia: "Jueves", turno: "diurno" },
        { dia: "Viernes", turno: "diurno" },
        { dia: "Sábado", turno: "nocturno" },
        { dia: "Domingo", turno: "nocturno" }
    ],
    pagoDiario: [],
    totalSemanal: 0
};

//función para calcular el pago de cada empleado
function calcularPago(empleado) {
    empleado.diasTrabajo.forEach(dia => {
        let pago = 0;
        if (dia.turno === "diurno") {
            if (dia.dia === "Domingo") {
                pago = (tarifaDiurna + incrementoDomingoDiurno) * 10; //diurno domingo con incremento
            } else {
                pago = tarifaDiurna * 10; // Diurno normal
            }
        } else if (dia.turno === "nocturno") {
            if (dia.dia === "Domingo") {
                pago = (tarifaNocturna + incrementoDomingoNocturno) * 10; //nocturno domingo con incremento
            } else {
                pago = tarifaNocturna * 10; //nocturno normal
            }
        }

        //añadir el pago diario a la lista de pagos diarios del empleado
        empleado.pagoDiario.push({ dia: dia.dia, pago: pago });
        empleado.totalSemanal += pago;
    });
}

//calcular el pago de cada empleado
calcularPago(empleado1);
calcularPago(empleado2);
calcularPago(empleado3);

//imprimir los resultados
console.log(empleado1);
console.log(empleado2);
console.log(empleado3);