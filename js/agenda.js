
let seguir= true;
let datos =[];

while(seguir) {
    let contacto = {

};

let opcion = parseInt(prompt('Escoge una opción del \n 1-agregar \n 2-listar \n 3-borrar \n 4-salir'));
switch(opcion){
    case 1: 
    alert('escogistes la opción 1');
    let nombre =  prompt('ingresa tu nombre')
   contacto.nombre = nombre;
    let telefono =  prompt('ingresa tu teléfono')
    contacto.telefono = parseInt(telefono);
    let edad =  prompt('ingresa tu edad')
    contacto.edad = parseInt(edad);
    contacto.id = datos.length + 1;
    datos.push(contacto)

    break;

    case 2:
     alert('escogistes la opción 2 (enlistar)');
     console.table(datos);
    break;
    case 3:
    alert('escogiste borrar');
    let borrar = prompt( 'ingresa el id del usuario a borrar')
    for(i=0; i < datos.length ; i++) {
        if (datos[i].id === parseInt(borrar)) {
          datos.splice(i, 1);    
        } 
    }
    console.table(datos)
    break;

     case 4:
     alert('escogistes salir');
   
    seguir= false;
     break
;
    default:
    alert('No recibí opción válida')
break;
}

} 
