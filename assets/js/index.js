

console.log("minha primeira msg");

console.error("meu primeiro erro");

function exemploVariaveisTexto() {
    const produto1 = "Xbox";
    const produto2 = "Gameboy Color";
    //concatenando a variavel produto1 + espaço + produto2
    const produtos = produto1 + " " + produto2
    alert("produto: " + produtos);
}

function exemploVariaveisInteiro() {
    const numero1 = 18;
    const numero2 = 147;

    alert("soma: " + soma);

}

function exemploVariaveisFloat() {
    const quantidadeHoras = 10;
    const valorHora = 2.31;
    const salarioBruto = quantidadeHoras * valorHora;
    alert("salario bruto " + salarioBruto);
}

function exemploVariaveisBoolean() {
    //let:permiti retribuir o valor da variavel depois de criada
    //const: nao permiti retribuir o valor, apeas a leitura 
    let lorenzoFechouAba = false;

    lorenzoFechouAba = true;

    alert("Lorenzo fechou a aba: " + lorenzoFechouAba);

}



function exemploVariaveis() {
    let destino = "maceio";
    const quantidadeDias = 20;
    const precoDiaria = 1300.1
    let finalizadaCompra = false

    let valorTotal = quantidadeDias * precoDiaria;

    finalizadaCompra = true;

    alert(
        "destino: " + destino + "\nQuantidade de dias: " + quantidadeDias + "\npreco Diaria:  " + precoDiaria + "\nfinalizar compra: " + finalizadaCompra + "\nValor total: R$ " + valorTotal
    );

}


function exemploVariaveis01(){
const nome01 = "Greninja";
const numero01 = 658;
const descricao01 = "The movement of air against the long tongue Greninja keeps wrapped around its neck allows it to sense enemies it cant see";
const altura01 = 1.5;
const peso01 =  40.0;
const categoria01 = "Ninja";
const habilidade01 = "Torrent";
const IMC1 = altura01 / peso01 * peso01;

 
alert("nome: " + nome01 + "\nnumero: " + numero01 + "\ndescrição: " + descricao01 + "altura: " + altura01 + "\npeso:" + peso01 + "\ncategoria: " + categoria01 + "\nhabilidade: " + habilidade01 + "IMC: " + IMC1)
}

function exemploVariaveis02(){
const nome02 = "Psyduck";
const numero02 = 54;
const descricao02 = "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.";
const altura02 = 0.8;
const peso02 =  19.6;
const categoria02 = "Duck";
const habilidade02 = "Cloud Nine & Damp";
const IMC1 = altura02 / peso02 * peso02;

 
alert("nome: " + nome02 + "\nnumero: " + numero02 + "\ndescrição: " + descricao02 + "altura: " + altura02 + "\npeso:" + peso02 + "\ncategoria: " + categoria02 + "\nhabilidade: " + habilidade02 + "IMC: " + IMC1)
}

function exemploVariaveis03(){
const nome03 = "Gholdengo";
const numero03 = 1000;
const descricao03 = "Its body seems to be made up of 1,000 coins. This Pokémon gets along well with others and is quick to make friends with anybody.";
const altura03 = 1.2;
const peso03 =  30.0;
const categoria03 = "Coin Entity";
const habilidade03 = "Good as Gold";
const IMC1 = altura03 / peso03 * peso03;

 
alert("nome: " + nome03 + "\nnumero: " + numero03 + "\ndescrição: " + descricao03 + "altura: " + altura03 + "\npeso:" + peso03 + "\ncategoria: " + categoria03 + "\nhabilidade: " + habilidade03 + "IMC: " + IMC1)
}










/* 
exercicio de pokemon
nome
numero
descriçao
altura
peso
categoria
habilidade

calcular o IMC do pokemon  peso/altura.altura 
apresentar todos os dados do pokemon e seu IMC
*/

