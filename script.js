function jokenpo(escolha) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

  if (escolha === escolhaComputador) {
    document.getElementById(
      'resultado'
    ).innerText = `Empate! Você escolheu ${escolha} e o computador escolheu ${escolhaComputador}`;
  } else if (
    (escolha === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolha === 'papel' && escolhaComputador === 'pedra') ||
    (escolha === 'tesoura' && escolhaComputador === 'papel')
  ) {
    document.getElementById(
      'resultado'
    ).innerText = `Você venceu! Você escolheu ${escolha} e o computador escolheu ${escolhaComputador}`;
  } else {
    document.getElementById(
      'resultado'
    ).innerText = `Você perdeu! Você escolheu ${escolha} e o computador escolheu ${escolhaComputador}`;
  }
}
