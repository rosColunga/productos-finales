do { //Obteniendo números de la tarjeta dentro de una variable e invirtiéndolos
  var askNumber = prompt('Ingrese un número de tarjeta').split("").reverse().join("");
} while (askNumber<=" ");//Si se ingresa un espacio en lugar de número se volverá a ejecutar el prompt
console.log(askNumber);

//function isValidCard (positions){
var oddPosition = [];
  for (var i = 0; i<=askNumber.length -1; i+=2){
    var resultOdd = (askNumber[i]);
    oddPosition = oddPosition + resultOdd;//Otorgando valores a var oddPosition
  }
console.log(oddPosition); //imprimiendo números en posiciones nones

 //var pairPosition = [];
 //var pairSpecialCase = []; (variables que falta obtener)
