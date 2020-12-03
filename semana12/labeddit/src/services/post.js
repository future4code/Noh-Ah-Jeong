import axios from "axios"
import { BASE_URL } from "../constants/url"

export const createPost = (body) => {
    const token = localStorage.getItem("token")
    
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        alert("Post criado!")
    }).catch(error => {
        alert("Não foi possível criar o post!")
    })
}

export const createComment = (body, params) => {
    const token = localStorage.getItem("token")
    
    axios.post(`${BASE_URL}/posts/${params.id}/comment`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        alert("Comentário criado!")
    }).catch(error => {
        alert("Não foi possível criar o comentário!")
    })
}