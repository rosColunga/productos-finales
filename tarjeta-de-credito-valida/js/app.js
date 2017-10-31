do { //Obteniendo números de la tarjeta dentro de una variable e invirtiéndolos
  var askNumber = prompt('Ingrese un número de tarjeta').split("").reverse().join("");
} while (askNumber<=" ");//Si se ingresa un espacio en lugar de número se volverá a ejecutar el prompt
console.log(askNumber);

var oddPosition = []; // Detectando elementos "nones"
  for (var i = 0; i<=askNumber.length -1; i+=2){
    var resultOdd = (askNumber[i]);
    oddPosition = oddPosition + (resultOdd);//Otorgando valores a var oddPosition
  }
var odds = oddPosition.split(""); //Separando elementos del array
  resultOdds = parseInt(odds)
  console.log(odds); // Estas cantidades deben sumarse entre si

var pairPosition = []; //Detectando posiciones en "par"
  for (var i = 1; i<askNumber.length; i+=2){
    resultPairs = parseInt(pairPosition.push(askNumber[i]));
  }
  console.log(pairPosition); /*Se debe identificar las cantidades menores a 4 y multiplicarlas
  por 2 para después sumarlas entre si. Las cantidades mayores a 5 se multiplican por 2 y se
  suman sus digitos individualmente (segun método de Luhn), para después sumarse con las demás
  cantidades*/

/*
function isValidCard (totalSums){
  if (totalSums % 10 == 0){
  document.write('Tu tarjeta es válida C:')
}else{
  document.write('Tu tarjeta no es válida :C')
}
*/
