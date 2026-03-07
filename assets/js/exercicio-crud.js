const taxas = {
    usd: {valor: 0.19, simbolo: "$"},
    eur: {valor: 0.17, simbolo: "€"},
    gbp: {valor: 0.15, simbolo: "£"},
    cad: {valor: 0.26, simbolo: "C$"},
    jpy: {valor: 28.5, simbolo: "¥"},
    ars: {valor: 200, simbolo: "$"},
    chf: {valor: 0.17, simbolo: "CHF"},
    cny: {valor: 1.37, simbolo: "¥"}
};

function converter(moeda){

    const valorReal = parseFloat(document.getElementById("real").value);

    if(isNaN(valorReal)){
        alert("Digite um valor válido em reais");
        return;
    }

    const taxa = taxas[moeda].valor;
    const simbolo = taxas[moeda].simbolo;

    const convertido = (valorReal * taxa).toFixed(2);

    const lista = document.getElementById("listaConversoes");

    const item = document.createElement("li");

    item.textContent = `R$ ${valorReal} => ${simbolo}${convertido}`;

    lista.appendChild(item);
}

const botaoYoutube = document.getElementById("botao-youtube")
const botaoStrike = document.addEventListener("click", strikes)
function strikes(){
    const campoNome = document.getElementById("campo-nick")
    const nome = document.getElementById.value("campo-nick")
    const campostrikes = document.getElementById("campo-strikes")
    const strikes = parseInt(document.getElementById.value("campo-nick"))
  



if(strikes > 2){
    alert("canal strike")
}else {alert("canal ativo")}



}