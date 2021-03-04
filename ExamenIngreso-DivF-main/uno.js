
function mostrar()
{
	function mostrar()

{
	let nombre;
	let tipo;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;
	let maxPrecio;
	let maxFabricante;
	let maxCategoria;
	let acumCantAlcohol = 0;
	let contCantAlcohol = 0;
	let contCantIac = 0;
	let acumCantIac = 0;
	let acumCantBactericida = 0;
	let contCantBactericida = 0;
	let contCantDetergente = 0;
	let acumCantDetergente = 0;
	let contCantDesinfectante = 0;
	let acumCantDesinfectante = 0;
	let contCantQuat = 0;
	let acumCantQuat = 0;
	let totalCompraBactericida;
	let totalCompraDesinfectante;
	let totalCompraDetergente;
	let contCantDetergenteMenos = 0;
	let contCantDetergenteMenos = 0;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	
	flag = 1;
	

	for(var i=1; i=5; i++){

		nombre = prompt("Ingrese nombre: ");
    	while(!isNaN(nombre)){
        nombre = prompt("Error. Ingrese nombre: ");
    	}
		
		tipo=prompt("Ingrese el tipo de producto (ALCOHOL - IAC - QUAT): ").toLocaleUpperCase;
		while(tipo !="ALCOHOL" && tipo!= "IAC" && tipo != "QUAT"){
			tipo=prompt("Error. Ingrese el tipo de producto (ALCOHOL - IAC - QUAT): ").toLocaleUpperCase;
		}

		precio=parseFloat(prompt("Ingrese el precio (entre 100 y 300): "));
		while(cantidad < 100 || cantidad > 300 || isNaN(precio)){
			precio=prompt("Error. Ingrese el precio (entre 100 y 300): ");
		}
		
		cantidad=parseInt(prompt("Ingrese la cantidad de unidades (entre 0 y 1000): "));
		while(!(cantidad > 0 && cantidad <= 1000)){
			cantidad=prompt("Error. Ingrese la cantidad de unidades (entre 0 y 1000): ");
		}

		categoria=prompt("Ingrese el tipo de producto (desinfectante - bactericida - detergente): ").toLocaleLowerCase;
		while(categoria !="desinfectante" && categoria != "bactericida" && categoria != "detergente"){
			categoria = prompt("Error. Ingrese el tipo de producto (ALCOHOL - IAC - QUAT): ").toLocaleLowerCase;
		}
		
		fabricante=prompt("Ingrese el fabricante: ");

		// a) El promedio de cantidad por tipo de producto

		switch(tipo){
			case "ALCOHOL":
				contCantAlcohol++;
				acumCantAlcohol += cantidad;
				break;
			case "IAC":
				contCantIAC++;
				acumCantIAC += cantidad;
				break;
			case "QUAT":
				contCantQuat++;
				acumCantQuat += cantidad;
				break;
		}
	// b) La categoria con mas cantidad de unidades en total de la compra
	switch(categoria){
		case "desinfectante":
			contCantDesinfectante++;
			acumCantDesinfectante += cantidad;
			totalCompraDesinfectante = precio * contCantDesinfectante;
			break;
		case "bactericida":
			contCantBactericida++;
			acumCantBactericida += cantidad;
			totalCompraBactericida = precio * contCantBactericida;
			break;
		case "detergente":
			contCantDetergente++;
			acumCantDetergente += cantidad;
			totalCompraDetergente = precio * contCantDetergente;
			break;
			
	}
	//c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
	if (categoria == detergente && precio <=200){
	contCantDetergenteMenos++;
	}
	//d) el fabricante y Categoria del más caro de los productos
	if(flag || precio>maxPrecio){
		maxPrecio = precio;
		maxFabricante = fabricante;
		maxCategoria = categoria;
		flag = 0;
	}
	}
	
	// a) El promedio de cantidad por tipo de producto
	if(contCantAlcohol != 0){
	promedioAlcohol = acumCantAlcohol/contCantAlcohol;
	}
	if(contCantIac != 0){
	promedioIac =acumCantIac/contCantIac;
	}
	if(contCantQuat != 0){
	promedioQuat = acumCantQuat/contCantQuat;
	}
console.log("El promedio de la cantidad de ALCOHOL es " + promedioAlcohol);
console.log("El promedio de la cantidad de IAC es " + promedioIac);
console.log("El promedio de la cantidad de QUAT es " + promedioQuat);

if(totalCompraDesinfectante>totalCompraBactericida && totalCompraDesinfectante>totalCompraDetergente){
	console.log ("La categoria con mas calidad de unidades en total de la compra es" + totalCompraDesinfectante);
}
if(totalCompraBactericida>totalCompraDesinfectante && totalCompraBactericida>totalCompraDetergente){
	console.log ("La categoria con mas calidad de unidades en total de la compra es" + totalCompraBactericida);
}
if(totalCompraDetergente>totalCompraBactericida && totalCompraDetergente>totalCompraDesinfectante){
	console.log ("La categoria con mas calidad de unidades en total de la compra es" + totalCompraDetergente);
}
//c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
console.log("unidades de detergente con precios menos a 200 (inclusive) se compraron en total " + contCantDetergenteMenos);


//d) el fabricante y Categoria del más caro de los productos
console.log("El producto mas caro, fabricante" + maxFabricante + "categoria " + maxCategoria);
}//FIN DE LA FUNCIÓN
}
