let matriz = [];


function exibirMatriz() {
    let valorInicial = 5;
    let qtdLinhas = 3;
    let qtdColunas = 3;

    for (let i = 0; i < qtdLinhas; i++) {
        matriz[i] = [];

        for (let j = 0; j < qtdColunas; j++) {
            matriz[i][j] = valorInicial;
            valorInicial += 5;
        }
    }

    let tabela = document.querySelector('table');
    let conteudo = '';

    for (let i = 0; i < matriz.length; i++) {
        conteudo += `<tr>`;

        for (let j = 0; j < matriz[i].length; j++) {
            conteudo += `<td> ${matriz[i][j]} </td>`;
        }

        conteudo += `</tr>`;
    }

    tabela.innerHTML = conteudo;
}

function consultarMatriz() {
    let linha = Number(ipt_linha.value);
    let coluna = Number(ipt_coluna.value);

    let valor = matriz[linha][coluna];

    resposta.innerHTML = `O valor da ${linha} e da coluna ${coluna} é: ${valor}`;
}

function somaLinhaMatriz() {
    let linha = Number(ipt_linha.value);

    let soma = 0;

    for (let i = 0; i < matriz[linha].length; i++) {
        soma += matriz[linha][i];
    }

    resposta.innerHTML = `O valor da soma da linha ${linha} é ${soma}`;
}

function somaColunaMatriz() {
    let coluna = Number(ipt_coluna.value);

    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][coluna];
    }

    resposta.innerHTML = `O valor da soma da coluna ${coluna} é ${soma}`;
}