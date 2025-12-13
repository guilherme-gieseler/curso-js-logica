function exemploWhile() {
    let indice = 0;

    while (indice < 3) {
        let nome = prompt("digite o nome");
        indice = indice + 1
    }
    alert("Obrigado")
}

function exemploMedia() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("digitar a nota"))
        somaNotas = somaNotas + somaNotas;
        indice = indice + 1;
    }

    const media = somanotas / 3;
    alert("media " + media)
}

/*function exemploVerificarAprovado() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("digite a nota"));
        somaNotas = somanotas + notas;
        indice = indice + 1;
    }
    const media = somanotas / 3;
    let status = "";
    if (media >= 7) {
        status = "aprovado"
    } { else status = "reprovado" }
    alert("media: " + media + "\nStatus: " + status)
}*/

function exemplomaiorvalor() {
    let indice = 0
    let maioraltura = 0
    while (indice < 5) {
        let altura = parseFloat(prompt("insira a altura"))
        if (altura > maioraltura) {
            maioraltura = altura;
        }
        indice = indice + 1
    }

    alert("maior altura é: " + maioraltura);
}

function exemplomenorvalor() {
    let indice = 0
    let menornumer = 999999999999999999999999999999999999

    while (indice < 4) {
        let numero = parseInt(prompt("digite o numero:"))
        if (numero < menornumer) { menornumer = numero; }
        indice = indice + 1
    }

    alert("menor numero é: " + menornumer);
}

function exemplodesscobrirquemmaiorvalor() {
    let indice = 0;
    let maiorpreco = 0;
    let produtomaior = "";
    while (indice < 3) {
        const produto = prompt("insira o nome do produto");
        const preco = parseFloat(prompt("insira o preço"));
        if (preco > maiorpreco) {
            maiorpreco = preco;
            produtomaior = produto
        }
        indice = indice + 1;
    }

    alert("o produto " + produtomaior + "tem o maior preço " + maiorpreco);
}

/*function exemploquantidadeporcategoria() {
    let indice = 0;
    let quantidadeAdulto = 0, quantidadeCrianca = 0, quantidadedeVelho = 0;
    while (indice < 5) {
        let idade = parseInt(prompt("digite a idade"));
        if (idade < 18) {
            quantidadeCrianca = quantidadeCrianca + 1;
        } else if (idade <= 64) { quantidadedeVelho = quantidadedeVelho + 1 }
        indice = indice + 1
    }
    alert("quantidade de crianças: " + quantidadeCrianca + "\nquantidade de adultos: " + quantidadeAdulto "quantidade de idoso: " + quantidadedeVelho)

}

function exemplorepitirquantidadedousuario() {
    let indice = 0, quantidadeP = 0, quantidadeM = 0, quantidadeG = 0;
    let quantidadeDesejada = parseInt(prompt("Digite quantidade de cadastros"))

    while (indice < quantidadeDesejada) {
        let tamanho = prompt("digite o tamanho P\M\G");
    }

    if (tamanho == "P") {
        quantidadeP = quantidadeP + 1
    } else if (tamanho == "M") {
        quantidadeM = quantidadeM + 1
    } else if (tamanho == "G") {
        quantidadeG = quantidadeG + 1
    }

    indice = indice + 1;

    alert("P: " + quantidadeP + "\n"
    "M: " + quantidadeM + "\n"
    "G: " + quantidadeG + "\n"
    )

}

function exemploatedigitarsair() {
    let nome = ""
    alert("digite o nome dos jogadores do time")
    while (nome != "sair") {
        nome = prompt("digite outro nome ou *sair* para encerrar")
    }

}

function exemploatedigitarsaircomquantidade() {
    let nome = ""
    let quantidadedejogadores = 0

    alert("digite o ome dos jogadores")

    while (nome != "sair") {
        nome = prompt("digite outro nome ou *sair* para encerrar")
        if (nome != "sair") {
            quantidadedejogadores = quantidadedejogadores + 1
        }
        alert("quantidade de jogadores: " + quantidadedejogadores)
    }

}*/

