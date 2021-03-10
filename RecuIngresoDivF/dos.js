/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

function mostrar()
{
    let carrera;
    let sexo;
    let materias;
    let nota;
    let edad;
    let maxNota;
    let maxNombre;
    let flagNota = 1;
    let minEdad;
    let minNombre;
    let flagEdad = 1;
    let maxMaterias;
    let maxEdad;
    let maxNombreMaterias;
    let flagMaterias = 1;
    
    
    for(let i=1; i=500; i++){
        
        
    carrera = prompt("Ingrese la carrera (quimica/fisica/sistemas)");
	while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
	carrera = prompt("Error.Ingrese la carrera (quimica/fisica/sistemas)");
	}
    
    sexo = prompt("Ingrese el sexo (masculino/femenino/no binario)");
	while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
	sexo = prompt("Error.Ingrese el sexo (masculino/femenino/no binario)");
	}
        
    edad = parseInt(prompt("Ingrese la edad del alumno"));
    while(isNaN(edad) || edad<= 0){
    edad = parseInt(prompt("Error. Ingrese la edad del alumno"));
    }
    
    nota = parseFloat(prompt("Ingrese la nota del alumno"));
    while(isNaN(nota) || nota < 0 || nota > 10){
    nota = parseFloat(prompt("Error. Ingrese la nota del alumno"));
    }
    
    materias = parseInt(prompt("Ingrese las materias del alumno"));
    while(isNaN(materias) || materias < 1 || materias > 5){
    nota = parseFloat(prompt("Error. Ingrese la materias del alumno"));
    }
        
    //a) El nombre del mejor promedio de los alumnos que estudian Fisica
      if(carrera == "fisica" && (flagNota || nota>maxNota)){
          maxNota = nota;
          maxNombre = nombre;
          flagNota = 0;
      }  
      
      
      
      //b) El nombre de la alumna mas joven
      
      if(sexo == "femenino" && (flagEdad || edad < minEdad)){
          minEdad = edad;
          minNombre = nombre;
          flagEdad = 0;
      }
      
     //c) Porcentaje de estudiantes que estudia cada carrera
     
     contEstudiantes++;
     
     switch (carrera) {
         case "quimica":
             contQuimica++;
             break;
         case "fisica":
             contFisica++;
             break;
         case "sistemas":
             contSistemas++;
             break;
     }
     
     //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica
     
     if(carrera != "quimica" && (flagMaterias || materias>maxMaterias)){
        maxMaterias = materias;
        maxEdad = edad;
        maxNombreMaterias = nombre;
        flagMaterias = 0;
     }
      
    } //FIN DEL FOR
    
    if(flagNota == 0){
      console.log("El nombre del mejor promedio de los alumnos que estudian fisica es " + maxNombre + " y la nota es " + maxNota);
      } else{
          console.log("No se ingresaron alumnos que estudian fisica");
      }
      
    if(flagNota == 0){
      console.log("El nombre de la alumna mas joven es " + maxNombre + " y la nota es " + maxNota);
     } else{
      console.log("No se ingresaron alumnas");
     } 
     
     if(contQuimica != 0){
         console.log("EL Porcentaje de estudiantes que estudia quimica es " + contQuimica * 100/contEstudiantes);
     } else{
         console.log("No se ingresaron estudiantes de quimica");
     }
     
     if(contFisica != 0){
         console.log("EL Porcentaje de estudiantes que estudia fisica es " + contFisica * 100/contEstudiantes);
     } else{
         console.log("No se ingresaron estudiantes de fisica");
     }
     
    if(contSistemas != 0){
         console.log("EL Porcentaje de estudiantes que estudia sistemas es " + contSistemas * 100/contEstudiantes);
     } else{
         console.log("No se ingresaron estudiantes de sistemas");
     } 
     
     
     if(contFisica != 0 || contSistemas != 0){
         console.log("La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica es " + maxEdad + " años y nombre " + maxNombre);
     } else{
         console.log("No se ingresaron estudiantes de fisica o de sistemas");
     } 
     
     
     }
