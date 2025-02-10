/*
function calculateGrade(p1, p2, freq, peso_p1 = 0.3, peso_p2 = 0.3, peso_freq = 0.4) {

    var nota_final = p1 * peso_p1 + p2 * peso_p2 + freq * peso_freq

    console.log("Nota final: " + nota_final)

    if (nota_final >= 9.5) {
        console.log("Aprovado")
    }
    else
        console.log("Reprovado")
    console.log("")
}

calculateGrade(12, 12, 12)
*/

// Entrada: 2; Saída: Fevereiro

/*
function getMonthName(nMes) {
    switch (nMes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        default:
            console.log("Não é válido");
            break;

    }
    console.log("");
}
getMonthName(2)
getMonthName(3)
// getMonthName(19)
*/
/*
function calculate(n1, n2, op){
    
    switch(op){
        case "+":
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case '/':
            if (n2 == 0){
                console.log("Não é possível dividir por 0");
                break;
            }
            else
                return n1/n2;
        default:
            console.log("Não é válido");
            break;
    }
}
console.log("Resultado = " + calculate(2, 2, "+"));
console.log("Resultado = " + calculate(3, 2, "-"));
console.log("Resultado = " + calculate(2, 2, "/"));
console.log("Resultado = " + calculate(4, 2, "*"));
console.log("Resultado = " + calculate(2, 0, "/"));
*/
/*
function multiplosLowerThan(multiplo, lte){

    console.log("Multiplos de " + multiplo + " menores que " + lte)

    for (i = 1; i < lte; i++) {
        if (i%multiplo == 0){
            console.log("" + i);
        }
      }
}
multiplosLowerThan(5, 20)
/* ou */
/*
ciclo while
*/


// Soma dos primeiros n numeros inteiros
// 5 -> 1+2+3+4+5
/*
function sumUpUntil(n1){
    var res = 0;
    for (var i = 1; i <= n1; i++){
        res += i;
    }
    return res;
}

console.log(sumUpUntil(5))

function fatorialNum(n1){
    var res = 1;
    for (var i = 1; i <= n1; i++){
        res *= i;
    }
    return res;
}
console.log(fatorialNum(n1));
*/
/*
function maxMinAvgArray(array){
    var sum = 0;
    var max = array[0];
    var min = array[0];
    var avg = 0;

    for (var i = 0; i < array.length; i++){
        sum += array[i];
        if (array[i] > max){
            max = array[i];
        }
        if (array[i] < min){
            min = array[i];
        }
    avg = sum / array.length;
    }
    return {sum, max, min, avg}
}
var result = maxMinAvgArray([5,3,4,2])
*/
function maxArray(array) {
    var max = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function sumArray(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
function minArray(array) {
    var min = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function avgArray(array){
    sum = sumArray(array)
    return sum/array.length
}

const array = [2, 3, 5, 10]

console.log(sumArray(array))
console.log(maxArray(array))
console.log(minArray(array))
console.log(avgArray(array))
//console.log("Soma = " + result.sum);
//console.log("Máximo = " + result.max);
//console.log("Mínimo = " + result.min);
//console.log("Média = " + result.avg);