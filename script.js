// 1. VARIÁVEIS E DADOS (Formato snack_case)

// Array simples com seleções da Copa
const lista_selecoes = ["Estados Unidos", "México", "Canadá", "Brasil", "França", "Argentina"];

// Objeto representando uma seleção única
const selecao_favorita = {
    nome: "Brasil",
    continente: "América do Sul",
    titulos: 5,
    tecnico: "Dorival Júnior"
};

// Array de objetos com seleções e pontuações simuladas
const dados_pontuacao = [
    { nome: "Brasil", vitorias: 2, empates: 1, derrotas: 0 },
    { nome: "França", vitorias: 2, empates: 0, derrotas: 1 },
    { nome: "México", vitorias: 1, empates: 1, derrotas: 1 }
];

// 2. MANIPULAÇÃO DO DOM (querySelector)
const btn_mostrar = document.querySelector("#btnMostrarSelecoes");
const container_lista = document.querySelector("#listaSelecoesContainer");

const btn_destacar = document.querySelector("#btnDestacarCampeao");
// Seleciona a seção ou div das curiosidades para aplicar o destaque
const card_curiosidade = document.querySelector(".curiosidadesTitulo"); 

const btn_calcular = document.querySelector("#btnCalcularPontos");
const texto_resultado = document.querySelector("#resultadoPontos");

const meu_formulario = document.querySelector("form");
const mensagem_sucesso = document.querySelector("#mensagemSucesso");


// 3. FUNÇÕES (Com parâmetros e retorno)

// Função com parâmetro para alterar o estilo de um elemento
function aplicar_destaque_visual(elemento, cor_fundo) {
    elemento.style.backgroundColor = cor_fundo;
    elemento.style.padding = "15px";
    elemento.style.borderRadius = "8px";
    elemento.style.transition = "background-color 0.5s ease";
}

// Função com retorno para calcular a pontuação (Vitória = 3pts, Empate = 1pt)
function calcular_pontos_totais(vitorias, empates, derrotas) {
    const pontos = (vitorias * 3) + (empates * 1);
    return pontos;
}


// 4. INTERATIVIDADES E EVENTOS (addEventListener)

// Interatividade A: Botão "Mostrar Seleções" usando forEach
btn_mostrar.addEventListener("click", function() {
    // Limpa a lista antes de adicionar para não duplicar se clicar duas vezes
    container_lista.innerHTML = "";
    
    lista_selecoes.forEach(function(selecao) {
        const item_lista = document.createElement("li");
        item_lista.textContent = selecao;
        container_lista.appendChild(item_lista);
    });
});

// Interatividade B: Botão "Destacar Campeão Favorito" mudando classe/estilo
btn_destacar.addEventListener("click", function() {
    // Altera o estilo do bloco usando a função com parâmetro
    aplicar_destaque_visual(card_curiosidade, "#fff3cd"); // Tom amarelado de destaque
});

// Interatividade C: Botão "Calcular Pontuação" com if/else
btn_calcular.addEventListener("click", function() {
    // Simulando a entrada de dados baseada na primeira seleção do nosso array de objetos (Brasil)
    const dados_brasil = dados_pontuacao[0];
    
    // Chama a função com retorno
    const pontuacao_final = calcular_pontos_totais(dados_brasil.vitorias, dados_brasil.empates, dados_brasil.derrotas);
    
    // Estrutura de decisão if/else para personalizar a mensagem de alteração de texto
    if (pontuacao_final >= 6) {
        texto_resultado.textContent = `O ${dados_brasil.nome} está com ${pontuacao_final} pontos.
