/*function exemploTinte() {
    let tintas = [];

    for (let i = 0; i < 5; i = i + 1) {
        let nometinta = prompt("digite o nome da tinta")
        tintas.push(nometinta)
    }

    let texto = " ";
    for (let i = 0; i < 5; i = i + 1) {
        texto += tintas[i] + "\n"
    }

    alert("Tintas:\n" + texto);
}


function chamada() {
    let alunos = []
    for (let i = 0; i < 13; i = i + 1) {
        let nomeAluno = prompt("digite o nome do aluno")
        alunos.push(nomeAluno)

    }

    alert("qtd de alunos; " + alunos.length)

    let resultado = "";
    for (let i = 0; i < 13; i = i + 1) {
        resultado += alunos[i] + "\n";
    }
    alert(resultado)

    let menornome = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    for (let i = 0; i < 13; i = i + 1) {
        let alunopercorrido = alunos[i];
        if (alunopercorrido.length < menornome.length) {
            menornome = alunopercorrido
        }
    }

    alert("ALUNO COM MENOS NOme " + menornome)

}



function exercicio01() {
    let cell = []
    for (let i = 0; i < 5; i = i + 1) {
        let nomecell = prompt("Digite os nomes dos smartphones")
        cell.push(nomecell)
    }

    let texto = ""
    for (let i = 0; i < 5; i = i + 1) {
        texto += cell[i] + "\n"
    }

    alert("lista de smartphones:\n" + cell)

}





function exercicio02() {
    let cell = []; let qntd = []
    for (let i = 0; i < 5; i = i + 1) {
        let nomecell = prompt("Digite o nome do smartphone")
        let qntdcell = parseInt(prompt("Digite a quantidade do smartphone"))
        cell.push(nomecell)
        qntd.push(qntdcell)
    }

    let texto = ""
    for (let i = 0; i < 5; i = i + 1) {
        texto += cell[i].padEnd(31, " ") + qntd[i] + "\n"
    }

    alert("lista de smartphones:\n" + texto)

}


function exercicio03() {
    let nomes = []; let quantidades = []; let stats = []
    for (let i = 0; i < 5; i = i + 1) {
        let nomeCell = prompt("Digite o nome do smartphone")
        let quanitdadeCell = parseInt(prompt("Digite a quantidade do smartphone"))
        nomes.push(nomeCell)
        quantidades.push(quanitdadeCell)

        let atualStatus = ""
        if (quantidades[i] >= 10) {
            atualStatus = "elevado"
        } else if (quantidades[i] >= 7) {
            atualStatus = "estavel"
        } else if (quantidades[1] >= 4) {
            atualStatus = "preocupante"
        } else {
            atualStatus = "urgente"
        }
        stats.push(atualStatus)
    }

    let texto = ""
    for (let i = 0; i < 5; i = i + 1) {
        texto += nomes[i].padEnd(31, " ") + quantidades[i] + stats[i] + "\n"
    }

    alert("lista de smartphones:\n" + texto)

}

function exercicio04() {
    let nomes = []; let quantidades = []; let stats = []; let valor = []; let menorQuantidadeEstoque = 99999999999999
    for (let i = 0; i < 5; i = i + 1) {
        let nomeCell = prompt("Digite o nome do smartphone")
        let precoCell = parseFloat(prompt("DIGITE O PREÇO DO SMARTPHONE"))
        let quanitdadeCell = parseInt(prompt("Digite a quantidade do smartphone"))
        valor.push(precoCell)
        nomes.push(nomeCell)
        quantidades.push(quanitdadeCell)
        if (maiorQuantidadeEstoque < quantidades[i]) { menorQuantidadeEstoque = quantidades[i] }
    }
    let atualStatus = ""
    if (quantidades[i] >= 10) {
        atualStatus = "elevado"
    } else if (quantidades[i] >= 7) {
        atualStatus = "estavel"
    } else if (quantidades[1] >= 4) {
        atualStatus = "preocupante"
    } else {
        atualStatus = "urgente"
    }
    stats.push(atualStatus)


    let texto = ""
    for (let i = 0; i < 5; i = i + 1) {
        texto += nomes[i] + valor[i] + "".padEnd(30, " ") + quantidades[i] + stats[i] + "\n"
    }
}
alert("lista de smartphones:\n" + texto + "\n" + "\n" + menorQuantidadeEstoque + "\n" + maiorQuantidadeEstoque)


function exercicio06() {
    let nomes = []
    let quantidades = []
    let stats = []
    let precosUnitarios = []

    for (let i = 0; i < 5; i = i + 1) {
        let nomeCell = prompt("Digite o nome do smartphone")
        let quantidadeCell = parseInt(prompt("Digite a quantidade em estoque"))
        let precoUnitario = parseFloat(prompt("Digite o preço unitário"))

        nomes.push(nomeCell)
        quantidades.push(quantidadeCell)
        precosUnitarios.push(precoUnitario)

        let atualStatus = ""

        if (quantidadeCell >= 10) {
            atualStatus = "elevado"
        } else if (quantidadeCell >= 7) {
            atualStatus = "estável"
        } else if (quantidadeCell >= 4) {
            atualStatus = "preocupante"
        } else {
            atualStatus = "urgente"
        }

        stats.push(atualStatus)
    }

    let menorQuantidade = quantidades[0]
    for (let i = 1; i < quantidades.length; i = i + 1) {
        if (quantidades[i] < menorQuantidade) {
            menorQuantidade = quantidades[i]
        }
    }

    let maiorQuantidade = quantidades[0]
    let indiceMaior = 0

    for (let i = 1; i < quantidades.length; i = i + 1) {
        if (quantidades[i] > maiorQuantidade) {
            maiorQuantidade = quantidades[i]
            indiceMaior = i
        }
    }

   
    let texto = ""
    for (let i = 0; i < 5; i = i + 1) {
        texto += nomes[i].padEnd(25, " ") +
                 quantidades[i].toString().padEnd(5, " ") +
                 "R$ " + precosUnitarios[i].toFixed(2).padEnd(10, " ") +
                 stats[i] + "\n"
    }

    alert(
        "Lista de smartphones:\n\n" + texto +
        "\nMenor quantidade em estoque: " + menorQuantidade +
        "\nProduto com maior estoque: " + nomes[indiceMaior] +"  " + maiorQuantidade
    )
}*/ 


function fibonacci(){
    let x = 1
    let y = 1 
    let z = ""
    let resultados = []

 for (let i = 0; i < 15; i = i + 1) {
    z = x + y;
    x = y;
    y = z;
     let resultado = z
resultados.push(resultado);
}

alert(resultados);
}

















