do { //Se repetirá hasta obtener respuesta
  var userFrase = prompt('Ingrese una frase').split(""); //"abanico"  cipheredFrase = "hihupjv" (7lugares a la derecha)
} while (!userFrase)//probablemente añadiendo variables que contengan mayúsculas y minúsculas por código ASCII. Se probará ejecución posteriormente
console.log(userFrase);


var asciiFromArray = []; //Añadiendo caractéres en su código ASCII

function cipher (userFrase){

  for (var i = 0; i< userFrase.length; i+=1){

    var result = userFrase[i].charCodeAt();
    asciiFromArray.push(result);

  }
  return asciiFromArray;
}

cipher (userFrase);
console.log(asciiFromArray);//Mostrando códigos en consola
