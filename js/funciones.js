'use strict';
/**
 * Práctica 10
 * Clases y Herencias
 * Brian Passos
 */

 // Clase principal (Padre)
class Microprocesador {
	constructor (
		fabricante = 'Desconocido',
		númeroNúcleos = 0,
		númeroHilos = 0,
		velocidadBase = 0,
		TDP = 0
	) {
		this.fabricante = fabricante;
		this.númeroNúcleos = númeroNúcleos;
		this.númeroHilos = númeroHilos;
		this.velocidadBase = velocidadBase;
		this.TDP = TDP;
	};

	// Primer método que devuelve un resumen con lo datos proporcionados
	resumen () {
		return	`Microprocesador ${this.fabricante} ${this.família}™ ${this.modelo}\n`+
				`========================================\n`+
				`Cantidad de núcleos:\t\t\t${this.númeroNúcleos}\n`+
				`Cantidad de hilos:\t\t\t\t${this.númeroHilos}\n`+
				`Frecuencia base del procesador:\t${this.velocidadBase} GHz\n`+
				`TDP:\t\t\t\t\t\t\t${this.TDP} W\n\n`;
	};
};

// Primera clase hija que hereda de la clase padre
class Intel extends Microprocesador {
	constructor (
		família = 'Desconocido',
		modelo = 'Sin nombre',
		númeroNúcleos = 0,
		númeroHilos = 0,
		velocidadBase = 0,
		TDP = 0,
		fabricante
	) {
		super (
			fabricante,
			númeroNúcleos,
			númeroHilos,
			velocidadBase,
			TDP
		);

		this.fabricante = 'Intel';
		this.família = família;
		this.modelo = modelo;
	};

	esHyperThreading () {
		return this.númeroHilos / this.númeroNúcleos == 2; // Dependiendo del resultado se considerea si posee la tecnología Hyper-Threading (dos hilos por núcleo)
	};

	esBloqueado () {
		return !this.modelo.includes('k'); // Si el modelo contiene una K en su nombre es que es un procesador desbloqueado (permite mayor control sobre su configuración)
	};
};

// Segunda clase hija que hereda de la clase padre
class AMD extends Microprocesador {
	constructor (
		família = 'Desconocida',
		modelo = 'Sin nombre',
		númeroNúcleos = 0,
		númeroHilos = 0,
		velocidadBase = 0,
		TDP = 0,
		fabricante
	) {
		super (
			fabricante,
			númeroNúcleos,
			númeroHilos,
			velocidadBase,
			TDP
		);

		this.família = família;
		this.modelo = modelo;
		this.fabricante = 'AMD';
	};
};

const síNo = (booleano) => {
	return booleano ? 'Sí' : 'No';
},
procesador1 = new Intel ('Core', '9900k', 8, 16, 3.6, 95),
procesador2 = new Intel ('Core', '3570', 4, 4, 3.4, 77),
procesador3 = new AMD ('Ryzen 9', '3900X', 12, 24, 3.8, 105);

console.info (procesador1.resumen());
console.info (procesador2.resumen());
console.info (procesador3.resumen());
console.info (`¿Tiene el procesador ${procesador1.modelo} Hyper-Threading?`,síNo(procesador1.esHyperThreading()));
console.info (`¿Es el procesador ${procesador1.modelo} del tipo bloqueado?`,síNo(procesador1.esBloqueado()));
console.info (`¿Y el procesador ${procesador2.modelo}?`,síNo(procesador2.esBloqueado()));
