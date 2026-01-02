function exercicio01() {
    let indice = 0;
    while (indice < 5) {
        let nome = prompt("Digite o nome do aluno:");
        alert("Aluno cadastrado: " + nome);
        indice++;
    }
    alert("Cadastro finalizado");
}

function exercicio02() {
    let indice = 0;
    while (indice < 4) {
        let cor = prompt("Digite uma cor:");
        alert("Cor escolhida: " + cor);
        indice++;
    }
    alert("Obrigado por informar suas cores favoritas");
}

function exercicio03() {
    let indice = 0;
    while (indice < 3) {
        let cidade = prompt("Digite o nome da cidade:");
        alert("Destino " + (indice + 1) + ": " + cidade);
        indice++;
    }
    alert("Planejamento de viagem concluído");
}

function exercicio04() {
    let indice = 0;
    let soma = 0;
    while (indice < 5) {
        soma += parseInt(prompt("Digite um número inteiro:"));
        indice++;
    }
    alert("Soma total: " + soma);
}

function exercicio05() {
    let indice = 0;
    while (indice < 3) {
        let filme = prompt("Digite o nome do filme:");
        let ano = prompt("Digite o ano:");
        alert("Filme: " + filme + " - Ano: " + ano);
        indice++;
    }
    alert("Lista de filmes cadastrada com sucesso");
}

function exercicio06() {
    let indice = 0;
    let soma = 0;
    while (indice < 5) {
        soma += parseFloat(prompt("Digite um número:"));
        indice++;
    }
    alert("Soma: " + soma + "\nMédia: " + (soma / 5));
}

function exercicio07() {
    let indice = 0;
    let total = 0;
    while (indice < 6) {
        total += parseFloat(prompt("Digite o valor da venda:"));
        indice++;
    }
    alert("Total das vendas: " + total + "\nComissão: " + (total * 0.05));
}

function exercicio08() {
    let indice = 0;
    while (indice < 10) {
        let n = parseInt(prompt("Digite um número:"));
        alert(n % 2 === 0 ? "Par" : "Ímpar");
        indice++;
    }
}

function exercicio09() {
    let n = parseInt(prompt("Digite um número:"));
    let i = 1;
    while (i <= 10) {
        alert(n + " x " + i + " = " + (n * i));
        i++;
    }
}

function exercicio10() {
    let indice = 0, pares = 0, impares = 0;
    while (indice < 10) {
        let n = parseInt(prompt("Digite um número:"));
        n % 2 === 0 ? pares++ : impares++;
        indice++;
    }
    alert("Pares: " + pares + "\nÍmpares: " + impares);
}

function exercicio11() {
    let i = 0, soma = 0;
    while (i < 4) {
        soma += parseFloat(prompt("Digite a nota:"));
        i++;
    }
    let media = soma / 4;
    alert("Média: " + media + "\n" + (media >= 7 ? "Aprovado" : "Reprovado"));
}

function exercicio12() {
    let i = 0, total = 0;
    while (i < 5) {
        total += parseFloat(prompt("Valor do produto:"));
        i++;
    }
    let desconto = total > 200 ? total * 0.1 : 0;
    alert("Total: " + total + "\nCom desconto: " + (total - desconto));
}

function exercicio13() {
    let i = 0, soma = 0;
    while (i < 6) {
        soma += parseInt(prompt("Digite a idade:"));
        i++;
    }
    let media = soma / 6;
    alert("Média: " + media + "\n" + (media >= 18 ? "Maior de idade" : "Menor de idade"));
}

function exercicio14() {
    let i = 0;
    let maior = 0;
    let menor = Infinity;
    let soma = 0;

    while (i < 5) {
        let salario = parseFloat(prompt("Digite o salário:"));
        soma += salario;
        if (salario > maior) maior = salario;
        if (salario < menor) menor = salario;
        i++;
    }

    let media = soma / 5;
    alert(
        "Maior: " + maior +
        "\nMenor: " + menor +
        "\nMédia: " + media +
        "\n" + (media > 3000 ? "Salários acima da média" : "Salários dentro da média")
    );
}

function exercicio15() {
    let i = 0, total = 0;
    while (i < 4) {
        total += parseFloat(prompt("Digite o valor da conta:"));
        i++;
    }
    let renda = parseFloat(prompt("Digite sua renda mensal:"));
    let perc = (total / renda) * 100;
    alert(
        "Total contas: " + total +
        "\nPercentual: " + perc.toFixed(2) + "%" +
        "\n" + (perc > 50 ? "Orçamento comprometido" : "Orçamento saudável")
    );
}

