const productos = [
{
id: 1, nombre: "Laptop", 
precio: 12000 
},

{
id: 2, nombre: "Mouse",
 precio: 300 },


{
id: 3, nombre: "Teclado", 
precio: 800 
}
];

setTimeout(() => {
    const long_array = productos.length;
console.log('tamaño array' + long_array)
console.log('voy a recorrer el array')

productos.forEach((valor, index) => {
    console.log(index, valor.nombre)
    console.log( valor. precio)
    console.log('..............')
}) 

console.table(productos,["nombre"])
let mensaje_estado = document.querySelector('#estado')
console.log(mensaje_estado)
console.log(mensaje_estado.textContent)

mensaje_estado.textContent = 'recorrí ' + long_array + ' elementos'

}, 5000);
