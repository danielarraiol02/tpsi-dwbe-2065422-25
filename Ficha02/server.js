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

// var str = "Hoje e domingo";
// console.log(reverseStrings(str));

function countVowels(str){

    // Fazer ifs com OUs para ser + rapido (menos iteraçoes)

    const vowels = ["a","e","i","o","u"];
    var nvowels = 0;

    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i].toLowerCase()))
            nvowels+=1;
    }
    return nvowels;
}

//var str = "Hoje e domingo";
//console.log(countVowels(str));

function countOccurrences(str, letter_to_search){

    var count = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() == letter_to_search.toLowerCase())
            count+=1;
    }
    return count
}
//var str = "Hoje e domingo";
//console.log(countOccurrences(str, "e"));

function drawRectangle(height, width){

    var linha_largura = "";
    var linha_altura = "";

    console.log("Desenha retangulos");
    for (let i = 0; i < width; i++){
        linha_largura += "*";
    }
    for (let j = 0; j < height; j++){
        linha_altura += "*";
        console.log(linha_largura);
    }
    
}

function drawTriangle(width){

    var linha_largura = "";

    console.log("Desenha triangulos");
    for (let i = 0; i < width; i++){
        linha_largura += "*";
        console.log(linha_largura);
    }
}

/*
00, 01, 02, 03
10          13
20          23
30, 31, 32, 33
*/

function drawBoxOutline(width, height){

    for (let i = 0; i < height; i++){
        var linha_largura = "";
        for (let j = 0; j < width; j++){
            if (i == 0 || i == height-1 || j == 0 || j == width-1){
                linha_largura += "*";
            }
            else{
                linha_largura += " ";
            }       
        }
        console.log(linha_largura);
    }
}

//drawRectangle(5, 5);
//drawTriangle(5);
drawBoxOutline(3, 5);