function exercicio16() {
    let i = 0, maior = 0;
    while (i < 5) {
        let altura = parseFloat(prompt("Digite a altura:"));
        if (altura > maior) maior = altura;
        i++;
    }
    alert("Maior altura: " + maior);
}

function exercicio17() {
    let i = 0, menor = Infinity;
    while (i < 4) {
        let peso = parseFloat(prompt("Digite o peso:"));
        if (peso < menor) menor = peso;
        i++;
    }
    alert("Menor peso: " + menor);
}

function exercicio18() {
    let i = 0;
    let maiorIdade = 0;
    let nomeMaior = "";

    while (i < 5) {
        let nome = prompt("Nome:");
        let idade = parseInt(prompt("Idade:"));
        if (idade > maiorIdade) {
            maiorIdade = idade;
            nomeMaior = nome;
        }
        i++;
    }
    alert("Mais velho: " + nomeMaior + " - " + maiorIdade);
}

function exercicio19() {
    let i = 0, maior = 0, menor = Infinity;
    while (i < 6) {
        let preco = parseFloat(prompt("Preço do produto:"));
        if (preco > maior) maior = preco;
        if (preco < menor) menor = preco;
        i++;
    }
    alert("Maior preço: " + maior + "\nMenor preço: " + menor);
}

function exercicio20() {
    let i = 0, maiorSalario = 0, nomeMaior = "";
    while (i < 4) {
        let nome = prompt("Nome:");
        let salario = parseFloat(prompt("Salário:"));
        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaior = nome;
        }
        i++;
    }
    alert("Maior salário: " + nomeMaior + " - " + maiorSalario);
}

function exercicio21() {
    let i = 0, maior = -Infinity, menor = Infinity;
    while (i < 7) {
        let temp = parseFloat(prompt("Digite a temperatura do dia:"));
        if (temp > maior) maior = temp;
        if (temp < menor) menor = temp;
        i++;
    }
    alert("Maior temperatura: " + maior + "\nMenor temperatura: " + menor);
}

function exercicio22() {
    let i = 0, menorPreco = Infinity, nomeMenor = "";
    while (i < 5) {
        let nome = prompt("Nome do produto:");
        let preco = parseFloat(prompt("Preço:"));
        if (preco < menorPreco) {
            menorPreco = preco;
            nomeMenor = nome;
        }
        i++;
    }
    alert("Produto mais barato: " + nomeMenor + " - R$ " + menorPreco);
}

function exercicio23() {
    let i = 0, crianca = 0, adolescente = 0, adulto = 0, idoso = 0;
    while (i < 8) {
        let idade = parseInt(prompt("Digite a idade:"));
        if (idade < 12) crianca++;
        else if (idade <= 17) adolescente++;
        else if (idade <= 59) adulto++;
        else idoso++;
        i++;
    }
    alert(
        "Crianças: " + crianca +
        "\nAdolescentes: " + adolescente +
        "\nAdultos: " + adulto +
        "\nIdosos: " + idoso
    );
}

function exercicio24() {
    let i = 0, rep = 0, rec = 0, apr = 0;
    while (i < 10) {
        let nota = parseFloat(prompt("Digite a nota:"));
        if (nota < 5) rep++;
        else if (nota < 7) rec++;
        else apr++;
        i++;
    }
    alert(
        "Reprovados: " + rep +
        "\nRecuperação: " + rec +
        "\nAprovados: " + apr
    );
}

function exercicio25() {
    let i = 0, a = 0, b = 0, c = 0;
    while (i < 7) {
        let salario = parseFloat(prompt("Digite o salário:"));
        if (salario <= 2000) a++;
        else if (salario <= 5000) b++;
        else c++;
        i++;
    }
    alert(
        "Até 2000: " + a +
        "\n2001 a 5000: " + b +
        "\nAcima de 5000: " + c
    );
}

function exercicio26() {
    let i = 0, frio = 0, agrad = 0, quente = 0;
    while (i < 6) {
        let t = parseFloat(prompt("Temperatura:"));
        if (t < 15) frio++;
        else if (t <= 25) agrad++;
        else quente++;
        i++;
    }
    alert(
        "Frios: " + frio +
        "\nAgradáveis: " + agrad +
        "\nQuentes: " + quente
    );
}

