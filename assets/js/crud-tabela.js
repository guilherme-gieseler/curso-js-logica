let proximoId = 2; //exemplo ja esta em 1
let indexParaEditar = -1;
const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoNome = document.getElementById("campo-nome")
const campoCargo = document.getElementById("campo-cargo")
const campoHoras = document.getElementById("campo-horas");
const tbody = document.getElementById("colaboradores")
function salvar() {
    const nome = campoNome.value.trim();
    const cargo = campoCargo.value;
    const horas = campoHoras.value;

    if(nome.length < 3){
        alert("nome minimo 3 letras");
        return;
    }else if (nome.length > 100){
        alert ("nome maximo 100 letras");
        return;
    }
    console.log(cargo);

    if (cargo === "") {
        alert ("cargo deve ser selecionao")
    }

    const valorHora = obterValorHoraPagaPorCargo(cargo);

    const salarioBruto = calcularSalariBruto(valorHora, horas)

    if (indexParaEditar === -1 ){
        criarLinha(nome, cargo, horas, valorHora, salarioBruto, proximoId);
        proximoId += 1;
    } else {editarLinhas(nome, cargo, horas, valorHora, salarioBruto)}
    
    limparCampos()
}

function calcularSalariBruto(valorHora, quantidadeHoras){
    const salarioBruto = valorHora * quantidadeHoras;
    return salarioBruto;
}

function obterValorHoraPagaPorCargo(cargo){
    if (cargo === "Junior"){
        return 10;
    }else if (cargo === "Pleno"){
        return 22.72;
}else if (cargo === "Senior"){
        return 40.91;}
        else{ return 0;
        }}

function criarLinha(nome, cargo, horas, valorHora, salarioBruto, id){
    const linha = `<tr class="border-b border-gray-700 hover:bg-gray-700">
                        <td class="px-4 py-3">${id}</td>
                        <td class="px-4 py-3">${nome}</td>
                        <td class="px-4 py-3">${cargo}</td>
                        <td class="px-4 py-3">${horas}</td>
                        <td class="px-4 py-3">R$ ${salarioBruto}</td>
                        <td class="px-4 py-3 flex gap-2">

                            <button
                                class="botao-editar bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-3 py-1 rounded-md text-sm transition">
                                Editar
                            </button>

                            <button
                                class="botao-apagar bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 rounded-md text-sm transition">
                                Excluir
                            </button>

                        </td>
                    </tr>`

    tbody.innerHTML = tbody.innerHTML + linha     
    
   // function adicionarCliqueBotoes();
}

function editarLinhas(nome, cargo, horas, valorHora, salarioBruto) {
    const linhaEditar = tbody.children[indexParaEditar -1]

    linhaEditar.children[1].innerHTML = nome;
     linhaEditar.children[2].innerHTML = cargo;
      linhaEditar.children[3].innerHTML = horas;
       linhaEditar.children[4].innerHTML = `R$ ${salarioBruto.tofixed(2)}`;
}



function limparCampos(){
campoCargo.value = "";
campoHoras.value = "";
campoNome.value = "";
}


function adicionarCliqueBotoes(){
let editarBotoes = document.getElementsByClassName("botao-editar")
for(let i = 0; i< editarBotoes.length; i += 1) {
    let botaoEditar = editarBotoes[i];
    botaoEditar.addEventListener("click", preencherCamposParaEditar);
}

let apagarBotoes = document.getElementsByClassName("botao-apagar")
for(let i = 0; i< apagarBotoes.length; i += 1) {
    let botaoapagar = apagarBotoes[i];
    botaoapagar.addEventListener("click", confirmarParaApagar);
}

}

function preencherCamposParaEditar(event){
    const botaoParaEditar = event.target;
    const coluna = botaoParaEditar.parentElement
    const linha = coluna.parentElement
    const colunaLinha = linha.chilren;
    const id = colunaLinha [0].innerHTML
    const nome = colunaLinha [1].innerHTML
    const cargo = colunaLinha [2].innerHTML
    const horas = colunaLinha [3].innerHTML

    campoCargo.value = cargo;
    campoHoras.value = horas;
    campoNome.value = nome;

    indexParaEditar = linha.rowInex

}

function confirmarParaApagar(event){
const confirmarApagar = confirm ("deseja apagar")  
if (confirmarApagar === false){
    return
}

const botaoClique = event.target;
const coluna =botaoClique.parentElement;
const linha =coluna.parentElement;
tbody.removeChild(linha)

alert("removio com sucesso")
}

adicionarCliqueBotoes();


