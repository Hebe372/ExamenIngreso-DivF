function mostrar()
{
	function mostrar()
{
let nombre;
let obraSocial;
let edad;
let temperaruta;
let sexo;
let precio = 600;
let contPersonasOsde = 0;
let minEdad;
let minNombre;
let minTemperatura;
let contPasajerosOtras = 0;
let contPasajerosOsde = 0;
let contPasajerosPami = 0;
let totalPasajeros;
let precioFinal;
let seguir;
flag = 1;
	

	do{

		nombre = prompt("Ingrese nombre: ");
    	while(!isNaN(nombre)){
        nombre = prompt("Error. Ingrese nombre: ");
    	}

		obraSocial=prompt("Ingrese el tipo de producto (PAMI - OSDE - OTRAS): ").toLocaleUpperCase;
		while(obraSocial !="PAMI" && obraSocial != "OSDE" && obraSocial != "OTRAS"){
			tipo=prompt("Error. Ingrese el tipo de producto (PAMI - OSDE - OTRAS): ").toLocaleUpperCase;
    	}
		edad = parseInt(prompt("Ingrese la edad "));
    	while(isNaN(edad) || edad < 17){
        edad = parseInt(prompt("Error. Ingrese la edad "));
    	}

		temperatura = parseFloat(prompt("Ingrese la temperatura "));
    	while(temperatura <=0 || isNan(temperatura)){
        temperatura = parseFloat(prompt("Error. Ingrese la temperatura "))
    	}

		sexo = prompt("Ingrese el sexo (f - m)").toLocaleLowerCase();
		while(sexo != "m" && sexo != "f"){
		sexo = prompt("Error. Ingrese el sexo (f - m)".toLocaleLowerCase());
		}

		// a) La cantidad de personas con OSDE de mas de 60 años.
		if(obraSocial == "OSDE" && edad > 60){
			contPersonasOsde++;
		}

	// b) el nombre y temperatura de la mujer PAMI mas joven.
	if(obraSocial == "PAMI" && (flag || edad<minEdad)){
		minEdad = edad;
		minTemperatura = temperaruta;
		minNombre = nombre;
		flag = 0;
	}

		switch(obraSocial){
		case "PAMI":
		contPasajerosPami++;
		break;
		case "OSDE":
		contPasajerosOsde++;
		break;
		case "OTRAS":
		contPasajerosOtras++;
		break;
		}

	// d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, 
	//el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

	seguir = prompt("Desea continuar (s/n)? ");
	} while(seguir == "s");

// a) La cantidad de personas con OSDE de mas de 60 años.
console.log ("La cantidad de personas con OSDE de mas de 60 años" + contPersonasOsde);

// b) el nombre y temperatura de la mujer PAMI mas joven.
console.log("el nombre y temperatura de la mujer PAMI mas joven es " + minNombre + " y " + minTemperatura + " ° ");

// c) cuanto sale el viaje total sin descuento.
totalPasajeros = contPasajerosPami + contPasajerosOsde + contPasajerosOtras
console.log ("El viaje total sin descuento cuesta $ " + totalPasajeros * precio);

// d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, 
//el precio final tiene un descuento del 25%, que solo mostramos si corresponde.


if((totalPasajeros /2) < contPasajerosPami){
	precioFinal = (precio * 0,5);

}
console.log("El precio final para pasajeros con PAMI es $ " + precioFinal);

}//FIN DE LA FUNCIÓN
}
