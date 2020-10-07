let listaDePost = []

function apertarCriarPost() {
    let inputDoTitulo = document.getElementById("titulo-post")
    let inputDoAutor = document.getElementById("autor-post")
    let inputDoConteudo = document.getElementById("conteudo-post")

    let post = {
        titulo: inputDoTitulo.value,
        autor: inputDoAutor.value,
        conteudo: inputDoConteudo.value
    }

    listaDePost = [...listaDePost, post]

    function postar() {
        let containerDePost = document.getElementById("container-de-posts")
        containerDePost.innerHTML += "<li>" + post.titulo + " " + post.autor + " " + post.conteudo + "</li>"
    }
    postar()

    inputDoTitulo.value = ""
    inputDoAutor.value = ""
    inputDoConteudo.value = ""

    console.log(listaDePost)
}

