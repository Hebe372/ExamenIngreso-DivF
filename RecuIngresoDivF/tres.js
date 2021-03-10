/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/

function mostrar()
{

let cliente;
let cantidad;
let marca;
let precio;
let seguir;
let ventas;
let acumTotalVentas = 0;
let porcentaje;
let descuento;
let acumDescuentoFelipeLamparas = 0;
let acumDescuentoArgentinaLuz = 0;
let descuentoTotal;
let contArgentinaLuz = 0;
let acumArgentinaLuz = 0;
let contFelipeLamparas = 0;
let acumFelipeLamparas = 0;
let contIlluminatis = 0;
let acumIlluminatis = 0;
let promFelipeLamparas = 0;
let promIlluminatis = 0;
let promArgentinaLuz = 0;




do{
    
    cliente = prompt("Ingrese el nombre del cliente");
    while(!isNaN(cliente)){
    cliente = prompt("Error. Ingrese el nombre del cliente");
}

    cantidad =  parseInt(prompt("Ingrese la cantidad de lamparas"));
    while(isNaN(cantidad) || cantidad <= 0){
    cantidad =  parseInt(prompt("Error. Ingrese la cantidad de lamparas"));
}

    marca = prompt("Ingrese la marca (FelipeLamparas - ArgentinaLuz - Illuminatis)");
	while(marca != "FelipeLamparas" && marca != "ArgentinaLuz" && marca != "Illuminatis"){
	marca = prompt("Error. Ingrese la marca (FelipeLamparas - ArgentinaLuz - Illuminatis)");
	}
    
    precio =  parseFloat(prompt("Ingrese el precio de lamparas"));
    while(isNaN(precio) || precio <= 0){
    precio =  parseFloat(prompt("Error. Ingrese el precio de lamparas"));
}
    
    //a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
    ventas = precio * cantidad;
    acumTotalVentas += ventas;
    
    
    //b) Cuanto "perdio" la empresa en concepto de descuentos.

	if(cantidad > 5 && marca == "FelipeLamparas"){
		porcentaje = 10;
		descuento = precio * porcentaje /100;
		acumDescuentoFelipeLamparas += descuento;
	} else if(cantidad >= 3 && marca == "ArgentinaLuz"){
		porcentaje = 5;
		descuento = precio * porcentaje /100;
		acumDescuentoArgentinaLuz += descuento;
	} else {
		porcentaje = 0;
	}
    
	//c) El promedio de la cantidad de lamparas vendidas de cada marca

	if(marca == "FelipeLamparas"){
		acumFelipeLamparas += cantidad;
		contFelipeLamparas++;
	} else if (marca == "ArgentinaLuz"){
		acumArgentinaLuz += cantidad;
		contArgentinaLuz++;
	} else {
		acumIlluminatis += cantidad;
		contIlluminatis++;
	}

	
    seguir = prompt("Desea ingresar otra venta (s/n)?");
} while(seguir == "s"); //FIN DO WHILE



console.log ("La recaudación en concepto de total de ventas es $ " + acumTotalVentas);


descuentoTotal = acumDescuentoArgentinaLuz + acumDescuentoFelipeLamparas;

console.log("Los descuentos en total suman $ " + descuentoTotal);
console.log("Las ventas totales netas de descuentos ascienden a $ " + (acumTotalVentas - descuentoTotal));

if(contArgentinaLuz != 0){
	promArgentinaLuz = acumArgentinaLuz/contArgentinaLuz;
	console.log("El promedio da la cantidad de lamparas vendidas ArgentinaLuz es " + promArgentinaLuz);
} else {
	console.log("No se vendieron lamparas ArgentinaLuz");
}

if(contFelipeLamparas != 0){
	promFelipeLamparas = acumFelipeLamparas/contFelipeLamparas;
	console.log("El promedio da la cantidad de lamparas vendidas FelipeLamparas es " + promFelipeLamparas);
} else {
	console.log("No se vendieron lamparas FelipeLamparas");
}

if(contIlluminatis != 0){
	promIlluminatis = acumIlluminatis/contIlluminatis;
	console.log("El promedio da la cantidad de lamparas vendidas Illuminatis es " + promIlluminatis);
} else {
	console.log("No se vendieron lamparas Illuminatis");
}

//d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)

if(contFelipeLamparas > contIlluminatis && contFelipeLamparas > contArgentinaLuz){
	console.log("La marca con más ventas es FelipeLamparas y la cantidad de ventas es " + contFelipeLamparas);
} else if (contIlluminatis >= contFelipeLamparas && contIlluminatis > contArgentinaLuz){
	console.log("La marca con más ventas es Illuminatis y la cantidad de ventas es " + contIlluminatis);
} else {
	console.log("La marca con más ventas es ArgentinaLuz y la cantidad de ventas es " + contArgentinaLuz);
}
}
