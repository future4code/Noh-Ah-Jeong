function adicionarTarefa() {
    const inputDoUsuario = document.getElementById("tarefa")
    aTarefa = tarefa.value
    oDia = document.getElementById("dias-semana").value

    if (aTarefa === "") {
        alert("Digite alguma tarefa!")
    } else {
        switch (oDia) {
            case "domingo":
                document.getElementById("domingo").innerHTML += "<li>" + aTarefa + "</li>"
            break
            case "segunda":
                document.getElementById("segunda").innerHTML += "<li>" + aTarefa + "</li>"
            break
            case "terca":
                document.getElementById("terca").innerHTML += "<li>" + aTarefa + "</li>"
            break
            case "quarta":
                document.getElementById("quarta").innerHTML += "<li>" + aTarefa + "</li>"
            break
            case "quinta":
                document.getElementById("quinta").innerHTML += "<li>" + aTarefa + "</li>"
            break
            case "sexta":
                document.getElementById("sexta").innerHTML += "<li>" + aTarefa + "</li>"
            break
            case "sabado":
                document.getElementById("sabado").innerHTML += "<li>" + aTarefa + "</li>"
            break
            default:
            break
        }
    }

    inputDoUsuario.value = ""
}