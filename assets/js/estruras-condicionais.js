function exemploBasico() {
    let idade = 42;

    if (idade < 18) { alert("menor de idade"); }
    else if (idade < 65) { alert("adulto"); }
    else ("idoso")
}

function exemploE() {
    let nivel = 8;
    if (nivel >= 0 && nivel <= 10) { alert("eço bronze") }

}

function exemploOU() {

    let idade = 30;
    let estudante = true;

    if (idade, 18 || estudante === true) { alert("pode comprar meio ingresso") }
    else { alert("nao pode comprar ingresso") }

}

function exemploEncremento() {

    debugger
    let quantidadedeIdoso = 0, quantidadedeAdulto = 0;

    let nome1 = prompt("digite o nome da primeira pessoa:");
    let idade1 = parseInt(prompt("digite a idade de" + nome1 + ":"))

    if (idade1 < 65) { quantidadedeAdulto = quantidadedeAdulto + 1 }
    else { quantidadedeIdoso = quantidadedeIdoso + 1 }

    let nome2 = prompt("digite o nome da primeira pessoa:");
    let idade2 = parseInt(prompt("digite a idade de" + nome2 + ":"))

    if (idade2 < 65) { quantidadedeAdulto = quantidadedeAdulto + 1 }
    else { quantidadedeIdoso = quantidadedeIdoso + 1 }

    let nome3 = prompt("digite o nome da primeira pessoa:");
    let idade3 = parseInt(prompt("digite a idade de" + nome3 + ":"))

    if (idade3 < 65) { quantidadedeAdulto = quantidadedeAdulto + 1 }
    else { quantidadedeIdoso = quantidadedeIdoso + 1 }

    alert("pessoa 1\nnome: " + nome1 + " | idade: " + idade1 + "anos\n\n" +
        "pessoa 2\nnome: " + nome2 + " | idade: " + idade2 + "anos\n\n" +
        "pessoa 3\nnome: " + nome3 + " | idade: " + idade3 + "anos\n\n" +
        "resumo:\n" +
        "quantidade de adultos: " + quantidadedeAdulto + "\n" +
        "quantidade de idosos: " + quantidadedeidoso

    );
}

function exemploFinaldeAno(){
let contagemRegressiva = 10
    alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert(contagemRegressiva);

contagemRegressiva = contagemRegressiva - 1;
alert("feliz ano novo 2026");

}

function somaNumeros(){
let soma = 0;

const numero1 = parseInt(prompt("digite o numero 1: "));
soma = soma + numero1;

const numero2 = parseInt(prompt("digite o numero 2: "));
soma = soma + numero2;

const numero3 = parseInt(prompt("digite o numero 3: "));
soma = soma + numero3;

const numero4 = parseInt(prompt("digite o numero 4: "));
soma = soma + numero4;

const media = soma / 4 ;

alert("soma: " + soma + "\nMedia: " + media);

}