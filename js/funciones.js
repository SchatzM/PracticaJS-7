'use strict';
/**
 * Práctica 10
 * Clases y Herencias
 * Brian Passos
 */

 // Clase principal
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
