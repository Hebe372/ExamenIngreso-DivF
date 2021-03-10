/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/



function mostrar()
{

let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let seguir;
let promProgramador = 0;
let promAnalista = 0;
let promQa = 0;
let acumProgramador = 0;
let contProgramador = 0;
let acumAnalista = 0;
let contAnalista = 0;
let acumQa = 0;
let contQa = 0;
let flagSueldo = 1;
let maxSueldo;
let maxSexo;
let maxSueldoFemenino;
let maxNombre;
let flagFemenino = 1;
let contProgramadorNoBinario = 0;
let contFemeninos = 0;

do{
    

nombre = prompt("Ingrese el nombre del empleado");
    while(!isNaN(nombre)){
    nombre = prompt("Error. Ingrese el nombre del empleado");
}

edad = parseInt(prompt("Ingrese la edad del empleado"));
    while(isNaN(edad) || edad<= 0){
    edad = parseInt(prompt("Error. Ingrese la edad del empleado"));
}

sexo = prompt("Ingrese el sexo (masculino/femenino/no binario)");
	while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
	sexo = prompt("Error.Ingrese el sexo (masculino/femenino/no binario)");
	}
	
puesto = prompt("Ingrese el puesto del empleado (programador/analista/Qa)");
    while(puesto != "programador" && puesto != "analista" && puesto != "Qa"){
    puesto = prompt("Error. Ingrese el puesto del empleado (programador/analista/Qa)");
}

sueldo = parseInt(prompt("Ingrese la sueldo del empleado"));
    while(isNaN(sueldo) || sueldo < 15000 || sueldo > 70000){
    sueldo = parseInt(prompt("Error. Ingrese la sueldo del empleado"));
}


//a) promedio de sueldos para cada puesto

if(puesto == "programador"){
    contProgramador++;
    acumProgramador += sueldo;
} else if(puesto == "analista"){
    contAnalista++;
    acumAnalista += sueldo;
} else{
    acumQa += sueldo;
    contQa++;
}

//b) el sexo del que percibe el mayor sueldo

if(flagSueldo || sueldo > maxSueldo){
    maxSueldo = sueldo;
    maxSexo = sexo;
    flagSueldo = 0;
}

//c) el nombre del empleado femenino con mas sueldo

if(sexo == "femenino"){ 
    contFemeninos++;
 if (flagFemenino || sueldo > maxSueldoFemenino){
    maxSueldoFemenino = sueldo;
    maxNombre = nombre;
    flagFemenino = 0;
}
}

//d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

if(puesto == "programador" && sexo == "no binario" && (sueldo >= 20000 && sueldo <= 55000)){
    contProgramadorNoBinario++;
}


seguir = prompt("Desea continuar(s/n)");

} while(seguir == "s"); //FIN DO WHILE


if(contProgramador != 0){
    promProgramador = acumProgramador/contProgramador;
}
if(contAnalista != 0){
    promAnalista = acumAnalista/contAnalista;
}

if(contQa != 0){
    promQa = acumQa/contQa;
}

console.log("El promedio de sueldo de programador es " + promProgramador);
console.log("El promedio de sueldo de analista es " + promAnalista);
console.log("El promedio de sueldo de Qa es " + promQa);

console.log("El sexo del empleado con el mayor sueldo es " + maxSexo + " y el sueldo es " + maxSueldo);


if(contFemeninos != 0){
console.log("El nombre del empleado femenino con el mayor sueldo es " + maxNombre + " y el sueldo es " + maxSueldoFemenino);
} else {
    console.log("No se ingresaron empleados femeninos");
}


if(contProgramadorNoBinario != 0){
console.log("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es " + contProgramadorNoBinario);
} else{
    console.log("No se ingresaron programadores no binarios con sueldo entre 20000 y 55000");
}
    
    
}


