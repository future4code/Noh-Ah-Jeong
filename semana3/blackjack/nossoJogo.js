/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
   const carta1Usuario = comprarCarta();
   const carta2Usuario = comprarCarta();
   const carta1Computador = comprarCarta();
   const carta2Computador = comprarCarta();

   const pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   const pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

   console.log("Usuário - cartas: " + carta1Usuario.texto + carta2Usuario.texto + " - pontuação " + pontuacaoUsuario)
   console.log("Computador - cartas: " + carta1Computador.texto + carta2Computador.texto + " - pontuação " + pontuacaoComputador)

   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log ("O usuário ganhou!")
   } else if (pontuacaoUsuario < pontuacaoComputador) {
      console.log ("O computador ganhou!")
   } else {
      console.log ("Empate!")
   }
   
} else {
	console.log ("O jogo acabou.")
}