function exercicio27() {
    let i = 0, ruim = 0, regular = 0, bom = 0;
    while (i < 10) {
        let av = parseInt(prompt("Avaliação (1 a 5):"));
        if (av <= 2) ruim++;
        else if (av === 3) regular++;
        else bom++;
        i++;
    }
    alert(
        "Ruim: " + ruim +
        "\nRegular: " + regular +
        "\nBom: " + bom
    );
}

function exercicio28() {
    let i = 0, neg = 0, zero = 0, pos = 0;
    while (i < 8) {
        let n = parseInt(prompt("Digite um número:"));
        if (n < 0) neg++;
        else if (n === 0) zero++;
        else pos++;
        i++;
    }
    alert(
        "Negativos: " + neg +
        "\nZero: " + zero +
        "\nPositivos: " + pos
    );
}

function exercicio29() {
    let i = 0, leve = 0, media = 0, pesada = 0;
    while (i < 5) {
        let peso = parseFloat(prompt("Peso da encomenda (kg):"));
        if (peso < 2) leve++;
        else if (peso <= 10) media++;
        else pesada++;
        i++;
    }
    alert(
        "Leves: " + leve +
        "\nMédias: " + media +
        "\nPesadas: " + pesada
    );
}

function exercicio30() {
    let qtd = parseInt(prompt("Quantas pelúcias deseja cadastrar?"));
    let i = 0, mickey = 0, minnie = 0, donald = 0;
    while (i < qtd) {
        let p = prompt("Personagem (MICKEY/MINNIE/DONALD):").toUpperCase();
        if (p === "MICKEY") mickey++;
        else if (p === "MINNIE") minnie++;
        else if (p === "DONALD") donald++;
        i++;
    }
    alert(
        "Mickey: " + mickey +
        "\nMinnie: " + minnie +
        "\nDonald: " + donald
    );
}

function exercicio31() {
    let qtd = parseInt(prompt("Quantidade de clientes:"));
    let i = 0, c = 0, d = 0, di = 0;
    while (i < qtd) {
        let f = prompt("Pagamento (CRÉDITO/DÉBITO/DINHEIRO):").toUpperCase();
        if (f === "CRÉDITO") c++;
        else if (f === "DÉBITO") d++;
        else di++;
        i++;
    }
    alert("Crédito: " + c + "\nDébito: " + d + "\nDinheiro: " + di);
}

function exercicio32() {
    let qtd = parseInt(prompt("Ingressos vendidos:"));
    let i = 0, inteira = 0, meia = 0, cortesia = 0;
    while (i < qtd) {
        let t = prompt("Tipo (INTEIRA/MEIA/CORTESIA):").toUpperCase();
        if (t === "INTEIRA") inteira++;
        else if (t === "MEIA") meia++;
        else cortesia++;
        i++;
    }
    alert("Inteira: " + inteira + "\nMeia: " + meia + "\nCortesia: " + cortesia);
}

function exercicio33() {
    let qtd = parseInt(prompt("Quantidade de lanches:"));
    let i = 0, h = 0, p = 0, hd = 0;
    while (i < qtd) {
        let t = prompt("Tipo (HAMBURGUER/PIZZA/HOTDOG):").toUpperCase();
        if (t === "HAMBURGUER") h++;
        else if (t === "PIZZA") p++;
        else hd++;
        i++;
    }
    alert("Hambúrguer: " + h + "\nPizza: " + p + "\nHotdog: " + hd);
}

function exercicio34() {
    let qtd = parseInt(prompt("Quantidade de livros:"));
    let i = 0, f = 0, e = 0, inf = 0;
    while (i < qtd) {
        let c = prompt("Categoria (FICÇÃO/ESTUDO/INFANTIL):").toUpperCase();
        if (c === "FICÇÃO") f++;
        else if (c === "ESTUDO") e++;
        else inf++;
        i++;
    }
    alert("Ficção: " + f + "\nEstudo: " + e + "\nInfantil: " + inf);
}

function exercicio35() {
    let nome, cont = 0;
    while (true) {
        nome = prompt("Digite um personagem ou 'sair':");
        if (nome.toLowerCase() === "sair") break;
        alert("Personagem cadastrado: " + nome);
        cont++;
    }
    alert("Total cadastrados: " + cont);
}

function exercicio36() {
    let total = 0, rpg = 0;
    while (true) {
        let nome = prompt("Nome do jogo ou 'sair':");
        if (nome.toLowerCase() === "sair") break;
        let genero = prompt("Gênero do jogo:");
        if (genero.toUpperCase() === "RPG") rpg++;
        total++;
    }
    alert("Jogos cadastrados: " + total + "\nJogos RPG: " + rpg);
}

