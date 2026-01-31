
function exemplojogos(){
    let jogos =[] ;

    for (let i = 0 ; i < 5; i += 1){
        let nomeJogo = prompt("digite o jogo");
        jogos.push (nomeJogo);

    }

    let texto ="";
    for(let i = 0 ; i < 5 ; i+= 1 ){
        let nomeJogo = jogos[i];
        texto= texto + nomeJogo + "\N";
    }

    alert ("jogos: " + texto );
}

function calculadora(){
    let numero [] ;
    for (let i = 0 ; let < 4; i += 1){
        let numero =parseInt(prompt("digite o numero"));
        numero.push(numero)
    }
let somamanual = numero [0] + numero [1] + numero [2] + numero [3]
alert("soma manual: " + somaManual);

let soma = 0 
for (let i = 0 ;i < 4 ; i += 1){
    let numero = numero[i]; 
soma = soma + numero}

alert ("soma auto: " + soma)
}

function folhaDePagamento() {
let colaboraores = [];
let horastrabalhadas = [];
let valorHora = [];
let descontos = [];
let auxilios = [];

let quantiadeColaboraores = parseInt(prompt("quantidade de colaboradores na folha"))

for (let i= 0; i < quantiadeColaboraores; i+= 1){
    let nomecolaboradores = prompt("nome do colaboraor")
    let quantidadeHoras = parseInt(prompt("horas trabalhadas "))
    let pagoValorHora = parseFloat(prompt("valor por hora"))

    let temDesconto= confirm("tem desconto")
    let valordesconto = 0
    if (temDesconto === true){
        valordesconto = parseFloat(prompt("valor o desconto"))
    }

     let temAuxilio= confirm("tem Auxilio")
    let valorAuxilio = 0
    if (temAuxilio === true){
        valorAuxilio = parseFloat(prompt("valor o Auxilio"))
    }

    colobarador.push(nomecolaboradores)
    horastrabalhadas.push(horastrabalhadas)
    valorHora.push(valorHora)
    descontos.push(descontos)
    auxilios.push(valorAuxilio)

}

for (let i = 0 ; i < quantiadeColaboraores; i += 1)
{
    const quantidadeHoras = horastrabalhadas [i];
    const pagoValorHora = valorHora [i] 

    let salarioBruto.push (salarioBruto)

}
for (let i = 0; i< quantiadeColaboraores; i += 1){
    let salarioLiquio= salarioLiquio= salarioBruto[i] - descontos[i] + auxilios[i]
    salarioLiquio.push(salarioLiquio)
}

for (let i = 0 ; i < quantiadeColaboraores; i += 1){
    const nome = colaboraores[i] 
    const horas = horastrabalhadas [i]
    const valorHora= pagoValorHora [i]
    const bruto = salarioBruto [i]
    const liquido = salarioLiquio [i]
    const auxilio = auxilios [i]

alert(
        "🧾 Folha de Pagamento\n" +
        "━━━━━━━━━━━━━━━━━━━━\n" +
        "👤 Colaborador: " + nome + "\n" +
        "⏱️ Horas trabalhadas: " + horas + "\n" +
        "💰 Valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
        "🟢 Salário bruto: R$ " + bruto.toFixed(2) + "\n" +
        "🔻 Descontos: R$ " + desconto.toFixed(2) + "\n" +
        "🎁 Auxílios: R$ " + auxilio.toFixed(2) + "\n" +
        "━━━━━━━━━━━━━━━━━━━━\n" +
        "✅ Salário líquido: R$ " + liquido.toFixed(2) + " 💵"
    );

}


}