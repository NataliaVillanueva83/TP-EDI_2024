/*7. Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el –
array capitalize.*/

function capitalizeArray(array){
  
  let capitalizedArr = [];
    for (let i = 0; i < array.length; i++){
        let word = array[i];
        capitalizedArr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
    return capitalizedArr;
}

let miArray = ["hola", "mundo", "bienvenido"];
console.log(capitalizeArray(miArray));
