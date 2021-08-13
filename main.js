

let datos = [1,2,3,4,[1,2,3,4,5],6,7,8,["albert",2],10];

let almacenar = [];
const respuesta = datos.some((value,indice,array)=>{
    if(value[1] == 2){
        almacenar.push(array[indice]);
    }
});

console.log(datos);
console.log(almacenar);


// const informacio = ["Albert", "Stephen", "Gerena", 27];

// let data = informacio.map(valor => (valor=="Gerena") ? "Castro Gerena" : valor);
// console.log(informacio);
// console.log(data);




// const lista = [
//         "Albert",
//         "Gerena",
//         27,
//         ({...arg})=>{
//             return `Hola ${arg.nom} como estas`;
//         }
//     ];
// const f = (valor,indice,array)=>{
//     if(typeof valor == "function"){
//         console.log(valor({nom: lista[0]}));
//     }
// }
// let valor = lista.forEach();

// console.log(valor);



// let array = [];

// array["Nombre"] = "Albert";
// array["Apellido"] = "Gerena";
// array["Edad"] = 27;

// for(let [indice, valor] of Object.entries(array)){
//     console.log(valor);
// }



// console.log(array);
// console.log(Object.values(array));
// Object.values(array).forEach(element => {
//     console.log(element);
// });