function exercicio37() {
    let b = 0, m = 0, a = 0;
    while (true) {
        let nome = prompt("Herói Marvel ou 'sair':");
        if (nome.toLowerCase() === "sair") break;
        let poder = prompt("Poder (BAIXO/MEDIO/ALTO):").toUpperCase();
        if (poder === "BAIXO") b++;
        else if (poder === "MEDIO") m++;
        else a++;
    }
    alert("Baixo: " + b + "\nMédio: " + m + "\nAlto: " + a);
}

function exercicio38() {
    let soma = 0, cont = 0;
    while (true) {
        let serie = prompt("Nome da série ou 'sair':");
        if (serie.toLowerCase() === "sair") break;
        soma += parseFloat(prompt("Nota (0 a 10):"));
        cont++;
    }
    alert("Séries cadastradas: " + cont + "\nMédia: " + (soma / cont));
}

function exercicio39() {
    let total = 0, jogou = 0;
    while (true) {
        let item = prompt("Console/Jogo retrô ou 'sair':");
        if (item.toLowerCase() === "sair") break;
        let r = prompt("Já jogou? (SIM/NÃO):").toUpperCase();
        if (r === "SIM") jogou++;
        total++;
    }
    alert("Itens: " + total + "\nJá jogou: " + jogou);
}

function exercicio40() {
    let distancia = parseFloat(prompt("Distância (km):"));
    let litros = parseFloat(prompt("Consumo (litros):"));
    let opcao;
    while (opcao !== 10) {
        opcao = parseInt(prompt("1-Consumo\n2-Custo\n3-Alterar distância\n4-Alterar litros\n10-Sair"));
        if (opcao === 1) alert("Consumo médio: " + (distancia / litros));
        if (opcao === 2) {
            let preco = parseFloat(prompt("Preço do litro:"));
            alert("Custo: " + (litros * preco));
        }
        if (opcao === 3) distancia = parseFloat(prompt("Nova distância:"));
        if (opcao === 4) litros = parseFloat(prompt("Novos litros:"));
    }
}

function exercicio41() {
    let saldo = parseFloat(prompt("Saldo inicial:"));
    let opcao;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1 - Depositar\n2 - Sacar\n3 - Consultar saldo\n10 - Sair"
        ));

        if (opcao === 1) {
            saldo += parseFloat(prompt("Valor do depósito:"));
        } 
        else if (opcao === 2) {
            let saque = parseFloat(prompt("Valor do saque:"));
            if (saque <= saldo) saldo -= saque;
            else alert("Saldo insuficiente");
        } 
        else if (opcao === 3) {
            alert("Saldo atual: R$ " + saldo);
        }
    }
    alert("Saldo final: R$ " + saldo);
}

function exercicio42() {
    let opcao;
    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1 - Celsius → Fahrenheit\n2 - Fahrenheit → Celsius\n10 - Sair"
        ));

        if (opcao === 1) {
            let c = parseFloat(prompt("Temperatura em Celsius:"));
            alert((c * 9/5) + 32);
        } 
        else if (opcao === 2) {
            let f = parseFloat(prompt("Temperatura em Fahrenheit:"));
            alert((f - 32) * 5/9);
        }
    }
}

function exercicio43() {
    let opcao;
    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1 - Calcular IMC\n2 - Instruções\n10 - Sair"
        ));

        if (opcao === 1) {
            let peso = parseFloat(prompt("Peso:"));
            let altura = parseFloat(prompt("Altura:"));
            alert("IMC: " + (peso / (altura * altura)).toFixed(2));
        } 
        else if (opcao === 2) {
            alert("IMC é o Índice de Massa Corporal.");
        }
    }
}

function exercicio44() {
    let estoque = 0;
    let opcao;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1 - Adicionar\n2 - Remover\n3 - Consultar\n10 - Sair"
        ));

        if (opcao === 1) estoque += parseInt(prompt("Quantidade:"));
        else if (opcao === 2) {
            let r = parseInt(prompt("Quantidade:"));
            if (r <= estoque) estoque -= r;
            else alert("Estoque insuficiente");
        }
        else if (opcao === 3) alert("Estoque: " + estoque);
    }
    alert("Estoque final: " + estoque);
}

