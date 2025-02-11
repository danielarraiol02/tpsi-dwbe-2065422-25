function calculateIMC(peso, altura){
    var imc;
    imc = peso/(altura)**2;
    return imc;
}

function getCondition(imc){
    if (imc < 18.5)
        console.log("Abaixo do peso");
    else if (imc > 18.5 && imc < 25)
        console.log("Peso normal");
    else if (imc > 25 && imc < 30)
        console.log("Acima do peso");
    else if (imc > 30)
        console.log("Obeso");

}

//var pessoa1 = calculateIMC(75, 1.75);
//getCondition(pessoa1);
//var pessoa2 = calculateIMC(150, 1.50);
//getCondition(pessoa2);

//var str = "Hoje e domingo";
//var splittedStr = str.split(" ");
//Split dá nos um array com cada palavra numa string
//2 ciclo for, um para percorrer as palavras, outro para inverter
//console.log(splittedStr);

function reverseStrings(str){

    var splittedStr = str.split(" ");
    var reversedStr = "";
    
    for (let i = 0; i < splittedStr.length; i++){
        const word = splittedStr[i];
        for (let j = word.length - 1; j >= 0; j--){
            reversedStr+=word[j];
        }
        reversedStr+=" ";
    }
    return reversedStr;
}

var str = "Hoje e domingo";
console.log(reverseStrings(str));