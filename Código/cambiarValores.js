/*5. Declare un nombre de función swapValues. Esta función intercambia el valor de x a y.
intercambiarValores(3, 4) // x => 4, y => 3
intercambiarvalores(4, 5) // x = 5, y = 4*/

function swapValues(x, y) {

    console.log(`Antes del intercambio: x = ${x}, y = ${y}`);

    let auxiliar = x;
    x = y;
    y = auxiliar;

    console.log(`Después del intercambio: x = ${x}, y = ${y}`);

}

//onsole.log(swapValues(3,4));
swapValues(3,4);

