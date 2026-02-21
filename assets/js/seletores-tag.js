let inputsTamanhoFonte = document.getElementsByName("fonte")
for (let i = 0; i < inputsTamanhoFonte.length; i += 1 ){
    const inputTamanhoFonte = inputsTamanhoFonte[i]
    inputTamanhoFonte.onchange = campoFonteAlterado;  //1pega o input da posiçao atual (indice i) dentro da lista ; 2 define que, quando esse input mudar de valor ,a funçao campoFonteAlterado sera exectada
}

function campoFonteAlterado(event){
    let tamanho = event.target.value;
    alterarTamanhoFonte(tamanho);  //1funcao chamada automaticamente quando algu input de fonte udar (evente "change") 2 pega o valor do input que disparou o evento (por exemplo;12,16,20)3chama a funcao responsavel por aplicar o tamanho da fonte no paragrafo
}

function alterarTamanhoFonte(tamanho) {
    const tagP = document.getElementsByTagName("p")[0];
    tagP.style.fontSize = `${tamanho}px`; //define o font size do paragrafo usando o template tring  adicionando "px" ao valor do tamanho

}

