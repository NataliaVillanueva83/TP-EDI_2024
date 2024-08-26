/*1. La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escriba una función que
calcule el valor de una ecuación lineal, solveLineEquation.*/

function solveLineEquation (a, b, c){
    let x = -c / a;
    let y = -c / b;
    return [x, y];  // Retorna un arreglo con los valores de x y y.
 
}