import axios from 'axios'

const URL = "https://viacep.com.br/ws"

export const getAddressByCep = async (cep: string) => {
    try {
        console.log(URL, cep)
        const result = await axios.get(`${URL}/${cep}/json`)

        const addressData = {
            address: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return addressData
    } catch (error) {
        throw new Error(error.message)
    }
}