function exemploMenu() {
    let menu = undefined
    let numero1 = parseInt(prompt("digite o numero 1*"))
    let numero2 = parseInt(prompt("digite o numero 2*"))

    while (menu != 10) {
        menu = parseInt(prompt(`
            Menu:
            1 - somar
            2 - subtrair
            3 - multiplicar
            4 - dividir 
            8 - alterar numero 1*
            9 - alterar numero 2*
            10 - SAIR`))

        if (menu === 1) {
            const soma = numero1 + numero2;
            alert("soma: " + soma)
        } else if (menu === 2) {
            const subtracao = numero1 - numero2;
            alert("subtraçao: " + subtracao);
        } else if (menu === 3) {
            const multiplicacao = numero1 * numero2;
            alert("multiplicaçao: " + multiplicacao);
        } else if (menu === 4) {
            const divisao = numero1 / numero2;
            alert("divisao: " + divisao);
        } else if (menu === 8) {
            numero1 = parseInt(prompt("digite o numero 1*", numero1))
        } else if (menu === 9) {
            numero2 = parseInt(prompt("digite o numero 2*", numero2))
        }

    }
}

function exemploColaboradores() {
    // ✔️ Cadastrar quantos colaboradores eu desejar
    // ✔️ Pedir:
    //  ✔️  - valor hora
    //  ✔️  - quantidade horas
    //  ✔️ - setor [Produção, Qualidade, Financeiro]
    // ✔️ Calcular o salário bruto
    // ✔️ Calcular o salário líquido
    // ✔️ Maior salário líquido
    // ✔️ Menor salário bruto
    // ✔️ Média dos salários brutos
    // ✔️ Nome pessoa que trabalha mais horas
    // Quantidade de pessoas por Setor

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de colaboradores"));
    let maiorSalarioLiquido = 0;
    let menorSalarioBruto = 99999999;
    let somaSalarioBrutos = 0;
    let maiorQuantidadeHoras = 0;
    let nomeMaiorQuantidadeHoras = "";
    let quantidadeProducao = 0, quantidadeQualidade = 0, quantidadeFinanceiro = 0;
    let quantidadeOutroSetor = 0;

    let indice = 0;

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome do colaborador");
        let valorHora = parseFloat(prompt("Digite o valor da hora"));
        let horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let setor = prompt(`
Digite o nome do setor:
Financeiro
Produção
Qualidade`);
        let salarioBruto = valorHora * horasTrabalhadas;
        let inss = salarioBruto * 0.08; // Calcular 8% de inss
        let ir = salarioBruto * 0.275; // Calcular 27.5% de imposto de renda
        let valeRefeicao = 1400;

        let salarioLiquido = salarioBruto - inss - ir + valeRefeicao;
        alert(
            "Folha de Pagamento\n\n" +
            "Colaborador: " + nome + "\n" +
            "Setor: " + setor + "\n\n" +
            "Valor da hora: R$ " + valorHora.toFixed(2) + "\n" +
            "Horas trabalhadas: " + horasTrabalhadas + "\n\n" +
            "Salário bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
            "Desconto INSS (8%): R$ " + inss.toFixed(2) + "\n" +
            "Desconto IR (27,5%): R$ " + ir.toFixed(2) + "\n" +
            "Vale refeição: R$ " + valeRefeicao.toFixed(2) + "\n\n" +
            "Salário líquido: R$ " + salarioLiquido.toFixed(2)
        );

        if (salarioLiquido > maiorSalarioLiquido) {
            maiorSalarioLiquido = salarioLiquido;
        }

        if (salarioBruto < menorSalarioBruto) {
            menorSalarioBruto = salarioBruto;
        }

        if (horasTrabalhadas > maiorQuantidadeHoras) {
            maiorQuantidadeHoras = horasTrabalhadas;
            nomeMaiorQuantidadeHoras = nome;
        }

        if (setor === "Qualidade") {
            quantidadeQualidade = quantidadeQualidade + 1;
        } else if (setor === "Financeiro") {
            quantidadeFinanceiro = quantidadeFinanceiro + 1;
        } else if (setor === "Produção") {
            quantidadeProducao = quantidadeProducao + 1;
        } else {
            quantidadeOutroSetor = quantidadeOutroSetor + 1;
        }

        somaSalarioBrutos = somaSalarioBrutos + salarioBruto;

        indice = indice + 1;// Incrementar
    }

    let mediaSalarioBrutos = somaSalarioBrutos / quantidadeDesejada;
    alert(
        "RESUMO GERAL DOS COLABORADORES\n\n" +

        "Maior salário líquido: R$ " + maiorSalarioLiquido.toFixed(2) + "\n" +
        "Menor salário bruto: R$ " + menorSalarioBruto.toFixed(2) + "\n" +
        "Média dos salários brutos: R$ " + mediaSalarioBrutos.toFixed(2) + "\n\n" +

        "Maior quantidade de horas trabalhadas: " + maiorQuantidadeHoras + "\n" +
        "Colaborador com mais horas: " + nomeMaiorQuantidadeHoras + "\n\n" +

        "Quantidade por setor:\n" +
        "Financeiro: " + quantidadeFinanceiro + "\n" +
        "Produção: " + quantidadeProducao + "\n" +
        "Qualidade: " + quantidadeQualidade + "\n" +
        "Outros setores: " + quantidadeOutroSetor
    );
}


