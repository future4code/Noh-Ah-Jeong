import axios from "axios"
import { BASE_URL } from "../constants/url"

export const createPost = (body) => {
    const token = localStorage.getItem("token")

    axios
        .post(`${BASE_URL}/posts`, body, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            alert("Post criado!")
        })
        .catch(error => {
            alert("Não foi possível criar o post!")
        })
}

export const createComment = (body, params) => {
    const token = localStorage.getItem("token")

    console.log("aqui")

    axios
        .post(`${BASE_URL}/posts/${params.id}/comment`, body, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            alert("Comentário criado!")

            window.location.reload();
        })
        .catch(error => {
            alert("Não foi possível criar o comentário!")
        })
}

export const votePost = (body, postId) => {
    const token = localStorage.getItem("token")

    axios
        .put(`${BASE_URL}/posts/${postId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            alert("Voto!")

            window.location.reload()
        })
        .catch((error) => {
            alert("Erro no voto!")
        })
}

export const voteComment = (body, postId, commentId) => {
    const token = localStorage.getItem("token")

    axios
        .put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            alert("Voto!")

            window.location.reload()
        })
        .catch((error) => {
            alert("Erro no voto!")
        })
}