window.onload = () =>{
  "use strict";
  if("serviceWorker" in navigator){
      navigator.serviceWorker.register("./sw.js");
  }
}





document.getElementById('bot').addEventListener('click', function() {
const valorCampo = document.getElementById('nome').value;
const resultadoElemento = document.getElementById('nome2');
resultadoElemento.textContent = ` ${valorCampo}`;

})

document.getElementById('bot1').addEventListener('click', function() {
const valorCampo = document.getElementById('nome1').value;
const resultadoElemento = document.getElementById('nome3');
resultadoElemento.textContent = ` ${valorCampo}`;

})
const nome = document.getElementById('nome');
const nome1 = document.getElementById('nome1');
const nome2 = document.getElementById('nome2');
const nome3 = document.getElementById('nome3');
const pontosEquipe1Elemento = document.getElementById('pontosEquipe1');
const pontosEquipe2Elemento = document.getElementById('pontosEquipe2');
const vitoriasEquipe1Elemento = document.getElementById('vitoriasEquipe1');
const vitoriasEquipe2Elemento = document.getElementById('vitoriasEquipe2');
let partidaAtual = 1;
let pontosEquipe1 = 0;
let pontosEquipe2 = 0;
let vitoriasEquipe1 = 0;
let vitoriasEquipe2 = 0;
let rodadaAtual = 1;


function atualizarPontuacao() {
pontosEquipe1Elemento.textContent = pontosEquipe1;
pontosEquipe2Elemento.textContent = pontosEquipe2;
}

function atualizarVitorias() {
vitoriasEquipe1Elemento.textContent = vitoriasEquipe1;
vitoriasEquipe2Elemento.textContent = vitoriasEquipe2;
}

function vencerRodada(pontos) {
if (pontosEquipe1 >= pontos) {
  vitoriasEquipe1++;
} else if (pontosEquipe2 >= pontos) {
  vitoriasEquipe2++;
}


atualizarVitorias();

pontosEquipe1 = 0;
pontosEquipe2 = 0;
atualizarPontuacao();

rodadaAtual++;
if (rodadaAtual > 3) {
  alert('Jogo finalizado. Pontuação total:');
  alert(`Equipe 1: ${vitoriasEquipe1} vitórias`);
  alert(`Equipe 2: ${vitoriasEquipe2} vitórias`);
}
}

document.getElementById('ponto1').addEventListener('click', () => {
pontosEquipe1 += 1;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('ponto3').addEventListener('click', () => {
pontosEquipe1 += 3;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('ponto6').addEventListener('click', () => {
pontosEquipe1 += 6;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('ponto9').addEventListener('click', () => {
pontosEquipe1 += 9;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('ponto12').addEventListener('click', () => {
pontosEquipe1 += 12;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('reset').addEventListener('click', () => {
pontosEquipe1 = 0;
pontosEquipe2 = 0;
vitoriasEquipe1 = 0;
vitoriasEquipe2 = 0;

atualizarPontuacao();
rodadaAtual = 1;
nome.value = ''; // Limpa o nome da equipe 1
nome1.value = ''; // Limpa o nome da equipe 2
nome2.textContent = 'Equipe 1'; // Reseta o nome da equipe 1 no cabeçalho
nome3.textContent = 'Equipe 2'; // Reseta o nome da equipe 2 no cabeçalho
});
document.getElementById('ponto1Equipe2').addEventListener('click', () => {
pontosEquipe2 += 1;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('ponto3Equipe2').addEventListener('click', () => {
pontosEquipe2 += 3;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('ponto6Equipe2').addEventListener('click', () => {
pontosEquipe2 += 6;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('ponto9Equipe2').addEventListener('click', () => {
pontosEquipe2 += 9;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('ponto12Equipe2').addEventListener('click', () => {
pontosEquipe2 += 12;
atualizarPontuacao();
if (pontosEquipe1 >= 12 || pontosEquipe2 >= 12) {
  vencerRodada(12);
}
});

document.getElementById('reset1').addEventListener('click', () => {
pontosEquipe1 = 0;
pontosEquipe2 = 0;
vitoriasEquipe1 = 0;
vitoriasEquipe2 = 0;
atualizarPontuacao();
rodadaAtual = 1;

});