//EXERCICIOS

/* 
1. Criar uma função exercicio01()
- Pedir 5 nomes de alunos.
- Usar uma variável indice começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir o nome do aluno com prompt.
    - Mostrar um alert com "Aluno cadastrado: " + nome.
    - Incrementar o indice.
- Ao final, mostrar um alert "Cadastro finalizado".*/

function exercicio1() {
    let indice = 0;

    while (indice < 5) {
        let nome = prompt("digite o nome");
       alert("aluno cadastrado: " + nome)
         indice = indice + 1
     
    }
    alert("Cadastro finalizado")
}

/*2. Criar uma função exercicio02()
- Pedir 4 cores favoritas.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 4:
    - Pedir uma cor (ex: "Digite uma cor").
    - Mostrar um alert com "Cor escolhida: " + cor.
    - Incrementar o indice.
- Ao final, mostrar um alert "Obrigado por informar suas cores favoritas".*/

function exercicio2() {
let indice = 0
while (indice < 4){
    let cor = prompt("Digite uma cor")
    alert("cor escolhida: " + cor)
    indice = indice + 1
}
alert ("Obrigado por informar suas cores favoritas")
}

/*3. Criar uma função exercicio03()
- Pedir 3 nomes de cidades que o usuário quer viajar.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome da cidade.
    - Mostrar um alert com "Destino " + (indice + 1) + ": " + cidade.
    - Incrementar o indice.
- Ao final, mostrar um alert "Planejamento de viagem concluído".*/

function exercicio3() {
let indice = 0
while (indice < 3){ let destino = prompt("Digite uma cidade")
 alert("Destino: " + destino)
indice= indice + 1
}
alert ("Planejamento de viagem concluído")
}

/*4. Criar uma função exercicio04()
- Pedir 5 números inteiros.
- Usar while com indice começando em 0.
- Criar uma variável soma começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir um número com prompt.
    - Converter para inteiro (parseInt).
    - Somar na variável soma.
    - Incrementar o indice.
- Ao final, mostrar um alert com "Soma total: " + soma.*/

function exercicio4() {
let indice = 0, soma = 0
let numero1 = parseInt(prompt("digite o numero 1*"))
let numero2 = parseInt(prompt("digite o numero 2*"))
let numero3 = parseInt(prompt("digite o numero 3*"))
let numero4 = parseInt(prompt("digite o numero 4*"))
let numero5 = parseInt(prompt("digite o numero 5*"))
while (indice < 5){ const soma = numero1 + numero2 + numero3 + numero4 + numero5 ;
         }   alert("soma total: " + soma)

}

/*5. Criar uma função exercicio05()
- Pedir 3 filmes favoritos.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome do filme.
    - Pedir o ano de lançamento.
    - Mostrar um alert com "Filme: [nome] - Ano: [ano]".
    - Incrementar o indice.
- Ao final, mostrar um alert "Lista de filmes cadastrada com sucesso".*/

function exercicio5(){
let indice = 0
while (indice < 3 ){let filme = prompt("Nome do filme")
    let ano = prompt("Ano de lançamento")
alert("Filme: " + filme + "\nDe Ano: " + ano)
    indice= indice + 1 

}
alert("Lista de filmes cadastrada com sucesso")

}