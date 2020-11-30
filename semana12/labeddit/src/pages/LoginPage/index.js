import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MainContainer, FormContainer } from './styled'
import { useForm } from "../../hooks/useForm"
import { BASE_URL } from '../../constants/url'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const LoginPage = () => {
    const history = useHistory()
    const goToFeed = (history) => {
        history.push("/feed");
    };
    
    const { form, onChangeInput } = useForm({
        email: "",
        password: "",
    })

    const onSubmit = (event) => {
        event.preventDefault()

        const body = {
            email: form.email,
            password: form.password
        }

        axios
            .post(`${BASE_URL}/login`, body)
            .then((response) => {
                // localStorage.setItem('token', response.data.token)
                goToFeed()
                console.log(response)
            })
            .catch((error) => {
                alert("Usuário e/ou senha errado!")
                console.log(error)
            })
    }

    return (
        <MainContainer>
            <FormContainer onSubmit={onSubmit}>
                <input
                    required
                    label="E-mail"
                    type='email'
                    onChange={onChangeInput}
                    value={form.email}
                    name={'email'}
                />
                <input
                    required
                    label="Senha"
                    type='password'
                    onChange={onChangeInput}
                    value={form.password}
                    name={'password'}
                />
                <button>
                    Entrar
                </button>
            </FormContainer>
            <Button variant='contained' color='primary' href='/signup' >
                Cadastrar
            </Button>
        </MainContainer>
    );
}

export default LoginPage;