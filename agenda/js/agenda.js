
let opcion = parseInt(prompt('Escoge una opción del \n 1-agregar \n 2-listar \n 3-salir'));
let seguir= true;
let datos =[];

while(seguir) {
let opcion = parseInt(prompt('Escoge una opción del \n 1-agregar \n 2-listar \n 3-salir'));
switch(opcion){
    case 1: 
    alert('escogistes la opción 1');
    let nombre =  prompt('ingresa tu/s nombre')
   // ingresar el nombre al array
   datos.push('nombre:' + nombre)
   console.table(datos);

    let apellidos =  prompt('ingresa tus apellidos')
    datos.push('apellidos:' + apellidos)
   console.table(datos);

   let facultad =  prompt('ingresa tu facultad')
    datos.push('facultad:' + facultad)
   console.table(datos);

    let telefono =  prompt('ingresa tu teléfono')
    datos.push('telefono:' + telefono)
   console.table(datos);

    let edad =  prompt('ingresa tu edad')
    datos.push('edad:' + edad + '\n' + '...........' 
    )
   console.table(datos);
    break;
    case 2:
     alert('escogistes la opción 2 (enlistar)');
     console.log(datos.join('\n'));
    break;
     case 3:
     alert('escogistes salir');
     seguir=false;
    break;
    default:
    alert('No recibí opción válida')
break;
}

} 