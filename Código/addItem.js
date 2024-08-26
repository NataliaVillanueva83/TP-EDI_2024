/*8. Declare un nombre de función addItem. Toma un parámetro de elemento y devuelve un
arreglo después de agregar el elemento (no utilice métodos de arreglos)*/

function addItem(arr, element) {
    let newArr = [...arr];
    newArr[newArr.length]= element;
    return newArr;
}

let miArray = [1, 2, 3];    
console.log(addItem(miArray, 4));