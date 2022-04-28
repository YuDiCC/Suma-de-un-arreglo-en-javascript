console.log("Suma de un arreglo")
console.log(" ")
let sum=0;
let lista = [];

function suma (){

    for (i=0; i<=1000; i++){
        lista.push(i);
        sum = sum + i;
   }
    return sum;
}
const Sumar = suma();

console.log("El arreglo es", lista)
console.log(" ")
console.log("La suma del arreglo es: ", Sumar)



