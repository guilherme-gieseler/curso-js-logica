function exercicio03() {
    let nome = prompt("Nome do filme:");
    let ano = Number(prompt("Ano de lançamento:"));
    let duracao = Number(prompt("Duração em minutos:"));
    let genero = prompt("Gênero do filme:");
    let assistido = confirm("Você já assistiu esse filme?");

    alert(
        "📽️ DADOS DO FILME\n" +
        "Nome: " + nome + "\n" +
        "Ano: " + ano + "\n" +
        "Duração: " + duracao + " min\n" +
        "Gênero: " + genero + "\n" +
        "Já assistido: " + (assistido ? "Sim" : "Não")
    );
}


function exercicio04() {
    let nome = prompt("Nome do produto:");
    let preco = Number(prompt("Preço unitário:"));
    let qtd = Number(prompt("Quantidade comprada:"));
    let total = preco * qtd;

    let premium = confirm("Cliente é assinante Premium?");

    if (premium) {
        total *= 0.9; // 10% de desconto
    }

    alert(
        "🛒 DADOS DA COMPRA\n" +
        "Produto: " + nome + "\n" +
        "Preço unitário: R$ " + preco.toFixed(2) + "\n" +
        "Quantidade: " + qtd + "\n" +
        "Assinante Premium: " + (premium ? "Sim" : "Não") + "\n" +
        "Valor final: R$ " + total.toFixed(2)
    );
}



function exercicio05() {
    let nome = prompt("Nome do aluno:");
    let n1 = Number(prompt("Primeira nota:"));
    let n2 = Number(prompt("Segunda nota:"));
    let n3 = Number(prompt("Terceira nota:"));

    let media = (n1 + n2 + n3) / 3;
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    alert(
        "📘 DADOS DO ALUNO\n" +
        "Nome: " + nome + "\n" +
        "Notas: " + n1 + ", " + n2 + ", " + n3 + "\n" +
        "Média: " + media.toFixed(2) + "\n" +
        "Situação: " + situacao
    );
}



function exercicio06() {
    let modelo = prompt("Modelo do carro:");
    let ano = Number(prompt("Ano do carro:"));
    let valor = Number(prompt("Valor do carro:"));
    let parcelas = Number(prompt("Quantidade de parcelas:"));

    let valorParcela = valor / parcelas;

    let seguro = confirm("Deseja incluir seguro? (R$150 por parcela)");

    if (seguro) {
        valorParcela += 150;
    }

    alert(
        "🚗 DADOS DO FINANCIAMENTO\n" +
        "Modelo: " + modelo + "\n" +
        "Ano: " + ano + "\n" +
        "Valor total: R$ " + valor.toFixed(2) + "\n" +
        "Parcelas: " + parcelas + "\n" +
        "Seguro: " + (seguro ? "Sim" : "Não") + "\n" +
        "Valor da parcela: R$ " + valorParcela.toFixed(2)
    );
}




function exercicio07() {
    let nome = prompt("Nome do jogo:");
    let horasDia = Number(prompt("Horas jogadas por dia:"));
    let dias = Number(prompt("Dias jogados na semana:"));
    let totalHoras = horasDia * dias;

    let online = confirm("O jogo é online?");

    alert(
        "🎮 DADOS DO JOGO\n" +
        "Nome: " + nome + "\n" +
        "Horas/dia: " + horasDia + "\n" +
        "Dias/semana: " + dias + "\n" +
        "Total de horas semanais: " + totalHoras + "\n" +
        "Jogo online: " + (online ? "Sim" : "Não")
    );
}



function exercicio08() {
    let nome = prompt("Nome do restaurante:");
    let conta = Number(prompt("Valor da conta:"));
    let pessoas = Number(prompt("Quantidade de pessoas:"));

    let taxa = confirm("Incluir taxa de serviço (10%)?");

    if (taxa) {
        conta *= 1.1;
    }

    let porPessoa = conta / pessoas;

    alert(
        "🍽️ CONTA DO RESTAURANTE\n" +
        "Restaurante: " + nome + "\n" +
        "Valor final da conta: R$ " + conta.toFixed(2) + "\n" +
        "Quantidade de pessoas: " + pessoas + "\n" +
        "Valor por pessoa: R$ " + porPessoa.toFixed(2)
    );
}




function exercicio09() {
    let nome = prompt("Nome do funcionário:");
    let salarioBase = Number(prompt("Salário base:"));
    let horasExtras = Number(prompt("Horas extras no mês (R$):"));
    let descontos = Number(prompt("Descontos (R$):"));

    let salarioFinal = salarioBase + horasExtras - descontos;

    let imposto = salarioFinal > 3000 ? "Imposto alto" : "Imposto padrão";

    alert(
        "💼 FOLHA DE PAGAMENTO\n" +
        "Funcionário: " + nome + "\n" +
        "Salário base: R$ " + salarioBase.toFixed(2) + "\n" +
        "Horas extras: R$ " + horasExtras.toFixed(2) + "\n" +
        "Descontos: R$ " + descontos.toFixed(2) + "\n" +
        "Salário final: R$ " + salarioFinal.toFixed(2) + "\n" +
        "Situação do imposto: " + imposto
    );
}





function exercicio10() {
    let nome = prompt("Nome do cliente:");
    let saldo = Number(prompt("Saldo atual:"));
    let deposito = Number(prompt("Valor do depósito:"));
    
    saldo += deposito;

    let saque = Number(prompt("Valor do saque:"));

    if (saque <= saldo) {
        saldo -= saque;
    } else {
        alert("❌ Saque não realizado: saldo insuficiente!");
    }

    alert(
        "🏦 DADOS DA CONTA\n" +
        "Cliente: " + nome + "\n" +
        "Saldo final: R$ " + saldo.toFixed(2)
    );
}