function exercicio45() {
    let total = 0;
    let opcao;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1 - Hambúrguer (15)\n2 - Pizza (25)\n3 - Refrigerante (8)\n4 - Total parcial\n10 - Finalizar"
        ));

        if (opcao === 1) total += 15;
        else if (opcao === 2) total += 25;
        else if (opcao === 3) total += 8;
        else if (opcao === 4) alert("Total: R$ " + total);
    }
    alert("Pedido finalizado: R$ " + total);
}

function exercicio46() {
    let soma = 0, cont = 0;
    let opcao;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1 - Cadastrar nota\n2 - Ver média\n3 - Ver quantidade\n10 - Sair"
        ));

        if (opcao === 1) {
            soma += parseFloat(prompt("Nota:"));
            cont++;
        }
        else if (opcao === 2) {
            alert("Média: " + (soma / cont));
        }
        else if (opcao === 3) {
            alert("Notas cadastradas: " + cont);
        }
    }
}

function exercicio47() {
    let ruim = 0, regular = 0, bom = 0;
    let opcao;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1 - Ruim\n2 - Regular\n3 - Bom\n4 - Ver resumo\n10 - Sair"
        ));

        if (opcao === 1) ruim++;
        else if (opcao === 2) regular++;
        else if (opcao === 3) bom++;
        else if (opcao === 4) {
            alert("Ruim: " + ruim + "\nRegular: " + regular + "\nBom: " + bom);
        }
    }
}

function exercicio48() {
    let maior = 0, menor = Infinity, soma = 0, cont = 0;
    let c = 0, d = 0, p = 0;

    while (true) {
        let nome = prompt("Cliente ou 'sair':");
        if (nome.toLowerCase() === "sair") break;

        let valor = parseFloat(prompt("Valor da compra:"));
        let forma = prompt("Pagamento (CRÉDITO/DÉBITO/PIX):").toUpperCase();

        soma += valor;
        cont++;

        if (valor > maior) maior = valor;
        if (valor < menor) menor = valor;

        if (forma === "CRÉDITO") c++;
        else if (forma === "DÉBITO") d++;
        else p++;
    }

    alert(
        "Maior: " + maior +
        "\nMenor: " + menor +
        "\nMédia: " + (soma / cont) +
        "\nCrédito: " + c +
        "\nDébito: " + d +
        "\nPIX: " + p
    );
}

function exercicio49() {
    let somaIdade = 0;
    let maiorIMC = 0, menorIMC = Infinity;
    let nomeMaior = "", nomeMenor = "";
    let abaixo = 0, normal = 0, acima = 0;
    let cont = 0;

    while (true) {
        let nome = prompt("Nome do aluno ou 'sair':");
        if (nome.toLowerCase() === "sair") break;

        let idade = parseInt(prompt("Idade:"));
        let peso = parseFloat(prompt("Peso:"));
        let altura = parseFloat(prompt("Altura:"));
        let imc = peso / (altura * altura);

        somaIdade += idade;
        cont++;

        if (imc < 18.5) abaixo++;
        else if (imc < 25) normal++;
        else acima++;

        if (imc > maiorIMC) {
            maiorIMC = imc;
            nomeMaior = nome;
        }

        if (imc < menorIMC) {
            menorIMC = imc;
            nomeMenor = nome;
        }
    }

    alert(
        "Média idade: " + (somaIdade / cont) +
        "\nAbaixo peso: " + abaixo +
        "\nPeso normal: " + normal +
        "\nAcima peso: " + acima +
        "\nMaior IMC: " + nomeMaior +
        "\nMenor IMC: " + nomeMenor
    );
}

function exercicio50() {
    let maior = 0, menor = Infinity, soma = 0, cont = 0;
    let filme = 0, serie = 0, anime = 0;

    while (true) {
        let nome = prompt("Título ou 'sair':");
        if (nome.toLowerCase() === "sair") break;

        let tipo = prompt("Tipo (FILME/SÉRIE/ANIME):").toUpperCase();
        let nota = parseFloat(prompt("Nota (0 a 10):"));

        soma += nota;
        cont++;

        if (nota > maior) maior = nota;
        if (nota < menor) menor = nota;

        if (tipo === "FILME") filme++;
        else if (tipo === "SÉRIE") serie++;
        else anime++;
    }

    alert(
        "Maior nota: " + maior +
        "\nMenor nota: " + menor +
        "\nMédia: " + (soma / cont) +
        "\nFilmes: " + filme +
        "\nSéries: " + serie +
        "\nAnimes: " + anime
    );
}