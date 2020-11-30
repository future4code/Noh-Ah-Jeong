export const BaseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/nohah'

export const axiosConfig = {
    headers: { auth: localStorage.getItem("token") }
}