function solicitarString() {
    let nome = prompt("digite seu nome")
    let sobrenome = prompt("digite o seu sobrenome")

    let nomeSobrenome = nome + " " + sobrenome
    alert("Nome completo: " + nomeSobrenome)
}


function solicitarInt() {
    let numeroCartao = parseInt(prompt("digite o numero de cartao"));
    let codigoSeguranca = parseInt(prompt("digite o codigo de segurança"))

    alert("numero: " + numeroCartao + "\nCVV: " + codigoSeguranca);
}


function solicitarFloat() {
    let saldoBanco = parseFloat(prompt("digite sado da conta"))
    const saque = parseFloat(prompt("digite valor de saque"))


    saldoBancario = saldoBanco - saque;

    alert(
        "saque realizado, saldo restante: " + saldoBancario + "\nsaldo atual: " + saldoBancario
    )

}


function solicitarboolean() {
    let vencido = confirm("produtos vencidos?");

    alert("produto vencido: " + vencido)


}

function paciente() {

    let nome = prompt("digite nome do paciente");
    const idade = parseInt(prompt("digite a idade"));
    const peso = parseFloat(prompt("digite o peso"));
    const cpf = prompt("digite o cpf")

    let possuiPlanosSaude = confirm("possui plano de saude")

    let planoSaude = ""
    if (possuiPlanosSaude === true) {
        planoSaude = prompt("digite o plano de saude")
    }

    const tipoSanguineo = prompt("digite o tipo sanguineo")
    const altura = parseFloat(prompt("digite a altura"))

    const urgencia = prompt('escolha o nivel de urgencia [migue, atestado, dorzinha, dengue, dor extrema]')

    let tempoDeEspera = 0;
    if (urgencia === "migue") { tempoDeEspera = 180; }
    else if (urgencia === "atestado") { tempoDeEspera = 150; }
    else if (urgencia === "dorzinha") { tempoDeEspera = 120; }
    else if (urgencia === "dengue") { tempoDeEspera = 80; }
    else if (urgencia === "dor extrema") { tempoDeEspera = 60; }
    else if (urgencia === "N/A") { tempoDeEspera = ""; return; }

    alert(
        "dados paciente\n\n" +
        "nome: " + nome + "\n" +
        "idade: " + idade + "\n" +
        "peso: " + peso + "\n" +
        "CPF: " + cpf + "\n" +
        "possui plano de saude: " + (possuiPlanosSaude ? "sim" : "nao") + "\n"
            (possuiPlanosSaude ? "plano de saude: " + planoSaude + "\n" : "") +
        "tipo sanguineo: " + tipoSanguineo + "\n" +
        "tempo de espera: " + tempoDeEspera + " minutos"

    )
}


function personagem() {
    let nome = prompt("digite nome do personagem");
    const idade = parseInt(prompt("digite a idade do personagem"));
    let cidade = prompt("digite cidade do personagem");

    let possuipoder = confirm("possui poder")

    let poder = ""
    if (possuipoder === true) {
        poder = prompt("digite o poder")
    }
    const vzs = parseInt(prompt("quantas atuaçoes o personagem ira participar"));

    alert(
        "nome: " + nome + "\n" +
        "idade: " + idade + "\n" +
        "cidade: " + cidade + "\n" +
        "possui poder: " + (possuipoder ? "sim" : "nao") + "\n" +
        (possuipoder ? "plano de saude: " + poder : "") + "\n" +
        "quantidade de atuaçoes mensais: " + vzs + "\n"
    )
}


function area(){
 let base = parseFloat(prompt("largura da base (b)"))
    const altura = parseFloat(prompt("altura da base (h)"))


    areaT = altura * base * base;

    alert(
        "area: " + areaT 
    )


}









