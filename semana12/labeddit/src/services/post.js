import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToFeed } from "../routes/coordinator"

export const createPost = (body, history) => {
    const token = localStorage.getItem("token")
    
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        alert("Post criado!")

        goToFeed(history)
    }).catch(error => {
        alert("Não foi possível criar o post!")
    })
}