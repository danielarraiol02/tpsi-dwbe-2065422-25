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
getMonthName(19)