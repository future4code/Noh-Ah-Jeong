import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToFeed } from "../routes/coordinator"

export const login = (body, history) => {

    axios
        .post(`${BASE_URL}/login`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)
        })
        .catch(error => {
            alert("Usuário e/ou senha errado!")
        })
}

export const signup = (body, history) => {

    axios
        .post(`${BASE_URL}/signup`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)
        }).catch(error => {
            alert("Falha no cadastro!")
            console.log(error)
        })
}