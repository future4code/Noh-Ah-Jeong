console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   const cartasDoUsuario = []
   const cartasDoComputador = []

   cartasDoUsuario.push (comprarCarta())
   cartasDoUsuario.push (comprarCarta())
   cartasDoComputador.push (comprarCarta())
   cartasDoComputador.push (comprarCarta())
   
   if (cartasDoUsuario[0].valor === cartasDoUsuario[1].valor === 11) {
      cartasDoUsuario[0] = comprarCarta()
      cartasDoUsuario[1] = comprarCarta()
   } else if (cartasDoComputador[0].valor === cartasDoComputador[1].valor === 11) {
      cartasDoComputador[0] = comprarCarta()
      cartasDoComputador[1] = comprarCarta()
   }

   let pontuacaoDoUsuario = cartasDoUsuario[0].valor + cartasDoUsuario[1].valor
   let pontuacaoDoComputador = cartasDoComputador[0].valor + cartasDoComputador[1].valor
   let textoParaUsuario = cartasDoUsuario[0].texto + cartasDoUsuario[1].texto
   let textoParaComputador = cartasDoComputador[0].texto + cartasDoComputador[1].texto
   let pegarMaisCartas = true

   while ((pontuacaoDoUsuario < 21) && pegarMaisCartas) {
      if (confirm("Suas cartas são " + textoParaUsuario + ". A carta revelada do computador é " + cartasDoComputador[0].texto + "." + "\n" + "Deseja comprar mais uma carta?")) {
      cartasDoUsuario.push (comprarCarta())
      let indiceDoUsuario = cartasDoUsuario.length - 1
      pontuacaoDoUsuario = pontuacaoDoUsuario + cartasDoUsuario[indiceDoUsuario].valor
      textoParaUsuario = textoParaUsuario + cartasDoUsuario[indiceDoUsuario].texto
      } else {
         while (pontuacaoDoComputador < pontuacaoDoUsuario) {
            cartasDoComputador.push (comprarCarta())
            let indiceDoComputador = cartasDoComputador.length - 1
            pontuacaoDoComputador = pontuacaoDoComputador + cartasDoComputador[indiceDoComputador].valor
            textoParaComputador = textoParaComputador + cartasDoComputador[indiceDoComputador].texto
         }
         pegarMaisCartas = false
      }
   }

   if (pontuacaoDoUsuario > 21) {
      alert("Suas cartas são " + textoParaUsuario + ". Sua pontuação é " + pontuacaoDoUsuario + "\n" + "As cartas do computador são " + textoParaComputador + ". A pontuação do computador é " + pontuacaoDoComputador + "." + "\n" + "O computador ganhou!")
   } else if ((pontuacaoDoUsuario < 21) && (pontuacaoDoComputador > 21)) {
      alert("Suas cartas são " + textoParaUsuario + ". Sua pontuação é " + pontuacaoDoUsuario + "\n" + "As cartas do computador são " + textoParaComputador + ". A pontuação do computador é " + pontuacaoDoComputador + "." + "\n" + "O usuário ganhou!")
   } else if (pontuacaoDoUsuario === pontuacaoDoComputador) {
      alert("Suas cartas são " + textoParaUsuario + ". Sua pontuação é " + pontuacaoDoUsuario + "\n" + "As cartas do computador são " + textoParaComputador + ". A pontuação do computador é " + pontuacaoDoComputador + "." + "\n" + "Empate!")
   } else {
      if (pontuacaoDoUsuario > pontuacaoDoComputador) {
         alert("Suas cartas são " + textoParaUsuario + ". Sua pontuação é " + pontuacaoDoUsuario + "\n" + "As cartas do computador são " + textoParaComputador + ". A pontuação do computador é " + pontuacaoDoComputador + "." + "\n" + "O usuário ganhou!")
      } else if (pontuacaoDoUsuario < pontuacaoDoComputador) {
         alert("Suas cartas são " + textoParaUsuario + ". Sua pontuação é " + pontuacaoDoUsuario + "\n" + "As cartas do computador são " + textoParaComputador + ". A pontuação do computador é " + pontuacaoDoComputador + "." + "\n" + "O computador ganhou!")
      }
   }

} else {
	console.log ("O jogo acabou.")
}